import React from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "framer-motion";

const NavFooter = ({ isDark }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Mapping our 4 key routes based on the user's requested numbering
    const routes = [
        { path: '/', label: '1' },
        { path: '/login', label: '2' },
        { path: '/signup', label: '3' },
        { path: '/profile', label: '4' }
    ];

    // Find the current index to calculate pagination state
    const currentIndex = routes.findIndex(r => r.path === location.pathname);

    // Handlers for Home, Prev, Next
    const handleHome = () => navigate('/');

    const handlePrev = () => {
        if (currentIndex > 0) {
            navigate(routes[currentIndex - 1].path);
        }
    };

    const handleNext = () => {
        if (currentIndex !== -1 && currentIndex < routes.length - 1) {
            navigate(routes[currentIndex + 1].path);
        }
    };

    // If we're on a route not in the main 4 (very unlikely), default to showing 1
    const displayIndex = currentIndex !== -1 ? currentIndex + 1 : 1;
    const isFirst = currentIndex === 0 || currentIndex === -1;
    const isLast = currentIndex === routes.length - 1;

    return (
        <div className={`w-full py-4 px-6 flex items-center justify-center gap-6 mt-auto border-t transition-colors duration-500 z-50 bg-white/50 backdrop-blur-md dark:bg-[#0a0f1a]/50
            ${isDark ? 'border-cyan-500/20' : 'border-gray-200'}
        `}>
            {/* Home Icon */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleHome}
                className={`p-2 transition-colors ${isDark ? 'text-cyan-500 hover:text-cyan-300' : 'text-gray-400 hover:text-gray-600'}`}
                title="Landing Page"
            >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
            </motion.button>

            {/* Previous Arrow */}
            <motion.button
                whileHover={!isFirst ? { scale: 1.1, x: -2 } : {}}
                whileTap={!isFirst ? { scale: 0.9 } : {}}
                onClick={handlePrev}
                disabled={isFirst}
                className={`p-2 transition-colors ${isFirst ? 'opacity-30 cursor-not-allowed' : ''} ${isDark ? 'text-cyan-500 hover:text-cyan-300' : 'text-gray-400 hover:text-gray-600'}`}
                title="Previous Page"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </motion.button>

            {/* Pagination Text: e.g. "1 of 4" */}
            <span className={`font-medium text-lg min-w-[3rem] text-center transition-colors ${isDark ? 'text-cyan-400' : 'text-gray-500'}`}>
                {displayIndex} of {routes.length}
            </span>

            {/* Next Arrow */}
            <motion.button
                whileHover={!isLast ? { scale: 1.1, x: 2 } : {}}
                whileTap={!isLast ? { scale: 0.9 } : {}}
                onClick={handleNext}
                disabled={isLast}
                className={`p-2 transition-colors ${isLast ? 'opacity-30 cursor-not-allowed' : ''} ${isDark ? 'text-cyan-500 hover:text-cyan-300' : 'text-gray-400 hover:text-gray-600'}`}
                title="Next Page"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </motion.button>
        </div>
    );
};

export default NavFooter;
