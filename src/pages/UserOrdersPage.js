import React from 'react'
import NavBar from '../features/navBar/NavBar'
import UserOrders from '../features/user/components/UserOrders'
const UserOrdersPage = () => {
  return (
    <div>
        <NavBar>
          <h1 className='mx-auto text-2xl'>My Orders</h1>
            <UserOrders></UserOrders>
        </NavBar>
    </div>
  )
}

export default UserOrdersPage