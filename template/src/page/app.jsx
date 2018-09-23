import React from 'react'
{{#if_eq state 'redux'}}
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from '../redux/store'
{{/if_eq}}
{{#if_eq state 'mobx'}}
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import { stores, history } from '../mobx/stores'
{{/if_eq}}
import routes from './routes'

{{#if_eq state 'redux'}}
const APP = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </Provider>
  )
}
{{/if_eq}}
{{#if_eq state 'mobx'}}
const APP = () => {
  return(
    <Provider {...stores}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
};
{{/if_eq}}

export default APP