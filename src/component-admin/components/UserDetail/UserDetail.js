import React from 'react'
import { CCard, CCardBody, CCardHeader, CLabel as AwareLabel} from '@coreui/react'
import './UserDetail.scss'


const UserDetail = () => {
  return (
    <CCard>
          <CCardHeader>
            <AwareLabel>User Info</AwareLabel>
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td><strong>Nhuttm</strong></td>
                </tr>
                <tr>
                    <td>Sex</td>
                    <td><strong>Male</strong></td>
                </tr>
                </tbody>
              </table>
          </CCardBody>
    </CCard>
  )
}

export default UserDetail
