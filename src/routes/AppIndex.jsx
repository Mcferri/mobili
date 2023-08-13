import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationMenu from '../Components/NavigationMenu'
export default function AppIndex() {
  return (
    <div>
      <NavigationMenu />
      <Outlet />
    </div>
  )
}
