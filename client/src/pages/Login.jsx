import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        "https://referme-a5hucfc6a8bccdhq.centralindia-01.azurewebsites.net/login",
        { email, password },
        { withCredentials: true }
      );
      if (result.data.success) {
        toast.success(result.data.message || "Login successful");
        login();
        navigate("/Upload");
      } else {
        toast.error(result.data.message || "Login failed");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl animate-spin-slow z-0"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-30 rounded-full blur-3xl animate-spin-slow-reverse z-0"></div>
      <div className="w-full max-w-md px-4 z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/20 relative">
          <div className="flex flex-col items-center mb-8">
            <img src="/logo-2.png" alt="ReferMe Logo" className="w-30 h-16 mb-3 drop-shadow-lg" />
            <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow">Welcome Back</h2>
            <p className="text-gray-300">Sign in to your account</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-7">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 shadow-sm backdrop-blur-md"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 shadow-sm backdrop-blur-md"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl shadow-xl hover:scale-105 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 focus:ring-4 focus:ring-purple-200 focus:outline-none ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
