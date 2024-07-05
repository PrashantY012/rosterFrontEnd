import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Context } from '../../Middle';
import { Navigate } from 'react-router-dom';

function ManagerSignin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { managerLogged, setManagerLogged } = useContext(Context);

    const submitFunc = async (e) => {
        e.preventDefault();
        try {
            const responseData = await axios.post(
                `http://localhost:3000/manager/login`,
                {
                    "email": email,
                    "password": password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast.success(responseData.data.message);
            setManagerLogged(true);
        } catch (e) {
            toast.error(e.response.data.message);
        }
    };

    if (managerLogged) {
        return <Navigate to="/managerDashboard" />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Manager Sign In</h1>
                <form onSubmit={submitFunc} className="space-y-4 text-gray-950">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-gray-800">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="abc@xyz"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2 text-gray-800">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="secret key"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ManagerSignin;
