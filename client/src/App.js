import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Loader from "./components/Loader";
import AdminPanel from './pages/AdminPanel';
import AboutUs from './pages/AboutUs';
import Features from './pages/Features';
import CustomerSupport from './pages/CustomerSupport';
import DeliveryDetails from './pages/DeliveryDetails';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, authChecked } = useAuth();
  const [showedToast, setShowedToast] = useState(false);

  useEffect(() => {
    if (authChecked && !isLoggedIn && !showedToast) {
      toast.error("Unauthorized access. Please log in first.");
      setShowedToast(true);
    }
  }, [authChecked, isLoggedIn, showedToast]);

  if (!authChecked) return <Loader />;
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a data fetch with a timeout
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (isLoading) {
    return <Loader />; // Show Loader while data is loading
  }

  return (
    <AuthProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          toastClassName="custom-toast rounded-xl shadow-2xl font-semibold text-base"
          bodyClassName="flex items-center"
          progressClassName="custom-toast-progress"
        />
        <div className="App min-h-screen bg-linear-gradient backdrop-blur transition-all duration-2000 ">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Upload" element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            } />
            <Route path="/Search" element={<Search />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/delivery" element={<DeliveryDetails />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
