import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, LoginPage, ProfilePage, RegisterPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/profile/:username' component={ProfilePage} />
      </Switch>
    </Router>
  )
}

export default App
