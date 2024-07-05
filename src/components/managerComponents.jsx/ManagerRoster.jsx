import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../../Middle'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import RosterComponent from './smallerComponent/RosterComponent';
const Header = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-300 rounded-lg shadow-md w-full mb-4">
      <div className="flex items-center justify-center">
        <p className="text-xl font-bold">StaffEmail</p>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Date</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Day</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Shift</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Remove</h2>
      </div>
     
    </div>
  );
};
function ManagerRoster() {
  const {managerLogged}=useContext(Context)
  let [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`${server}/manager/seeRoster`,{
      withCredentials:true
    }).then((res)=>{
      setData(res.data.message)
      console.log(res.data.message)
    })
    .catch((e)=>{
      console.log("e",e)
    })
  },[data])
  return (!managerLogged?<Navigate to="/"></Navigate>:
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6 space-y-5 w-full">
    <h1 className="text-2xl font-bold mb-6">Staff Roster</h1>
    {Header()}
    {
       data.map((x)=>{ return <RosterComponent staffEmail={x.staffEmail} date={x.date} day={x.day} shift={x.shift} _id={x._id}></RosterComponent>})
    }
    </div>
    </>
  )
}

export default ManagerRoster