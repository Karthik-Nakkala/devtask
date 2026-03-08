import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const SignUpPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    // Form States
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = formData.fullName && formData.phone && formData.email && formData.password && isChecked;
        if (isFormValid) {
            navigate('/profile');
        }
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const inputVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.05 + 0.2, duration: 0.4 }
        })
    };

    const isFormValid = formData.fullName && formData.phone && formData.email && formData.password && isChecked;

    return (
        <div className="min-h-screen bg-transparent dark:bg-[#0a0f1a] flex items-start sm:items-center justify-center p-4 sm:p-8 font-sans dark:font-robot transition-colors duration-500 relative">

            {/* Theme Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-gray-100 dark:bg-[#1a2130] border border-gray-200 dark:border-cyan-500/30 text-gray-800 dark:text-cyan-400 transition-all duration-300"
            >
                {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
            </motion.button>

            {/* Dark Mode Background Effect */}
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
                className={`w-full max-w-[400px] flex flex-col p-4 sm:p-8 min-h-screen sm:min-h-[800px] sm:h-auto overflow-hidden transition-all duration-500 z-10
                    ${isDark
                        ? 'bg-[#0f172a] border border-cyan-500/50 rounded-none relative before:absolute before:inset-0 before:border-[1px] before:border-cyan-400/20 before:m-2 sm:mt-0 mt-0'
                        : 'bg-white sm:border sm:border-gray-200 sm:rounded-xl sm:mt-10 mt-0'
                    }`}
            >
                <div className="w-full mt-4 sm:mt-0 relative z-20 flex-1 flex flex-col">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-[28px] font-bold leading-[1.3] mb-8 transition-colors duration-500 ${isDark ? 'text-cyan-400 uppercase tracking-wider' : 'text-[#1d2226]'}`}
                    >
                        Create your<br />PopX account
                    </motion.h2>

                    <form className="w-full flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>

                        {/* Dynamic Input Generator */}
                        {[
                            { label: "Full Name", name: "fullName", type: "text", required: true },
                            { label: "Phone number", name: "phone", type: "text", required: true },
                            { label: "Email address", name: "email", type: "email", required: true },
                            { label: "Password", name: "password", type: "password", required: true },
                            { label: "Company name", name: "company", type: "text", required: false }
                        ].map((field, index) => (
                            <motion.div key={field.name} custom={index + 1} variants={inputVariants} initial="hidden" animate="visible" className="relative mb-6">
                                <label className={`absolute -top-2.5 left-3 px-1 text-sm font-semibold transition-colors duration-500 z-10 flex
                                    ${isDark ? 'bg-[#0f172a] text-cyan-400 tracking-widest text-xs' : 'bg-white text-[#6c25ff]'}`}>
                                    {field.label}{field.required && <span className={isDark ? "text-red-500 ml-0.5" : "text-red-500 ml-0.5"}>*</span>}
                                </label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    placeholder="Marry Doe"
                                    className={`w-full px-4 py-3 rounded-md outline-none transition-all duration-300 relative
                                        ${isDark
                                            ? 'bg-transparent border border-cyan-500/50 text-cyan-100 placeholder-cyan-800/50 focus:border-cyan-400 focus:shadow-none rounded-none'
                                            : 'bg-transparent border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-[#6c25ff]'
                                        }`}
                                />
                            </motion.div>
                        ))}

                        {/* Radio Buttons */}
                        <motion.div custom={6} variants={inputVariants} initial="hidden" animate="visible" className="mb-8">
                            <p className={`text-[15px] font-semibold mb-3 ${isDark ? 'text-cyan-400 tracking-wide text-sm uppercase' : 'text-[#6c757d]'}`}>
                                Are you an Agency?<span className={isDark ? "text-red-500 ml-0.5" : "text-red-500 ml-0.5"}>*</span>
                            </p>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input type="radio" name="agency" value="yes" checked={isChecked === "yes"} onChange={(e) => setIsChecked(e.target.value)} className="peer sr-only" />
                                        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${isDark ? 'border-cyan-500/50 peer-checked:border-cyan-400 peer-checked:shadow-[0_0_10px_rgba(34,211,238,0.5)] bg-transparent' : 'border-gray-300 peer-checked:border-[#6c25ff]'} flex items-center justify-center`}>
                                            <div className={`w-3 h-3 rounded-full transition-all duration-300 scale-0 peer-checked:scale-100 ${isDark ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]' : 'bg-[#6c25ff]'}`} />
                                        </div>
                                    </div>
                                    <span className={`ml-3 transition-colors duration-300 ${isDark ? 'text-cyan-100' : 'text-[#1d2226]'}`}>Yes</span>
                                </label>

                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input type="radio" name="agency" value="no" checked={isChecked === "no"} onChange={(e) => setIsChecked(e.target.value)} className="peer sr-only" />
                                        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${isDark ? 'border-cyan-500/50 peer-checked:border-cyan-400 peer-checked:shadow-[0_0_10px_rgba(34,211,238,0.5)] bg-transparent' : 'border-gray-300 peer-checked:border-[#6c25ff]'} flex items-center justify-center`}>
                                            <div className={`w-3 h-3 rounded-full transition-all duration-300 scale-0 peer-checked:scale-100 ${isDark ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]' : 'bg-[#6c25ff]'}`} />
                                        </div>
                                    </div>
                                    <span className={`ml-3 transition-colors duration-300 ${isDark ? 'text-cyan-100' : 'text-[#1d2226]'}`}>No</span>
                                </label>
                            </div>
                        </motion.div>

                        <motion.div custom={7} variants={inputVariants} initial="hidden" animate="visible" className="mt-auto pt-6 sm:mt-8 sm:pt-0 pb-4 sm:pb-0">
                            <motion.button
                                type="submit"
                                whileHover={isDark ? { scale: 1.02 } : (isFormValid ? { scale: 1.02, backgroundColor: '#5c1fe0' } : {})}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full font-semibold py-3.5 px-4 text-base transition-all duration-300 relative overflow-hidden group
                                    ${isDark
                                        ? 'bg-transparent text-cyan-400 border border-cyan-400 uppercase tracking-widest rounded-none hover:bg-cyan-400 hover:text-[#0f172a]'
                                        : (isFormValid ? 'bg-[#6C25FF] text-white rounded-md shadow-md' : 'bg-[#cebeff] text-white rounded-md cursor-not-allowed')
                                    }`}
                            >
                                {isDark && <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />}
                                Create Account
                            </motion.button>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default SignUpPage;
