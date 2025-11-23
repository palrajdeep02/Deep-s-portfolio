import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-white">
                            Rajdeep<span className="text-neon-500">.</span>
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-neon-500 font-medium transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-neon-500 font-medium transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-neon-500 font-medium transition-colors">Work</a>
                        <a href="#contact" className="text-gray-300 hover:text-neon-500 font-medium transition-colors">Contact</a>
                        <a href="#contact" className="px-4 py-2 border border-neon-500 text-neon-500 rounded-md font-medium hover:bg-neon-500 hover:text-dark-900 transition-all shadow-[0_0_10px_rgba(57,255,20,0.2)] hover:shadow-neon">
                            Hire Me
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-neon-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-neon-500 font-medium">Home</a>
                        <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-neon-500 font-medium">About</a>
                        <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-neon-500 font-medium">Work</a>
                        <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-neon-500 font-medium">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
