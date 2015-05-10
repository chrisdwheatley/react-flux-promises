import fetch from 'fetch'
import {gotData} from './emojiActionCreator'

export function fetchData (url) {
  return window.fetch(url)
    .then(response => {
      gotData(response.json())
    })
}
