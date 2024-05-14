import React from 'react'
import AdminNav from './AdminNav'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <AdminNav></AdminNav>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout
