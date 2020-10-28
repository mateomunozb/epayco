import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './components/Loginform'
import RegisterForm from './components/Registerform'

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/register' component={RegisterForm} />
    </Router>
  )
}

export default App
