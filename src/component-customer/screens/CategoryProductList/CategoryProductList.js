import React from 'react'

import FilterContainer from '../../components/FilterContainer'

import './CategoryProductList.scss';

function CategoryProductList(props) {
  return (
    <div className='CategoryProductList__container'>
      <div className='CategoryProductList__filterContainer'>
        <FilterContainer />
      </div>
    </div>
  );
}

export default CategoryProductList;