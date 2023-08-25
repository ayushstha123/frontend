import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserRoute = () => {
    const user=localStorage.getItem('user')
    return user!==null && user.isAdmin ? <Outlet/> : <Navigate to ="/login"/>
}

export default UserRoute