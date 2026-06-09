import React from 'react'
import {useSelector} from "react-redux"
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const {employee,isLoading} = useSelector((state) => state.auth);

    if(isLoading)  return <h1>Loading....</h1>
    if(!employee){
        return <Navigate to='/' />
    }
    
  return (
   <Outlet/>
  )
}

export default ProtectedRoute
