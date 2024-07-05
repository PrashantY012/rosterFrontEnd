import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context } from '../Middle';

function Home() {
    const { staffLogged, managerLogged } = useContext(Context);

    if (staffLogged) return <Navigate to="/staffDashboard" />;
    else if (managerLogged) return <Navigate to="/managerDashboard" />;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
            <div className="text-4xl font-bold mb-8">Welcome Team</div>
            <div className="flex space-x-4">
                <Link
                    to="/staffLogin"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Staff
                </Link>
                <Link
                    to="/managerLogin"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Manager
                </Link>
            </div>
        </div>
    );
}

export default Home;
