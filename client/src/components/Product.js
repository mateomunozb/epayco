import React, { useState } from 'react'
import './styleproduct.css'
import { axios } from '../axios'
import NoticeBadge from './Noticebadge'

const Product = (props) => {
  const [productData, setProductData] = useState({ descuento: 0, description: '' })
  const [errorForm, setErrorForm] = useState(null)
  const [closeForm, setCloseForm] = useState(true)
  const token = sessionStorage.getItem('token')

  const handleChange = (e) => {
    e.preventDefault()
    setProductData({ ...productData, [e.target.name]: e.target.value })
  }

  const closeFormProduct = () => {
    setCloseForm(false)
    if (props.onChange) {
      props.onChange(closeForm)
    }
  }

  const addProduct = async () => {
    try {
      const { data } = await axios.post(`/profile/products`, productData, { headers: { token } })
      setErrorForm(data.message)
    } catch (error) {
      setErrorForm(error.response.data.error)
    }
  }

  return (
    <div className='product-content'>
      <div className='row justify-content-center'>
        <div className='col-sm-8'>
          <div className='card mt-5 bg-light rounded-lg'>
            <div className='card-body p-5 text-white'>
              <i className='fas fa-times-circle close' onClick={closeFormProduct}></i>
              <h1 className='text-center pt-3 pb-5 text-dark'>
                <i className='fas fa-file-invoice'></i> Factura
              </h1>
              <div className='row justify-content-center p-2'>
                {errorForm ? <NoticeBadge notice={errorForm} /> : null}
              </div>
              <form>
                <div className='form-group pb-4'>
                  <input
                    onChange={handleChange}
                    type='text'
                    className='form-control form-product border-top-0 rounded-0 border-right-0 border-left-0 bg-light '
                    id='productName'
                    placeholder='Produto o servicio'
                    name='productName'
                  />
                </div>
                <div className='form-group pb-4'>
                  <textarea
                    onChange={handleChange}
                    type='text'
                    className='form-control form-product border-top-0 rounded-0 border-right-0 border-left-0 bg-light '
                    id='description'
                    placeholder='Descripción'
                    name='description'
                  />
                </div>
                <div className='form-group pb-4'>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>$</span>
                    </div>
                    <input
                      onChange={handleChange}
                      type='number'
                      className='form-control form-product'
                      aria-label='Amount (to the nearest dollar)'
                      placeholder='Valor  '
                      name='subtotal'
                    />
                  </div>
                </div>
                <div className='form-group pb-4'>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>$</span>
                    </div>
                    <input
                      onChange={handleChange}
                      type='number'
                      className='form-control form-product'
                      aria-label='Amount (to the nearest dollar)'
                      placeholder='Descuento  '
                      name='descuento'
                    />
                  </div>
                </div>
                <div className='row justify-content-center'>
                  <button
                    onClick={addProduct}
                    type='button'
                    className='mt-3 p-2 col-sm-8 btn btn-lg btn-dark text-white shadow-lg rounded-pill '>
                    Generar factura
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
