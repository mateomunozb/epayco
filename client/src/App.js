import './App.css'

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import LoginForm from './components/Loginform'
import RegisterForm from './components/Registerform'
import Profile from './components/Profile'
import { useState } from 'react'

function App() {
  const [profileAccess, setProfileAccess] = useState(false)

  const eventhandler = (data) => {
    if (data.token) {
      setProfileAccess(data.token)
    }
  }

  return (
    <Router>
      <div className='container content'>
        <Route
          exact
          path='/'
          component={() => <LoginForm onChange={eventhandler} />}
        />
        <Route
          exact
          path='/register'
          component={() => <RegisterForm onChange={eventhandler} />}
        />
        {profileAccess ? (
          <Route
            exact
            path='/profile'
            component={() => <Profile token={profileAccess} />}
          />
        ) : (
          <Redirect to='/' />
        )}
      </div>
    </Router>
  )
}

export default App
