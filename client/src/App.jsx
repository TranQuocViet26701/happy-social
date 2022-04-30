import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import {
  HomePage,
  LoginPage,
  Messenger,
  ProfilePage,
  RegisterPage,
} from './pages'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={user && user._id ? HomePage : LoginPage}
        />
        <Route exact path='/login'>
          {user && user._id ? <Redirect to='/' /> : <LoginPage />}
        </Route>
        <Route exact path='/register'>
          {user && user._id ? <Redirect to='/' /> : <RegisterPage />}
        </Route>
        <Route exact path='/messenger'>
          {user && user._id ? <Messenger /> : <LoginPage />}
        </Route>
        <Route exact path='/profile/:username' component={ProfilePage} />
      </Switch>
    </Router>
  )
}

export default App
