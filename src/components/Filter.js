
import React from 'react'

const Filter = ({nameFilter,handleNameFilterChange}) => {
    return (
        <div>
            <p>find countries</p>
            <input value={nameFilter} 
                onChange={handleNameFilterChange}
            />
        </div>
    )
}

export default Filter