import {EventEmitter} from 'events'
import assign from 'object-assign'
import EmojiDispatcher from './emojiDispatcher'
import {CHANGE_EVENT, GOT_DATA} from './consts'

let data = null

let EmojiStore = assign({}, EventEmitter.prototype, {
  emitChange () {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  getEmojis () {
    return Object.keys(data).map(key => {
      return {
        'binding': key,
        'source': data[key]
      }
    })
  }
})

EmojiStore.dispatchToken = EmojiDispatcher.register(payload => {
  let action = payload.action

  switch (action.type) {
    case GOT_DATA:
      data = action.all
      EmojiStore.emitChange()
      break
  }
})

export default EmojiStore
