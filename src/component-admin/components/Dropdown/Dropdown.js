import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import './Dropdown.scss'

const Dropdown = ({
  title,
  items,
}) => {
  return (
    <CDropdown className="m-1 btn-group">
        <CDropdownToggle color="primary">
            {title}
        </CDropdownToggle>
        <CDropdownMenu>
          {items.map((item, idx) => <CDropdownItem key={idx} onClick={item.onClick}>{item.name}</CDropdownItem>)}
        </CDropdownMenu>
    </CDropdown>
  )
}

export default Dropdown;
