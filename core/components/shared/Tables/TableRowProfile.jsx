import React from 'react'

const TableRowProfile = ({ "data-key": dataKey, className = "", children }) => {
    return (
        <div className={`${dataKey % 2 != 0 ? "bg-white" : "bg-gray-100"
            } text-black text-sm grid  grid-cols-1 md:grid-cols-2 w-full ${className}`}>
            {children}
        </div>
    )
}

export default TableRowProfile