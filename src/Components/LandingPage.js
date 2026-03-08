import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const LandingPage = () => {
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    // Sync dark mode to document root for global Tailwind styling
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] flex items-center justify-center p-4 sm:p-8 font-sans dark:font-robot transition-colors duration-500 relative">

            {/* Theme Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-[#1a2130] shadow-lg dark:shadow-none border border-gray-200 dark:border-cyan-500/30 text-gray-800 dark:text-cyan-400 transition-all duration-300 flex items-center justify-center"
            >
                {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
            </motion.button>

            {/* Dark Mode Background Grid Effect */}
            <AnimatePresence>
                {isDark && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                            backgroundPosition: 'center center'
                        }}
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-full max-w-100 h-200 max-h-[90vh] sm:h-187.5 relative flex flex-col justify-end p-8 border overflow-hidden transition-all duration-500
                    ${isDark
                        ? 'bg-[#0f172a] border-cyan-500/50 rounded-none before:absolute before:inset-0 before:border before:border-cyan-400/20 before:m-2'
                        : 'bg-[#f7f8fa] border-gray-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-lg'
                    }`}
            >
                {/* Decorative subtle top gradient */}
                <div className={`absolute top-0 left-0 w-full h-1/2 pointer-events-none transition-colors duration-500 ${isDark ? 'bg-linear-to-b from-cyan-900/20 to-transparent' : 'bg-linear-to-b from-purple-50/50 to-transparent'}`} />

                <div className="z-10 w-full mb-2">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-[32px] font-bold leading-tight mb-3 transition-colors duration-500 ${isDark ? 'text-cyan-400 uppercase tracking-wider' : 'text-[#1d2226]'}`}
                    >
                        Welcome to PopX
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`text-[17px] leading-[1.6] mb-8 max-w-70 transition-colors duration-500 ${isDark ? 'text-cyan-100/70 font-light' : 'text-[#6c757d]'}`}
                    >
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {/* Primary Button */}
                        <motion.button
                            onClick={() => navigate('/signup')}
                            whileHover={isDark ? { scale: 1.03 } : { scale: 1.02, backgroundColor: '#5c1fe0' }}
                            whileTap={{ scale: 0.96 }}
                            className={`w-full font-semibold py-3.5 px-4 text-base mb-4 shadow-sm transition-all duration-300 relative overflow-hidden group
                                ${isDark
                                    ? 'bg-transparent text-cyan-400 border border-cyan-400 uppercase tracking-widest rounded-none hover:bg-cyan-400 hover:text-black'
                                    : 'bg-[#6C25FF] text-white rounded-md'
                                }`}
                        >
                            {isDark && <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />}
                            Create Account
                        </motion.button>

                        {/* Secondary Button */}
                        <motion.button
                            onClick={() => navigate('/login')}
                            whileHover={isDark ? { scale: 1.03, backgroundColor: 'rgba(34,211,238,0.1)' } : { scale: 1.02, backgroundColor: '#c2aefc' }}
                            whileTap={{ scale: 0.96 }}
                            className={`w-full font-semibold py-3.5 px-4 text-base transition-all duration-300
                                ${isDark
                                    ? 'bg-transparent text-gray-400 border border-gray-700 uppercase tracking-widest rounded-none hover:border-cyan-400/50 hover:text-cyan-300'
                                    : 'bg-[#cebeff] text-gray-900 rounded-md'
                                }`}
                        >
                            Already Registered? Login
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingPage;