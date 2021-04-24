import React from 'react'
import { CCard, CCardBody, CCardHeader, CButton as AwareButton, CLabel as AwareLabel, } from '@coreui/react'
import './ProductDetail.scss'

const ProductDetail = () => {
  return (
        <CCard>
          <CCardHeader>
            <div className="ProductDetail">
              <AwareLabel>Product Info</AwareLabel>
              <AwareButton color="primary">Edit Product</AwareButton>
            </div>
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td><strong>xyz</strong></td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td><strong>10000</strong></td>
                </tr>
                </tbody>
              </table>
          </CCardBody>
        </CCard>
  )
}

export default ProductDetail
