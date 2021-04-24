import React from 'react'
import {
  CCard as AwareCard,
  CCardBody,
  CCardHeader,
  CFormGroup,
  CInput,
  CLabel,
  CTextarea,
} from '@coreui/react'

const CreateProductForm = () => {
  return (
    <>
      <AwareCard>
            <CCardHeader>
              Create Product
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="product">Product name</CLabel>
                <CInput id="product" placeholder="Enter your product name" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="textarea-input">Description</CLabel>
                <CTextarea 
                    name="textarea-input" 
                    id="textarea-input" 
                    rows="9"
                    placeholder="Content..." 
                />
              </CFormGroup>
            </CCardBody>
        </AwareCard>
    </>
  )
}

export default CreateProductForm
