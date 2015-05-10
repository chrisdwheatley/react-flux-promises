import React from 'react'
import EmojiStore from './emojiStore'
import {getData} from './emojiActionCreator'

export default React.createClass({
  displayName: 'EmojiComponent',
  propTypes: {
    all: React.PropTypes.array
  },
  getInitialState () {
    return {
      all: []
    }
  },
  componentWillMount () {
    getData()
    EmojiStore.addChangeListener(this.onChange)
  },
  onChange () {
    this.setState({
      all: EmojiStore.getEmojis()
    })
  },
  render () {
    const items = this.state.all.map(item => {
      return (
        <li>:{item.binding}: <img src={item.source}></img></li>
      )
    })
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
})
