import EmojiDispatcher from './emojiDispatcher'
import {fetchData} from './fetch'
import {API_URL, GET_DATA, GOT_DATA} from './consts'

export function getData () {
  EmojiDispatcher.handleViewAction({
    type: GET_DATA
  })

  fetchData(API_URL)
}

export function gotData (data) {
  data.then(resp => {
    EmojiDispatcher.handleServerAction({
      type: GOT_DATA,
      all: resp
    })
  })

}
