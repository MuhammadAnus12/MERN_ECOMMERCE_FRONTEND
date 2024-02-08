import React from 'react'
import NavBar from '../features/navBar/NavBar'
import UserProfile from "../features/user/components/UserProfile"
const UserProfilePage = () => {
  return (
    <div>
        <NavBar>
          <h1 className='mx-auto text-2xl'>My Profile</h1>
            <UserProfile></UserProfile>
        </NavBar>
    </div>
  )
}

export default UserProfilePage