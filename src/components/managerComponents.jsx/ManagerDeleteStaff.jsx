import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Context, server } from '../../Middle';
import { Navigate } from 'react-router-dom';
import StaffComponent from './smallerComponent/StaffComponent';

const Header = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-300 rounded-lg shadow-md w-full mb-4">
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold">Name</p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold">Email</h2>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold">Remove</h2>
        </div>
      </div>
    );
  };

function ManagerDeleteStaff() {
    const {managerLogged}=useContext(Context)
    const [data,setData]=useState([])
    useEffect(()=>{
             axios.get(`${server}/manager/getAllStaff`,{
                withCredentials:true
            })
            .then((res)=>{
            setData(res.data.message)                
            })
           .catch((e)=>
           {
            toast.error(e.response.data.message)
           })
    },[data])
  
    return (!managerLogged?<Navigate to="/"></Navigate>:
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6 space-y-5 w-full">
        <h1 className="text-2xl font-bold mb-6">Staff Roster</h1>
        {Header()}
        {
           data.map((x)=>{ return <StaffComponent name={x.name} email={x.email}></StaffComponent>})
        }
        </div>
        </>
      )
}

export default ManagerDeleteStaff