import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleform.css'
import { axios } from '../axios'

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({})

  const handleChange = (e) => {
    e.preventDefault()
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const addUser = async () => {
    try {
      const response = await axios.post('/user/register', registerData)
      console.log('TLC: addUser -> response', response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-sm-6'>
        <div className='card mt-5 bg-transparent shadow-lg border border-white rounded-lg'>
          <div className='card-body p-5 text-white'>
            <h1 className='text-center pt-3 pb-5 text-white'>
              <span className='fas fa-user-plus'></span> Registrarse
            </h1>
            <form>
              <div className='form-group pb-4'>
                <input
                  type='text'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='cc'
                  placeholder='Numero Documento'
                  name='cc'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='text'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='name'
                  placeholder='Nombre completo'
                  name='name'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='email'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='email'
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='text'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='phone'
                  placeholder='Teléfono'
                  name='phone'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='password'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='password'
                  placeholder='Contraseña'
                  name='password'
                  onChange={handleChange}
                />
              </div>

              <div className='row justify-content-center'>
                <button
                  onClick={addUser}
                  type='button'
                  className='mt-3 p-2 col-sm-8 btn btn-lg btn-outline text-white shadow-lg rounded-pill '>
                  Registrarse
                </button>
                <span className='pt-5'>
                  Si ya tienes una cuenta{' '}
                  <Link className='text-white font-weight-bold' to='/'>
                    Inicia sesión
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

export default RegisterForm
