import React from 'react'
import {  Outlet } from 'react-router-dom'
import  SidebarComponents from '../sidebar'

const Layout = () => {
  return (
    <div className='grid-admin'>
      <SidebarComponents/>
     <Outlet/>
    </div>
  )
}

export default Layout