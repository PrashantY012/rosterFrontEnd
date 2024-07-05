import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../../Middle'
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';
export default function StaffHome() {
  const [staffName,setStaffName]=useState("None")
    useEffect(()=>{
      axios.get(
        `${server}/staff/staffSelf`,
        { withCredentials: true, }
      ).then((e) => {
        setStaffName(() => e.data.message)
      }).catch((e) => {
      })
    },[])
    const {staffLogged}=useContext(Context);
    useEffect(()=>{},[staffLogged])
  return (!staffLogged)? <Navigate to="/"></Navigate>:(
    <div class="bg-gray-100 flex items-center justify-center h-svh overscroll-y-none ">

    <div class="flex items-center justify-center w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div class="text-center p-10">
            <h1 class="text-white text-4xl font-bold mb-2">Welcome, <span class="text-yellow-300">{staffName}</span></h1>
            <p class="text-gray-200">We're glad to have you here!</p>
        </div>
    </div>
    
    </div>
      )
}
