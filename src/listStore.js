import {EventEmitter} from 'events'
import assign from 'object-assign'
import ListDispatcher from './listDispatcher'

let data = null

let ListStore = assign({}, EventEmitter.prototype, {
  emitChange () {
    this.emit('change')
  },
  addChangeListener (callback) {
    this.on('change', callback)
  },
  removeChangeListener (callback) {
    this.removeListener('change', callback)
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
    case 'GOT_DATA':
      data = action.all
      ListStore.emitChange()
      break
  }
})

export default ListStore
