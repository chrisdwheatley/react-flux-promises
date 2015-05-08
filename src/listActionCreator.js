import ListDispatcher from './listDispatcher'
import {fetchData} from './fetch'

export function getData () {
  ListDispatcher.handleViewAction({
    type: 'GET_DATA'
  })

  fetchData('https://api.github.com/emojis')
}

export function gotData (data) {
  data.then(resp => {
    ListDispatcher.handleServerAction({
      type: 'GOT_DATA',
      all: resp
    })
  })

}
