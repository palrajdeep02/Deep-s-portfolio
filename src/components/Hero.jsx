import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-dark-100 dark:bg-dark-900 overflow-hidden relative transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-700/20 dark:bg-neon-500/20 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 z-10">
                        <h2 className="text-neon-700 dark:text-neon-500 font-medium mb-2 tracking-wide">HELLO, I'M</h2>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                            Rajdeep <span className="text-neon-700 dark:text-neon-500 animate-rgb-flow">Pal</span>
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                            AI Embeddings & <span className="text-gray-900 dark:text-white font-medium">Web Development</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Specializing in building intelligent web applications by bridging the gap between AI/ML and modern frontend technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="px-8 py-3 bg-neon-700 dark:bg-neon-500 text-white dark:text-dark-900 rounded-md font-bold hover:bg-neon-600 dark:hover:bg-neon-400 transition-all shadow-[0_0_15px_rgba(13,128,0,0.4)] dark:shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-neon text-center">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-3 glass text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-center">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-md md:aspect-square">
                            <div className="absolute inset-0 bg-neon-700 dark:bg-neon-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                            <div className="relative glass p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-center items-center backdrop-blur-xl">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 flex items-center justify-center border-4 border-neon-700 dark:border-neon-500 shadow-neon overflow-hidden shrink-0 animate-rgb-flow">
                                    <img src={profileImg} alt="Rajdeep Pal" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Rajdeep Pal</h3>
                                <p className="text-neon-700 dark:text-neon-500 mb-6 font-mono text-sm">soultaker0210@gmail.com</p>
                                <div className="flex space-x-4">
                                    {/* Social Icons Placeholder */}
                                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:text-neon-700 dark:hover:text-neon-500 hover:border-neon-700 dark:hover:border-neon-500 border border-transparent transition-all cursor-pointer">
                                        GH
                                    </div>
                                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:text-neon-700 dark:hover:text-neon-500 hover:border-neon-700 dark:hover:border-neon-500 border border-transparent transition-all cursor-pointer">
                                        LI
                                    </div>
                                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:text-neon-700 dark:hover:text-neon-500 hover:border-neon-700 dark:hover:border-neon-500 border border-transparent transition-all cursor-pointer">
                                        TW
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
