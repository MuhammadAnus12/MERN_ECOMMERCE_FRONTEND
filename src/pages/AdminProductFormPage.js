import React from 'react'
import NavBar from '../features/navBar/NavBar'
import ProductForm from '../features/admin/components/ProductForm'
function AdminProductFormPage() {
  return (
    <div>
        <NavBar>
            <ProductForm/>
        </NavBar>
    </div>
  )
}

export default AdminProductFormPage