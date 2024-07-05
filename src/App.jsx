import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import StaffLogin from './components/StaffLogin'
import ManagerLogin from './components/ManagerLogin'
import toast, { Toaster } from 'react-hot-toast';
import { Context, server } from './Middle'
import StaffRoster from './components/staffComponents.jsx/StaffRoster'
import axios from 'axios'
import StaffNav from './components/staffComponents.jsx/StaffNav'
import StaffHome from './components/staffComponents.jsx/StaffHome'
import StaffAttendance from './components/staffComponents.jsx/StaffAttendance'
import StaffDashboard from './components/staffComponents.jsx/StaffDashboard'
import ManagerSignin from './components/managerComponents.jsx/ManagerSignin'
import ManagerSignup from './components/managerComponents.jsx/ManagerSignup'
import ManagerDashboard from './components/managerComponents.jsx/ManagerDashboard'
import ManagerCreateStaff from './components/managerComponents.jsx/ManagerCreateStaff'
import ManagerHome from './components/managerComponents.jsx/ManagerHome'
import ManagerSeeAttendance from './components/managerComponents.jsx/ManagerSeeAttendance'
import ManagerAddRoster from './components/managerComponents.jsx/ManagerAddRoster'
import ManagerRoster from './components/managerComponents.jsx/ManagerRoster'
import ManagerDeleteStaff from './components/managerComponents.jsx/ManagerDeleteStaff'

function App() {
  const { staffLogged, setStaffLogged } = useContext(Context)
  const { staffName, setStaffName } = useContext(Context)
  const { managerLogged, setManagerLogged } = useContext(Context)
  const { managerName, setManagerName } = useContext(Context)
  
  

  useEffect(() => {
    axios.get(
      `${server}/staff/staffSelf`,
      { withCredentials: true, }
    ).then((e) => {
      setStaffLogged(() => true)
      // console.log("responseData",e);
      setStaffName(() => e.data.message)
    }).catch((e) => {
      // console.log("errorStaffLogin:",e);
      setStaffLogged(() => false)
    })
  }
    , [])
    useEffect(() => {
      axios.get(
        `${server}manager/managerSelf`,
        { withCredentials: true, }
      ).then((e) => {
        setManagerLogged(() => true)
        // console.log("responseData",e);
        setManagerName(() => e.data.message)
      }).catch((e) => {
        // console.log("errorStaffLogin:",e);
        setManagerLogged(() => false)
      })
    }
    , [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/staffLogin",
      element:<StaffLogin/>,
    },
    {
      path: "/managerLogin",
      element:<ManagerLogin/>,
    },
    {
      path: "/managerSignin",
      element:<ManagerSignin/>,
    },
    {
      path: "/managerSignup",
      element:<ManagerSignup/>,
    },
    {
      path: "/staffDashboard",
      element:<StaffDashboard/>,
      children:[
        {
          path: "staffRoster",
          element:<StaffRoster/>,
        },
        {
          path: "",
          element:<StaffHome></StaffHome>,
        },
        {
          path: "staffAttendance",
          element:<StaffAttendance></StaffAttendance>,
        }
       
      ]
    },
    {
      path: "/staffHome",
      element:<staffHome/>,
    },
    {
      path: "/managerDashboard",
      element:<ManagerDashboard/>,
      children:[
        {
          path:"createStaff",
          element:<ManagerCreateStaff></ManagerCreateStaff>
        },
        {
          path:"",
          element:<ManagerHome></ManagerHome>
        },
        {
          path:"seeStaffAttendance",
          element:<ManagerSeeAttendance></ManagerSeeAttendance>
        },
        {
          path:"addRoster",
          element:<ManagerAddRoster></ManagerAddRoster>
        },
        {
          path:"viewRoster",
          element:<ManagerRoster></ManagerRoster>
        },
        {
          path:"deleteStaff",
          element:<ManagerDeleteStaff></ManagerDeleteStaff>
        }
      ]
    },
  ]);

  return (
       <RouterProvider router={router} />
  )
}

export default App;
