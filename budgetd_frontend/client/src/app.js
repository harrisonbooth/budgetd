import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import MainContainer from './containers/MainContainer'
import Home from './components/Home'
// import BudgetContainer from './containers/BudgetContainer'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    )
  }
}

const onWindowLoad = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}

window.onload = onWindowLoad
