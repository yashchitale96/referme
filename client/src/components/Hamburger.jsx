import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hamburger = ({ menuItems, isLoggedIn, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Focus trap
    useEffect(() => {
        if (isOpen) {
            const focusableEls = menuRef.current.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            const firstEl = focusableEls[0];
            const lastEl = focusableEls[focusableEls.length - 1];
            const trap = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstEl) {
                            e.preventDefault();
                            lastEl.focus();
                        }
                    } else {
                        if (document.activeElement === lastEl) {
                            e.preventDefault();
                            firstEl.focus();
                        }
                    }
                } else if (e.key === 'Escape') {
                    setIsOpen(false);
                    buttonRef.current.focus();
                }
            };
            document.addEventListener('keydown', trap);
            firstEl && firstEl.focus();
            return () => document.removeEventListener('keydown', trap);
        }
    }, [isOpen]);

    // Prevent background scroll when open
    useEffect(() => {
        if (isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleLinkClick = () => setIsOpen(false);
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                ref={buttonRef}
                className={`text-white text-4xl bg-transparent px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 active:scale-90 ${isOpen ? 'text-purple-400' : ''}`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
            >
                <span className="block relative w-8 h-8">
                    <span
                        className={`absolute left-0 top-2 w-8 h-1 bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 top-4 bg-purple-400' : ''}`}
                    ></span>
                    <span
                        className={`absolute left-0 top-4 w-8 h-1 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                    ></span>
                    <span
                        className={`absolute left-0 top-6 w-8 h-1 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 top-4 bg-purple-400' : ''}`}
                    ></span>
                </span>
            </button>

            {/* Overlay and Side Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-pink-900/80 bg-opacity-80 backdrop-blur-lg flex"
                    onClick={handleOverlayClick}
                    aria-modal="true"
                    role="dialog"
                >
                    <nav
                        ref={menuRef}
                        id="mobile-menu"
                        className="bg-white/10 dark:bg-gray-900/90 w-72 h-full p-8 flex flex-col gap-8 shadow-2xl transform transition-transform duration-300 translate-x-0 focus:outline-none rounded-r-3xl border-l-4 border-purple-400/20"
                        tabIndex={-1}
                        aria-label="Mobile navigation"
                    >
                        <button
                            className="self-end text-3xl text-gray-300 hover:text-white focus:outline-none mb-6"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                        <ul className="flex flex-col gap-6">
                            {menuItems.filter(item => !(item.label === 'Login' && isLoggedIn)).map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.to}
                                        className="block text-xl font-semibold text-white px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white focus:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 relative group"
                                        onClick={handleLinkClick}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <span className="absolute left-4 right-4 bottom-2 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                            {isLoggedIn && (
                                <>
                                    <li>
                                        <Link
                                            to="/Upload"
                                            className="block text-xl font-semibold text-white px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white focus:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 relative group"
                                            onClick={handleLinkClick}
                                        >
                                            <span className="relative z-10">Upload</span>
                                            <span className="absolute left-4 right-4 bottom-2 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin"
                                            className="block text-xl font-semibold text-white px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white focus:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 relative group"
                                            onClick={handleLinkClick}
                                        >
                                            <span className="relative z-10">Admin</span>
                                            <span className="absolute left-4 right-4 bottom-2 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => { onLogout && onLogout(); setIsOpen(false); }}
                                            className="block w-full text-left text-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 px-4 py-3 rounded-xl transition-all duration-200 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-lg"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Hamburger;