import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { server } from '../../../Middle';

function StaffComponent({name,email}) {
    let staffEmail=email;
    async function clickFunc()
    {
       try{
        const res=await axios.post(`${server}/manager/deleteStaff`,{
            staffEmail
        },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        toast.success(res.data.message)
       }
       catch(e)
       {
        toast.error(e.response.data.message)
       }
    }
    return (
        <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-lg shadow-md w-full mb-2">
          <div className="flex items-center justify-center">
            <p className="text-xl ">{name}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl">{email}</p>
          </div>
          <div className="flex items-center justify-center">
          <button className="w-half bg-red-500 hover:bg-red-700 text-white 
          font-bold py-2 px-4 rounded mx-2" onClick={clickFunc}>
                Delete
              </button>
          </div>
        </div>
    )
}

export default StaffComponent