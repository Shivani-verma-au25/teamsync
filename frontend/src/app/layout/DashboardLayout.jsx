import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  const {mode} = useSelector((state) => state.theme)

  useEffect(() =>{
    if(mode === 'light'){
      document.body.classList.add('light')
    }else{
      document.body.classList.remove('light')
    }
  },[mode])
  return (
    <div className="h-full overflow-auto">
      <h1>this is for my nav</h1>
          <Outlet />
    </div>
  )
}

export default DashboardLayout
