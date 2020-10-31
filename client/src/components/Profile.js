import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styleprofile.css'
import { axios } from '../axios'
// import axios from 'axios'

const Profile = (props) => {
  const { token } = props
  const [userData, setUserData] = useState({})

  const obtainUserData = async () => {
    try {
      const { data } = await axios.get('/profile', { headers: { token } })
      setUserData(data.user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtainUserData()
  })

  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <h1 className='navbar-brand'>Perfil</h1>
        <Link className='btn btn-dark' to='/'>
          <i className='fas fa-sign-out-alt'></i> Salir
        </Link>
      </nav>
      <div className='contain'>
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
              <Link className='btn btn-dark'>Generar Factura</Link>
              <h3>Saldo: $0.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
