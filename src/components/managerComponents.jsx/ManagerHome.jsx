import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Middle'
import { Navigate } from 'react-router-dom'
function ManagerHome() {
  const {managerLogged}=useContext(Context)

  const [name,setName]=useState("None")
  useEffect(() => {
    axios.get("http://localhost:3000/manager/managerSelf",{
      withCredentials:true
    }).then((res)=>{
      setName(res.data.message)
    })
    .catch((e)=>{

    })
  
    
  }, [])
  
  return (!managerLogged)?<Navigate to="/"></Navigate>: (
<div class="bg-gray-100 flex items-center justify-center h-svh overscroll-y-none ">

<div class="flex items-center justify-center w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div class="text-center p-10">
        <h1 class="text-white text-4xl font-bold mb-2">Welcome, <span class="text-yellow-300">{name}</span></h1>
        <p class="text-gray-200">We're glad to have you here!</p>
    </div>
</div>

</div>
  )
}

export default ManagerHome