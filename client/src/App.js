import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './components/Loginform'
import RegisterForm from './components/Registerform'

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
      </div>
    </Router>
  )
}

export default App
