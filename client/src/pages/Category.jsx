import React from 'react'
import Market from '../components/Market'
import CategoryBreadcrumb from '../components/CategoryBreadcrumb'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {id} = useParams();
  return (
    <div className='container'>
      <div className="category_page">
        <CategoryBreadcrumb />
        <div className="markets">
          <Market />
          <Market />
          <Market />
        </div>
      </div>
    </div>
  )
}

export default Category