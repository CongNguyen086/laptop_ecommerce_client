import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  CButton as AwareButton,
  CDataTable as AwareDataTable,
  CPagination as AwarePagination
} from '@coreui/react'
import "./PagingLayout.scss";

const PagingLayout = ({
    data,
    onRowClick,
    onPageChange,
    itemsPerPage,
}) => {
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && onPageChange(newPage);
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
   <>
    <AwareDataTable
        items={data}
        fields={[
            { key: 'name', _classes: 'font-weight-bold' },
            'registered', 'role', '_'
        ]}
        hover
        striped
        itemsPerPage={itemsPerPage}
        activePage={page}
        clickableRows
        onRowClick={onRowClick}
        scopedSlots = {{
            '_':
            (item)=> {
              if (item.onDelete) {
                return (
                  <td>
                    <AwareButton color="dark" onClick={item.onDelete}>Delete</AwareButton>
                  </td>
              )
              }
              return <></>;
            }
        }}
        />
    <AwarePagination
        activePage={page}
        onActivePageChange={pageChange}
        pages={Math.round(data.length / itemsPerPage)}
        doubleArrows={false} 
        align="center"
    />
   </>
  )
}

export default PagingLayout
