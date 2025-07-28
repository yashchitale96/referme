import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validateEmail = (email) => {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contactus = () => {
  const form = useRef();
  const [fields, setFields] = useState({ from_name: "", from_email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const alertRef = useRef(null);
  const successRef = useRef(null);
  const [honeypot, setHoneypot] = useState("");

  const validate = () => {
    const errs = {};
    if (!fields.from_name.trim()) errs.from_name = "Name is required.";
    if (!fields.from_email.trim()) errs.from_email = "Email is required.";
    else if (!validateEmail(fields.from_email)) errs.from_email = "Invalid email format.";
    if (!fields.message.trim()) errs.message = "Message is required.";
    else if (fields.message.length < 10) errs.message = "Message should be at least 10 characters.";
    return errs;
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitError("");
    if (honeypot) {
      setSubmitError("Spam detected. Submission blocked.");
      setTimeout(() => {
        if (alertRef.current) alertRef.current.focus();
      }, 100);
      return;
    }
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => {
        if (alertRef.current) alertRef.current.focus();
      }, 100);
      return;
    }
    setLoading(true);
    emailjs
      .sendForm("service_53xegjv", "template_ckkuztf", form.current, {
        publicKey: "dw_4w5q7Uh-bafJom",
      })
      .then(
        () => {
          toast.success("Form submitted successfully!");
          setLoading(false);
          setTimeout(() => {
            if (successRef.current) successRef.current.focus();
          }, 100);
        },
        (error) => {
          const msg = error?.text || error?.message || "There was an error submitting the form.";
          setSubmitError(msg);
          toast.error(`Error: ${msg}`);
          setLoading(false);
          setTimeout(() => {
            if (alertRef.current) alertRef.current.focus();
          }, 100);
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
    setFields({ from_name: "", from_email: "", message: "" });
    setHoneypot("");
  };

  return (
    <section id="contactus" className="relative min-h-screen w-full flex items-center justify-center py-20">
      {/* Accessibility: aria-live region for toasts */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="toast-region"></div>
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-20 animate-spin-slow">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="contactGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#contactGradient1)" />
          </svg>
        </div>
        {/* <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] opacity-20 animate-spin-slow-reverse">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="contactGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#contactGradient2)" />
          </svg>
        </div> */}
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-10 py-8 md:py-12 gap-8 md:gap-12 mb-20">
        {/* Left: Contact Form */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up max-w-xl md:max-w-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3 leading-tight">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
              Touch
            </span>
          </h1>
          <p className="text-sm md:text-base text-white mb-4 max-w-md animate-fade-in-up delay-200">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-3 animate-fade-in-up delay-300"
            noValidate
          >
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />
            {submitError && (
              <div
                className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-left"
                role="alert"
                tabIndex={-1}
                ref={alertRef}
                aria-live="assertive"
              >
                {submitError}
              </div>
            )}
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20"
                placeholder="Enter your name"
                value={fields.from_name}
                onChange={handleChange}
                required
                aria-invalid={!!errors.from_name}
                aria-describedby={errors.from_name ? 'name-error' : undefined}
              />
              {errors.from_name && <p className="text-red-400 text-sm mt-1" id="name-error">{errors.from_name}</p>}
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20"
                placeholder="Enter your email"
                value={fields.from_email}
                onChange={handleChange}
                required
                aria-invalid={!!errors.from_email}
                aria-describedby={errors.from_email ? 'email-error' : undefined}
              />
              {errors.from_email && <p className="text-red-400 text-sm mt-1" id="email-error">{errors.from_email}</p>}
            </div>
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20 resize-none"
                placeholder="Enter your message"
                rows="3"
                value={fields.message}
                onChange={handleChange}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1" id="message-error">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-xl hover:scale-105 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 focus:ring-4 focus:ring-purple-200 focus:outline-none flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
            {/* Success message for screen readers (hidden visually) */}
            <div
              ref={successRef}
              tabIndex={-1}
              aria-live="polite"
              className="sr-only"
            >
              Form submitted successfully!
            </div>
          </form>
        </div>

        {/* Right: Contact Image */}
        <div className="flex-1 flex items-center justify-center animate-fade-in w-full md:w-auto mb-4 md:mb-0">
          <div className="relative flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="contactus.png"
              alt="Contact Us"
              className="relative w-full rounded-3xl shadow-2xl border-4 border-white/40 bg-white/30 backdrop-blur-md hover:scale-105 transition-all duration-300 object-cover transform hover:rotate-1"
              style={{ minHeight: "200px", maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
