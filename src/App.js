import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ProfilePage from "./Components/ProfilePage";
import NavFooter from "./Components/NavFooter";

const App = () => {
    // We can observe the dark mode class on the document element 
    // to pass to our NavFooter without prop drilling through routes
    const [isDarkGlobal, setIsDarkGlobal] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDarkGlobal(document.documentElement.classList.contains('dark'));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-gray-200 dark:bg-black flex items-center justify-center transition-colors duration-500 font-sans dark:font-robot">
                {/* Mobile Constraint Wrapper */}
                <div className="w-full h-[100dvh] sm:h-[800px] sm:max-w-[400px] sm:rounded-[2.5rem] sm:shadow-2xl sm:border-[8px] sm:border-gray-900 dark:sm:border-gray-800 bg-white dark:bg-[#0a0f1a] relative overflow-hidden transition-all duration-500 flex flex-col">

                    {/* Inner Scrollable Route Area */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                        </Routes>
                    </div>

                    {/* Persistent Navigation Footer */}
                    <NavFooter isDark={isDarkGlobal} />
                </div>
            </div>
        </Router>
    );
}

export default App;

const root = createRoot(document.getElementById('root'));

root.render(<App />);