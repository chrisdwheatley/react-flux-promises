import React from 'react'
import ListStore from './listStore'
import {getData} from './listActionCreator'

export default React.createClass({
  displayName: 'ListComponent',
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
    ListStore.addChangeListener(this.onChange)
  },
  onChange () {
    this.setState({
      all: ListStore.getData()
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
