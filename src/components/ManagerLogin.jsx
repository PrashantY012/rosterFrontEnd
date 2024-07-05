import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context } from '../Middle';

function ManagerLogin() {
    const { managerLogged } = useContext(Context);

    if (managerLogged) {
        return <Navigate to="/managerDashboard" />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Manager Login</h1>
                <div className="flex justify-around mt-4">
                    <Link
                        to="/managerSignup"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Signup
                    </Link>
                    <Link
                        to="/managerSignin"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Signin
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ManagerLogin;
