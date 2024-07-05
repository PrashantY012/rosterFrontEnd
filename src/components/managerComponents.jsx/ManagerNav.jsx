// import React, { useContext, useEffect } from 'react'
// import { Link, NavLink, Navigate } from 'react-router-dom'
// import { Context } from '../../Middle'
// import axios from 'axios'

// function ManagerNav() {
//     const {managerLogged,setManagerLogged}=useContext(Context)
    
//     function clickFunc(e){
//         e.preventDefault();
//         axios.get("http://localhost:3000/manager/managerLogout",{
//             withCredentials:true,
//         }).then(()=>{
//             setManagerLogged(()=>false)
//         })
//     }
//     return (!managerLogged)?<Navigate to="/"></Navigate>: (
//         <nav class="bg-blue-500 p-4">
//         <div class="container mx-auto flex justify-between items-center ">
//             <div class="text-white font-bold text-xl">My App</div>
//             <div class="space-x-4">
//                 <Link   to={"/managerDashboard"}  class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" >Home</Link>
//                 <Link   to={"/managerDashboard/seeStaffAttendance"} class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">See Staff Attendance</Link>
//                 <Link   to={"/managerDashboard/createStaff"}  class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" >Create new staff</Link>
//                 <Link   to={"/managerDashboard/deleteStaff"}  class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" >Edit Staff</Link>
//                 <Link   to={"/managerDashboard/addRoster"}  class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" >Add Roster</Link>
//                 <Link   to={"/managerDashboard/viewRoster"}  class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" >View Roster</Link>
//                 <Link   class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"  onClick={clickFunc}>Logout</Link>
//             </div>
//         </div>
//     </nav>
//   )
// }

// export default ManagerNav
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context, server } from '../../Middle';
import axios from 'axios';

function ManagerNav() {
    const { managerLogged, setManagerLogged } = useContext(Context);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function clickFunc(e) {
        e.preventDefault();
        axios.get(`${server}/manager/managerLogout`, {
            withCredentials: true,
        }).then(() => {
            setManagerLogged(false);
        });
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (!managerLogged) ? <Navigate to="/" /> : (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-extrabold text-2xl">My App</div>
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/managerDashboard"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/managerDashboard/seeStaffAttendance"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        See Staff Attendance
                    </Link>
                    <Link
                        to="/managerDashboard/createStaff"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Create New Staff
                    </Link>
                    <Link
                        to="/managerDashboard/deleteStaff"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Edit Staff
                    </Link>
                    <Link
                        to="/managerDashboard/addRoster"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        Add Roster
                    </Link>
                    <Link
                        to="/managerDashboard/viewRoster"
                        className="text-white text-lg hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition duration-300"
                    >
                        View Roster
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
                        to="/managerDashboard"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/managerDashboard/seeStaffAttendance"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        See Staff Attendance
                    </Link>
                    <Link
                        to="/managerDashboard/createStaff"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        Create New Staff
                    </Link>
                    <Link
                        to="/managerDashboard/deleteStaff"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        Edit Staff
                    </Link>
                    <Link
                        to="/managerDashboard/addRoster"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        Add Roster
                    </Link>
                    <Link
                        to="/managerDashboard/viewRoster"
                        className="block text-white text-lg bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
                    >
                        View Roster
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
    );
}

export default ManagerNav;
