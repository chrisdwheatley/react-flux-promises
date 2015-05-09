import {EventEmitter} from 'events'
import assign from 'object-assign'
import ListDispatcher from './listDispatcher'
import {CHANGE_EVENT, GOT_DATA} from './consts'

let data = null

let ListStore = assign({}, EventEmitter.prototype, {
  emitChange () {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  getData () {
    return Object.keys(data).map(key => {
      return {
        'binding': key,
        'source': data[key]
      }
    })
  }
})

ListStore.dispatchToken = ListDispatcher.register(payload => {
  let action = payload.action

  switch (action.type) {
    case GOT_DATA:
      data = action.all
      ListStore.emitChange()
      break
  }
})

export default ListStore
