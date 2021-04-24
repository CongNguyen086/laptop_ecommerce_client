import React, { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios';

import CollapsedFilter from '../CollapsedFilter/CollapsedFilter';

function FilterContainer(props) {
  const [filterList, setFilterList] = useState([]);
  const getFilterList = useCallback(async () => {
    const response = await axiosInstance.get('/product/getFilterOptions');
    setFilterList(response.data);
  }, []);

  useEffect(() => {
    getFilterList();
  }, [getFilterList])

  const renderFilterList = (list) => {
    return list.map((item) => (
      <CollapsedFilter
        key={item.type}
        title={item.type}
        options={item.options}
      />
    ));
  }

  return (
    <div>
      <h3>Filter</h3>
      {renderFilterList(filterList)}
    </div>
  );
}

export default FilterContainer;
