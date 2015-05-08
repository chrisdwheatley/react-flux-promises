import {Dispatcher} from 'flux'
import assign from 'object-assign'

export default assign(new Dispatcher(), {
  handleServerAction (action) {
    this.dispatch({
      source: 'server',
      action: action
    })
  },
  handleViewAction (action) {
    this.dispatch({
      source: 'view',
      action: action
    })
  }
})
