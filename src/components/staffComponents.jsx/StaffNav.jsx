import React, { useCallback, useContext, useState } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { Context, server } from '../../Middle'
import axios from 'axios'
function StaffNav() {
  const {setStaffLogged,staffLogged,setStaffName}=useContext(Context)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
  function clickFunc(e){
    e.preventDefault();
      axios.get(
        `${server}/staff/staffLogout`,
          {withCredentials: true,}
      ).then((e)=>{
        setStaffLogged(()=>false)
        // console.log("responseData",e);
        setStaffName(()=>"None")
        
      }).catch((e)=>{
        console.log("errorStaffLogin:",e);
        // setStaffLogged(()=>0)
      })
      // console.log("log btn clicked",staffLogged)
  }
  
  return (!staffLogged)? <Navigate to="/"></Navigate>:(
<nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-extrabold text-2xl">Navigate</div>
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/staffDashboard"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/staffDashboard/staffAttendance"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Take Attendance
                    </Link>
                    <Link
                        to="/staffDashboard/staffRoster"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        See Roster
                    </Link>
                    <Link
                        to="#"
                        className="text-white text-lg bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition duration-300"
                        onClick={clickFunc}
                    >
                        Logout
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <Link
                        to="/staffDashboard"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300 "
                    >
                        Home
                    </Link>
                    <Link
                        to="/staffDashboard/staffAttendance"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300 "
                    >
                        Take Attendance
                    </Link>
                    <Link
                        to="/staffDashboard/staffRoster"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        See Roster
                    </Link>
                   
                    <Link
                        to="#"
                        className="block text-white text-lg bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition duration-300"
                        onClick={clickFunc}
                    >
                        Logout
                    </Link>
                </div>
            )}
        </nav>
  )
}

export default StaffNav

/*



<nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-extrabold text-2xl">My App</div>
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/staffDashboard"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="//staffDashboard/staffAttendance"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Take Attendance
                    </Link>
                    <Link
                        to="/staffDashboard/staffRoster"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        See Roster
                    </Link>
                    <Link
                        to="#"
                        className="text-white text-lg bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition duration-300"
                        onClick={clickFunc}
                    >
                        Logout
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <Link
                        to="/staffDashboard"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="#"
                        className="block text-white text-lg bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition duration-300"
                        onClick={clickFunc}
                    >
                        Logout
                    </Link>
                </div>
            )}
        </nav>
*/