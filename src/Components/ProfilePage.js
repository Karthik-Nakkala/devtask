import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import profileImage from 'url:../assets/profile_pic.jpg';

const ProfilePage = () => {
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] flex items-start sm:items-center justify-center p-4 sm:p-8 font-sans dark:font-robot transition-colors duration-500 relative">

            {/* Theme Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-[#1a2130] shadow-md dark:shadow-none border border-gray-200 dark:border-cyan-500/30 text-gray-800 dark:text-cyan-400 transition-all duration-300"
            >
                {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
            </motion.button>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-full max-w-100 flex flex-col min-h-screen sm:min-h-175 sm:h-auto overflow-hidden transition-all duration-500 z-10
                    ${isDark
                        ? 'bg-[#0f172a] border border-cyan-500/50 rounded-none relative before:absolute before:inset-0 before:border before:border-cyan-400/20 before:m-2 mt-0'
                        : 'bg-[#f7f8fa] sm:border sm:border-gray-200 sm:shadow-xl sm:rounded-xl sm:mt-10 mt-0'
                    }`}
            >
                {/* Header Profile Title section matching reference image */}
                <div className={`w-full px-6 py-5 border-b transition-colors duration-500 ${isDark ? 'border-cyan-500/30 bg-[#1a2130]' : 'border-gray-200 bg-white'}`}>
                    <h3 className={`text-[17px] font-semibold transition-colors duration-500 ${isDark ? 'text-cyan-400 tracking-wider uppercase' : 'text-[#4a4a4a]'}`}>
                        Account Settings
                    </h3>
                </div>

                <div className="w-full flex-1 flex flex-col p-6 relative z-20">

                    {/* User Profile Avatar block */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="Marry Doe"
                                className={`w-20 h-20 rounded-full object-cover transition-all ${isDark ? 'border-2 border-cyan-400 grayscale filter hover:grayscale-0' : ''}`}
                            />
                            {/* Camera Icon Overlay */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`absolute bottom-0 -right-1 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-colors border-2
                                    ${isDark ? 'bg-[#0f172a] border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' : 'bg-[#6C25FF] text-white border-white'}
                                `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <strong className={`text-[16px] font-semibold leading-tight transition-colors duration-500 mb-0.5 ${isDark ? 'text-cyan-400 tracking-wide uppercase' : 'text-[#1d2226]'}`}>
                                Marry Doe
                            </strong>
                            <p className={`text-[14px] leading-tight transition-colors duration-500 ${isDark ? 'text-cyan-100/60' : 'text-[#6c757d]'}`}>
                                Marry@Gmail.Com
                            </p>
                        </div>
                    </motion.div>

                    {/* Bio Text block */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-[15px] leading-[1.6] mb-8 transition-colors duration-500 ${isDark ? 'text-cyan-100/70 font-light' : 'text-[#6c757d]'}`}
                    >
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                        Dolore Magna Aliquyam Erat, Sed Diam
                    </motion.p>

                    {/* Dashed Separator exactly like the image references */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`w-[calc(100%+3rem)] -ml-6 -mr-6 border-b transition-colors duration-500
                            ${isDark ? 'border-cyan-500/20 border-dashed' : 'border-[#d6d6d6] border-dashed'}
                        `}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ProfilePage;
