import React from 'react'
import './CategoryList.css'
import CategoryItem from '../CategoryItem/CategoryItem'

const CategoryList = ({categories}) => {
  return (
    <div className='list-container'>
      {categories.map((category) => {
        return (
          <CategoryItem category={category} key={category.id}/>
        )
      })}
    </div>
  )
}

export default CategoryList