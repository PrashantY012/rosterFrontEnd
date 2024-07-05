import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Navigate, NavLink } from 'react-router-dom';
import { Context } from '../../Middle';
import StaffRosterSubComp from './StaffRosterSubComp';

const Header = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-300 rounded-lg shadow-md w-full mb-4">

      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Date</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Day</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-bold">Shift</h2>
      </div>
     
    </div>
  );
};

function StaffRoster() {
  const [roster,setRoster]=useState([]);
  const {staffLogged}=useContext(Context);
  useEffect(()=>{
    
       axios.get(
          `http://localhost:3000/staff/seeRoster`,
          {
           
            withCredentials: true,
          }
        ).then((res)=>{
          console.log("success:staffRoster",res)
          setRoster(res.data.message)
        }).catch((e)=>
        {
            // toast.error("error");
            console.log("staffrosterError:",e);
        })
      
    
  },[])
  
  useEffect(()=>{},[staffLogged])
  return (!staffLogged)? <Navigate to="/"></Navigate>:(
    <div>
  {Header()}
    {roster.map((x)=>{
      return <StaffRosterSubComp date={x.date} day={x.day} shift={x.shift}></StaffRosterSubComp>
    })}
    </div>
  )
}

export default StaffRoster