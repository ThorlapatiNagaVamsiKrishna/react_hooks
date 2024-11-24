import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRouter = () => {
    const jwtToken = Cookies.get('jwtToken')
    return jwtToken !== undefined ? <Outlet /> : <Navigate to='/login' />

}

export default ProtectedRouter