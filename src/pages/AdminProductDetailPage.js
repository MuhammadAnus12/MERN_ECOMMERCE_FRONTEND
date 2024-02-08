import React from 'react'
import NavBar from '../features/navBar/NavBar'
import AdminProductDetail from '../features/admin/components/AdminProductDetail'
import Footer from '../features/common/Footer'
function AdminProductDetailPage() {
  return (
    <div>
        <NavBar>
            <AdminProductDetail/>
        </NavBar>
        <Footer/>
    </div>
  )
}

export default AdminProductDetailPage