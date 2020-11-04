import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './styleform.css'
import { axios } from '../axios'
import NoticeBadge from './Noticebadge'

const LoginForm = (props) => {
  const [loginData, setLoginData] = useState({})
  const [token, setToken] = useState(null)
  const [errorForm, setErrorForm] = useState(null)

  const handleChange = (e) => {
    e.preventDefault()
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const loginUser = async () => {
    try {
      const { data } = await axios.post(`/user/login`, loginData)
      sessionStorage.setItem('token', data.token)
      setToken(data.token)
    } catch (error) {
      setErrorForm(error.response.data.message)
    }
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-sm-6'>
        <div className='card mt-5 bg-transparent shadow-lg border border-white rounded-lg'>
          <div className='card-body p-5 text-white'>
            <h1 className='text-center pt-3 pb-5 text-white'>
              <span className='fa fa-sign-in'></span> Iniciar sesión
            </h1>
            <div className='row justify-content-center p-2'>
              {errorForm ? <NoticeBadge notice={errorForm} /> : null}
            </div>
            <form>
              <div className='form-group pb-4'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='cc'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='cc'
                  placeholder='Numero Documento'
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  onChange={handleChange}
                  name='password'
                  type='password'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='password'
                  placeholder='Contraseña'
                />
              </div>

              <div className='row justify-content-center'>
                <button
                  onClick={loginUser}
                  type='button'
                  className='mt-3 p-2 col-sm-8 btn btn-lg btn-outline text-white shadow-lg rounded-pill '>
                  Ingresar
                </button>
                {token ? <Redirect to='/profile' /> : null}
                <span className='pt-5'>
                  Si no tienes una cuenta{' '}
                  <Link className='text-white font-weight-bold' to='/register'>
                    Registrate
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
