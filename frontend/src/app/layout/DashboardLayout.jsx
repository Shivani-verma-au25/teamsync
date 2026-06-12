import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="h-full overflow-auto">
      <h1>this is for my nav</h1>
          <Outlet />
    </div>
  )
}

export default DashboardLayout
