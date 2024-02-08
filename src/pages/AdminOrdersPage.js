import AdminOrders from "../features/admin/components/AdminOrder";
import NavBar from "../features/navBar/NavBar"

import React from 'react'

const AdminOrdersPage = () => {
  return (
    <div>
        <NavBar>
            <AdminOrders></AdminOrders>
        </NavBar>
    </div>
  )
}

export default AdminOrdersPage