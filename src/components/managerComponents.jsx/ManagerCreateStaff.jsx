import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Context, server } from '../../Middle';
import { Navigate } from 'react-router-dom';

function ManagerCreateStaff() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {managerLogged,setManagerLogged}=useContext(Context)
   

   const submitFunc=async(e)=>{
    e.preventDefault();
    try{
    const responseData = await axios.post(
      `${server}/manager/createStaff`,
      {
        "email":email,
        "password":password,
        "name":name
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    ); 
    toast.success(responseData.data.message)
    setEmail("");setName("");setPassword("")
    // console.log("success",responseData);
  }
    catch(e){
      toast.error(e.response.data.message)  
      // console.log("error:",e)
    }
    }
     return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-semibold mb-6 text-center">Create New Staff</h1>
            <form className="space-y-4" onSubmit={submitFunc}>
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter staff name" 
                  value={name}
                  onChange={(e)=>(setName(e.target.value))}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="abc@xyz" 
                  value={email}
                  onChange={(e)=>(setEmail(e.target.value))}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-2 text-gray-700">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="secret key"
                  value={password}
                  onChange={(e)=>(setPassword(e.target.value))} 
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      );
}
export default ManagerCreateStaff