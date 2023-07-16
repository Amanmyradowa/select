import React from 'react'
import Market from '../components/Market'
import Breadcrumb from '../components/Breadcrumb'

const Category = () => {
  return (
    <div className='container'>
      <div className="category_page">
        <Breadcrumb />
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