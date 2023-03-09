import React from 'react'
import './style.css'

const Categories = ({ categories, filterItems }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button type='buttton' className='filter-btn' key={index} onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories