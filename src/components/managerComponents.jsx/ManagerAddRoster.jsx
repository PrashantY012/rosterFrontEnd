import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import toast from 'react-hot-toast'
function ManagerAddRoster() {
    let [staffEmail,setStaffEmail]=useState("")
    let [date,SetDate]=useState("")
    let [shift,setShift]=useState("")
   
    async function  submitFunc(e){ 
        e.preventDefault()
        // baadmai()
        const newdate = new Date(date);
        const options = { weekday: 'long' };
        const day = new Intl.DateTimeFormat('en-US', options).format(newdate);
        try{
     const res=await  axios.post("http://localhost:3000/manager/addRoster",
        {
          staffEmail,date,shift,day
        },{
       headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      console.log(res.data.message)
      toast.success("success")
    }
      catch(e)
      { 
        toast.error(e.response.data.message)
        console.log("e",e)
      }
      }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form onSubmit={submitFunc} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="staffEmail">
                Staff Email
              </label>
              <input
                id="staffEmail"
                type="text"
                value={staffEmail}
                placeholder="Staff Email"
                onChange={(e) => setStaffEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                placeholder={"date"}
                onChange={(e) => {SetDate(e.target.value)}}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shift">
                shift
              </label>
              <input
                id="shift"
                type="text"
                value={shift}
                placeholder="shift"
                onChange={(e) => setShift(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
}

export default ManagerAddRoster