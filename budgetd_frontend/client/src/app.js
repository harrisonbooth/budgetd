import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/MainContainer'
import Home from './components/Home'
// import BudgetContainer from './containers/BudgetContainer'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
          <IndexRoute component={Home}/>
          <Route path='/shows' component={BudgetContainer}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
