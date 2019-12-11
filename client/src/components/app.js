import { h, Component } from 'preact'
import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'

import Home from '../views/home'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  };

  render () {
    return (
      <div id='app' class='bg-gray-800 w-screen h-screen'>
        <div class='w-1/2 absolute inset-0 m-auto'>
          <Router onChange={this.handleRoute}>
            <Home path='/' />
            <AsyncRoute path='/chat' getComponent={() => import('../views/chat').then(module => module.default)} />
          </Router>
        </div>
      </div>
    )
  }
}
