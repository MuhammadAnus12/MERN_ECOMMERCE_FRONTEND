import React from 'react'
import NavBar from '../features/navBar/NavBar'
import AdminProductList from '../features/admin/components/AdminProductList'
import Footer from '../features/common/Footer';
function AdminHome() {
  return (
    <div>
        <NavBar>
            <AdminProductList/>
        </NavBar>
        <Footer/>
    </div>
  )
}

export default AdminHome;