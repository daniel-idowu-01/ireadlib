import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SidebarNav'

const DashboardLayout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
