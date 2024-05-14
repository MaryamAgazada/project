import React from 'react'
import MainNav from './MainNav'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <MainNav></MainNav>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
