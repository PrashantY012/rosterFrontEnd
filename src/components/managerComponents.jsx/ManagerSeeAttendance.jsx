import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AttendanceComp from './smallerComponent/AttendanceComp'
import { Context } from '../../Middle';
import { Navigate } from 'react-router-dom';

const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-300 rounded-lg shadow-md w-full mb-4">
      <div className="flex items-center justify-center">
        <p className="text-xl font-bold">Name</p>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Email</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Date</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Picture</h2>
      </div>
    </div>
  );
};


function ManagerSeeAttendance() {
  const {managerLogged}=useContext(Context)
 
  const [imagesArr,setImagesArr]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/manager/getAllAttendance",{withCredentials:true})
    .then((res)=>{
      setImagesArr(()=>res.data.message)
    })
    .catch((e)=>{
      console.log("error:",e);
    })
  },[])
  
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6 space-y-4 w-full">
    <h1 className="text-2xl font-bold mb-6">Staff Attendance</h1>
    {Header()}
    {
       imagesArr.map((x)=>{ return <AttendanceComp name={x.name} img={x.img} email={x.email} date={x.date}></AttendanceComp>})
    }
    </div>
    </>
  )
}

export default ManagerSeeAttendance