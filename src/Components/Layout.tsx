import React, {FC} from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const Layout: FC  = () => {
  return (
    <>
    <Header />
    <Outlet />
   </>
  )
}

export default Layout