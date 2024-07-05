import React, { useContext, useEffect } from 'react'
import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import StaffNav from './StaffNav'
import StaffRoster from './StaffRoster'
import StaffHome from './StaffHome'
import { Context } from '../../Middle'

function StaffDashboard() {
    const {staffLogged}=useContext(Context);
    useEffect(()=>{},[staffLogged])
  return (!staffLogged)? <Navigate to="/"></Navigate>:(
    <>
    <StaffNav></StaffNav>
    <Outlet></Outlet>
    {/* <Routes>
          <Route path="/staffLogin" element={<StaffLogin/>} />
           <Route path="/managerLogin" element={<ManagerLogin/>} />
          <Route path="/staffRoster" element={<StaffRoster/>} /> 
          <Route path="/" element={<StaffHome/>}/> 
       </Routes> */}
       </>
  )
}

export default StaffDashboard