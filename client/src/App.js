import './App.css'

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import LoginForm from './components/Loginform'
import RegisterForm from './components/Registerform'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'

function App() {
  const [profileAccess, setProfileAccess] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) setProfileAccess(true)
  }, [])

  return (
    <Router>
      <div className='container content'>
        <Route exact path='/' component={() => <LoginForm />} />
        <Route exact path='/register' component={() => <RegisterForm />} />
        {profileAccess ? (
          <Route exact path='/profile' component={() => <Profile />} />
        ) : (
          <Redirect to='/' />
        )}
      </div>
    </Router>
  )
}

export default App
