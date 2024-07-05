import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { Context, server } from '../Middle';

function StaffLogin() { 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {staffLogged,setStaffLogged}=useContext(Context);


 


    async function  submitFunction(e){
        // alert("Submitted");
        e.preventDefault();
        
        // console.log("clicked")
        try{
        const responseData = await axios.post(
            `${server}/staff/Login`,
            {
              "email":email,
              "password":password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          
          toast.success(responseData.data.message);
          setStaffLogged(()=>true)
        //   console.log(responseData);
        }
        catch(e)
        {
            toast.error(e.response.data.message);
            // console.log("errorStaffLogin:",e);
            setStaffLogged(()=>false)
        }
    }
    return (staffLogged)?( <Navigate to="/staffDashboard"></Navigate>):
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
          <h1 className="text-3xl font-bold mb-8 " >Staff</h1>
          <form onSubmit={submitFunction} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-green-950">
              <input
                  type='email'
                  placeholder='Enter staff email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                  type='submit'
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                  Submit
              </button>
          </form>
      </div>
  
}

export default StaffLogin