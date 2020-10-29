import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const RegisterForm = () => {
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
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='text'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='name'
                  placeholder='Nombre completo'
                  name='name'
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='email'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='email'
                  placeholder='Email'
                  name='email'
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='text'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='phone'
                  placeholder='Teléfono'
                  name='phone'
                />
              </div>
              <div className='form-group pb-4'>
                <input
                  type='password'
                  className='form-control text-white border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent '
                  id='password'
                  placeholder='Contraseña'
                  name='password'
                />
              </div>

              <div className='row justify-content-center'>
                <button
                  type='submit'
                  className='mt-3 p-2 col-sm-10 btn btn-lg btn-outline text-white shadow-lg rounded-pill '>
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
