import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard as AwareCard,
  CCardBody as AwareCardBody,
  CCardHeader as AwareCardHeader,
  CButton as AwareButton,
  CInput as AwareInput,
} from '@coreui/react'
import PagingLayout from '../PagingLayout';
import Dropdown from '../Dropdown';
import "./Products.scss";

const productsData = [
    {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', onDelete: () => console.log('delete')},
    {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', onDelete: () => console.log('delete')},
    {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', onDelete: () => console.log('delete')},
    {id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', onDelete: () => console.log('delete')},
    {id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', onDelete: () => console.log('delete')},
    {id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', onDelete: () => console.log('delete')},
    {id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', onDelete: () => console.log('delete')},
    {id: 23, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', onDelete: () => console.log('delete')},
  ]

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [filterTitle, setFilterTitle] = useState('Filter');
  const [sortTitle, setSortTitle] = useState('Sort');
  const history = useHistory();
  const dropdownFilterItems = [
    {
      name: 'All',
      onClick: () => setFilterTitle('Filter'),
    },
    {
      name: 'Color',
      onClick: () => setFilterTitle('Color'),
    },
    {
      name: 'Brand',
      onClick: () => setFilterTitle('Brand'),
    }
  ]
  const dropdownSortItems = [
    {
      name: 'All',
      onClick: () => setSortTitle('Sort'),
    },
    {
      name: 'Name',
      onClick: () => setSortTitle('Name'),
    },
    {
      name: 'Price',
      onClick: () => setSortTitle('Price'),
    },
    {
      name: 'Latest release',
      onClick: () => setSortTitle('Latest release'),
    }
  ]
  return (
    <div className="Products">
      <AwareCard>
        <AwareCardHeader>
          Products
        </AwareCardHeader>
        <div className="Products__header">
          <Dropdown title={filterTitle} items={dropdownFilterItems}/>
          <Dropdown title={sortTitle} items={dropdownSortItems}/>
          <AwareInput id="name" placeholder="Search by name" />
          <AwareButton block color="info" onClick={() => history.push('/admin/products/create')}>Create New Product</AwareButton>
        </div>
        <AwareCardBody>
          <PagingLayout 
            data={products}
            onRowClick={(item) => history.push(`/admin/products/${item.id}`)}
            onPageChange={(newPage) => history.push(`/admin/products?page=${newPage}`)}
            itemsPerPage={10}
            />
        </AwareCardBody>
      </AwareCard>
    </div>
  )
}

export default Products
