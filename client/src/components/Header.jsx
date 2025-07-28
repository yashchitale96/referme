import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

const Navigation = styled.nav`
  display: flex;

  @media (max-width: 1117px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 1117px) {
    display: flex;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleLogout = async () => {
    try {
      await axios.post("https://referme-a5hucfc6a8bccdhq.centralindia-01.azurewebsites.net/auth/logout", {}, { withCredentials: true });
    } catch {}
    logout();
    toast.success('Logout Successfully');
    navigate("/login");
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/Search", label: "Explore Now" },
  ];

  return (
    <header
      className={`w-full z-50 px-6 sm:px-20 py-3 sticky top-0 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-gradient-to-r from-purple-900/20 via-blue-900/15 to-pink-900/20 backdrop-blur-xl shadow-2xl border-b border-white/20" 
          : "bg-gradient-to-r from-purple-900/5 via-blue-900/5 to-pink-900/5 backdrop-blur-sm"
      }`}
      role="banner"
    >
      {/* Enhanced animated background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}></div>
        <div className="absolute top-2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '1.5s'}}></div>
        <div className="absolute top-4 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
      </div>

      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-4 focus:ring-purple-400/50 rounded-xl p-2 transition-all duration-300 hover:scale-105"
          aria-label="ReferMe Home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
            <img
              src="logo-2.png"
              className="relative w-auto h-10 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl"
              alt="ReferMe Logo"
            />
          </div>
        </Link>

        <HamburgerMenu>
          <Hamburger menuItems={menuItems} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        </HamburgerMenu>

        <Navigation role="navigation" aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {menuItems.map((item, index) => {
              const isHash = item.to.includes("#");
              const isActive = isHash
                ? location.hash === item.to.split("#")[1] ||
                  location.hash === item.to
                : location.pathname === item.to;
              if (item.label === "Login" && isLoggedIn) {
                // Hide Login if logged in
                return null;
              }
              return (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`relative text-white font-bold px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50 group ${
                      isActive 
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50" 
                        : "hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`}></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                  </Link>
                </li>
              );
            })}
            {isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/Upload"
                    className={`relative text-white font-bold px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50 group ${
                      location.pathname === "/Upload" 
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg shadow-green-500/50" 
                        : "hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20"
                    }`}
                  >
                    <span className="relative z-10">Upload</span>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${location.pathname === "/Upload" ? 'opacity-100' : ''}`}></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className={`relative text-white font-bold px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400/50 group ${
                      location.pathname === "/admin" 
                        ? "bg-gradient-to-r from-orange-600 to-red-600 shadow-lg shadow-orange-500/50" 
                        : "hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20"
                    }`}
                  >
                    <span className="relative z-10">Admin</span>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${location.pathname === "/admin" ? 'opacity-100' : ''}`}></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="relative text-white font-bold px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400/50 group bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg shadow-red-500/50 hover:shadow-red-600/50"
                  >
                    <span className="relative z-10">Logout</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </li>
              </>
            )}
          </ul>
        </Navigation>
      </div>
    </header>
  );
};

export default Header;
