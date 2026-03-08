import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [isDark, setIsDark] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/profile');
        }
    };

    // Input animation variants
    const inputVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1 + 0.3, duration: 0.5 }
        })
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0f1a] flex items-start sm:items-center justify-center p-4 sm:p-8 font-sans dark:font-robot transition-colors duration-500 relative">

            {/* Theme Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-gray-100 dark:bg-[#1a2130] shadow-md dark:shadow-none border border-gray-200 dark:border-cyan-500/30 text-gray-800 dark:text-cyan-400 transition-all duration-300"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-full max-w-100 flex flex-col p-4 sm:p-8 min-h-screen sm:min-h-[700px] sm:h-auto overflow-hidden transition-all duration-500 z-10
                    ${isDark
                        ? 'bg-[#0f172a] border border-cyan-500/50 rounded-none relative before:absolute before:inset-0 before:border-[1px] before:border-cyan-400/20 before:m-2 sm:mt-0 mt-0'
                        : 'bg-white sm:border sm:border-gray-200 sm:shadow-xl sm:rounded-xl sm:mt-10 mt-0'
                    }`}
            >
                <div className="w-full mt-4 sm:mt-0 relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-[28px] font-bold leading-[1.3] mb-4 transition-colors duration-500 ${isDark ? 'text-cyan-400 uppercase tracking-wider' : 'text-[#1d2226]'}`}
                    >
                        Signin to your<br />PopX account
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-[16px] leading-[1.5] mb-8 max-w-[280px] transition-colors duration-500 ${isDark ? 'text-cyan-100/70 font-light' : 'text-[#6c757d]'}`}
                    >
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,
                    </motion.p>

                    <form className="w-full flex-1 flex flex-col" onSubmit={handleSubmit}>

                        {/* Email Input */}
                        <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible" className="relative mb-6">
                            <label className={`absolute -top-2.5 left-3 px-1 text-sm font-semibold transition-colors duration-500 z-10
                                ${isDark ? 'bg-black text-cyan-400 tracking-widest text-xs' : 'bg-white text-[#6c25ff]'}`}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                                className={`w-full px-4 py-3.5 rounded-md outline-none transition-all duration-300 relative
                                    ${isDark
                                        ? 'bg-transparent border border-cyan-500/50 text-cyan-100 placeholder-cyan-800/50 focus:border-cyan-400 focus:shadow-none rounded-none'
                                        : 'bg-transparent border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-[#6c25ff]'
                                    }`}
                            />
                        </motion.div>

                        {/* Password Input */}
                        <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible" className="relative mb-8">
                            <label className={`absolute -top-2.5 left-3 px-1 text-sm font-semibold transition-colors duration-500 z-10
                                ${isDark ? 'bg-black text-cyan-400 tracking-widest text-xs' : 'bg-white text-[#6c25ff]'}`}>
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className={`w-full px-4 py-3.5 rounded-md outline-none transition-all duration-300 relative
                                    ${isDark
                                        ? 'bg-transparent border border-cyan-500/50 text-cyan-100 placeholder-cyan-800/50 focus:border-cyan-400 focus:shadow-none rounded-none'
                                        : 'bg-transparent border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-[#6c25ff]'
                                    }`}
                            />
                        </motion.div>

                        {/* Login Button */}
                        <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible" className="mt-auto pt-6 sm:mt-8 sm:pt-0">
                            <motion.button
                                type="submit"
                                whileHover={isDark ? { scale: 1.02 } : (email && password ? { scale: 1.02, backgroundColor: '#5c1fe0' } : {})}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full font-semibold py-3.5 px-4 text-base transition-all duration-300 relative overflow-hidden group
                                    ${isDark
                                        ? 'bg-transparent text-cyan-400 border border-cyan-400 uppercase tracking-widest rounded-none hover:bg-cyan-400 hover:text-black'
                                        : (email && password ? 'bg-[#6C25FF] text-white rounded-md shadow-md' : 'bg-[#e0e0e0] text-gray-500 rounded-md cursor-not-allowed')
                                    }`}
                            >
                                {isDark && <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />}
                                Login
                            </motion.button>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;