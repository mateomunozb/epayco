import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styleprofile.css'
import { axios } from '../axios'
import Product from './Product'
import ProductList from './Produclist'

const Profile = () => {
  const token = sessionStorage.getItem('token')
  const [userData, setUserData] = useState({})
  const [showProducForm, setShowProductForm] = useState(false)

  const showProductFormHandler = (data) => setShowProductForm(false)

  const obtainUserData = async () => {
    try {
      const { data } = await axios.get('/profile', { headers: { token } })
      setUserData(data.user)
    } catch (error) {
      console.log(error)
    }
  }

  const removeStorage = async () => {
    sessionStorage.removeItem('token')
  }

  useEffect(() => {
    obtainUserData()
  })

  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <h1 className='navbar-brand'>Perfil</h1>
        <Link className='btn btn-dark' to='/' onClick={removeStorage}>
          <i className='fas fa-sign-out-alt'></i> Salir
        </Link>
      </nav>
      <div className='contain'>
        {showProducForm ? <Product onChange={showProductFormHandler} /> : null}
        <div className='card' style={{ width: '100%' }}>
          <div className='card-body'>
            <h1 className='card-title'>Datos </h1>
            <p className='card-text'>
              <strong>Documento de identidad:</strong> {userData.cc}
              <br />
              <strong>Nombre:</strong> {userData.name}
              <br />
              <strong>Email:</strong> {userData.email}
              <br />
              <strong>Teléfono:</strong> {userData.phone}
              <br />
            </p>
            <div className='row justify-content-between px-3'>
              <Link to='#' className='btn btn-dark' onClick={() => setShowProductForm(true)}>
                Generar Factura
              </Link>
            </div>
          </div>
        </div>
        <ProductList products={userData.products} />
      </div>
    </div>
  )
}

export default Profile
