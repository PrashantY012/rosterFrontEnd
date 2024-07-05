import React, { useState } from "react";
import App from './App';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
export const Context = React.createContext();
function Middle() {

    const [staffLogged, setStaffLogged] = useState(false);
    const [managerLogged, setManagerLogged] = useState(false);
    const [value2, setValue2] = useState("");
    const [staffName, setStaffName] = useState("None");
    const [maangerName, setManagerName] = useState("None");
    return (
        <Context.Provider
            value={{ staffLogged, setStaffLogged, value2, setValue2, staffName, setStaffName,managerLogged,setManagerLogged,maangerName,setManagerName }}>
            {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/staffLogin" element={<StaffLogin/>} />
          <Route path="/managerLogin" element={<ManagerLogin/>} />
          <Route path="/staffDashboard/*" element={<StaffDashboard/>} />
          <Route path="/staffRoster" element={<StaffRoster/>} /> 
          <Route path="/staffHome" element={<staffHome/>}/> 
       </Routes> */}
        <App />
        </Context.Provider>
    );
}

export default Middle;