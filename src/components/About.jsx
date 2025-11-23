import React from 'react';

const skills = [
    "JavaScript", "Python", "AI", "Machine Learning", "Java",
    "React", "Tailwind CSS", "Git"
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-neon-500 mx-auto rounded-full shadow-neon"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am an AI enthusiast and Web Developer with a passion for creating intelligent systems.
                            My work focuses on integrating AI embeddings with modern web technologies to build predictive and responsive applications.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I'm always exploring new technologies in the AI/ML space and looking for opportunities to apply my skills in challenging projects.
                        </p>
                        <a href="#contact" className="inline-block px-6 py-3 border border-neon-500 text-neon-500 rounded-md font-medium hover:bg-neon-500 hover:text-dark-900 transition-all">
                            Contact Me
                        </a>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 glass text-neon-400 border border-white/10 rounded-md font-medium text-sm hover:border-neon-500 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
