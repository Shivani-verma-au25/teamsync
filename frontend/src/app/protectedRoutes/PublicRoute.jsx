import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const {employee,isLoading} = useSelector((store) => store.auth);
    console.log("emp" , employee);
    
    if(isLoading) return <h1>Loading...</h1>

    if(employee) {
        return <Navigate to='/home' />
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
