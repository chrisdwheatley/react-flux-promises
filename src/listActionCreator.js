import ListDispatcher from './listDispatcher'
import {fetchData} from './fetch'
import {API_URL, GET_DATA, GOT_DATA} from './consts'

export function getData () {
  ListDispatcher.handleViewAction({
    type: GET_DATA
  })

  fetchData(API_URL)
}

export function gotData (data) {
  data.then(resp => {
    ListDispatcher.handleServerAction({
      type: GOT_DATA,
      all: resp
    })
  })

}
