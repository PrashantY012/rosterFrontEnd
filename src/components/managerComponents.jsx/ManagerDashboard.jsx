import React, { useContext } from 'react'
import ManagerNav from './ManagerNav'
import { NavLink, Outlet ,Navigate} from 'react-router-dom'
import { Context } from '../../Middle'

export default function ManagerDashboard() {
  const {managerLogged}=useContext(Context)
  return  (
    <>
    <ManagerNav></ManagerNav>
    <Outlet></Outlet>
    </>
  )
}
