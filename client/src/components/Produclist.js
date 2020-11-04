import React from 'react'

const ProductList = (props) => {
  const { products } = props
  return (
    <div>
      <h1 className='text-center'>Facturas </h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Producto</th>
            <th scope='col'>Total</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {products
            ? products.map((product, i) => (
                <tr>
                  <th scope='row'>{i + 1}</th>
                  <td>{product.product.productName}</td>
                  <td>{product.product.total}</td>
                  <td className='text-danger font-weight-bold'>
                    <i className='far fa-times-circle'></i> {product.product.status}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
