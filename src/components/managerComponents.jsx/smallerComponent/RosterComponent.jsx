import axios from 'axios'
import React from 'react'
import { server } from '../../../Middle'

export default function RosterComponent({staffEmail,date,day,shift,_id}) {
    const clickFunc=async()=>{
        try{
        await axios.post(`${server}/manager/deleteRosterEntry`,{
            _id
        },
        {
            headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
        }
    )
}
catch(e){
    console.log("e:",e)
}
    }
    return (
        <div className="grid grid-cols-5 gap-2 p-1 bg-white rounded-lg shadow-md w-full mb-2">
          <div className="flex items-center justify-center">
            <p className="text-xl ">{staffEmail}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl">{date}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl">{day}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl">{shift}</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-xl  bg-red-600 text-white  p-2 rounded-md" onClick={clickFunc}>Delete</button>
          </div>
          
        </div>
      );
}
