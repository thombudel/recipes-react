import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import App from './App'
import RecipesContainer from './recipes/RecipesContainer'
import RecipePage from './recipes/RecipePage'
import SignUp from './users/SignUp'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
        <Route path="/sign-up" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
