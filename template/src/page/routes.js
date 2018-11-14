
import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const createContainer = loader => Loadable({
  /* eslint-disable-next-line */
  loading: () => <div>Loading</div>,
  loader
})

const App = () => import(/* webpackChunkName: "main" */ '../general/app/index')
const Info = () => import(/* webpackChunkName: "info" */ '@components/info/index')
const ToDo = () => import(/* webpackChunkName: "todo" */ '../general/todo/index')

const routes =
  <Switch>
    <Route exact path='/' component={createContainer(App)} />
    <Route path='/info' component={createContainer(Info)} />
    <Route path='/todo' component={createContainer(ToDo)} />
    <Route render={() => <div>404 not found</div>} />
  </Switch>;

export default routes
