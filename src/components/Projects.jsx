import React from 'react';

const projects = [
    {
        title: "LW-RESSASE-NET",
        description: "A Lightweight Attention-Based Residual Network for COVID-19 and Pneumonia Prediction using Chest X-ray. Published in IEEE.",
        tags: ["Python", "AI/ML", "Kaggle", "Deep Learning"],
        link: "https://ieeexplore.ieee.org/abstract/document/10829470/"
    },
    {
        title: "AI Embeddings Project",
        description: "Exploring vector embeddings for semantic search and recommendation systems.",
        tags: ["Python", "Vector DB", "NLP"],
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website built with React, Tailwind CSS and Glassmorphism design.",
        tags: ["React", "Tailwind", "Vite"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
                    <div className="w-20 h-1 bg-neon-500 mx-auto rounded-full shadow-neon"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Showcasing my research and development projects in AI and Web Technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass rounded-xl overflow-hidden hover:border-neon-500 transition-all group hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]">
                            <div className="h-48 bg-dark-800 w-full flex items-center justify-center text-gray-600 group-hover:text-neon-500 transition-colors border-b border-white/5">
                                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-500 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 bg-neon-500/10 text-neon-500 text-xs font-medium rounded border border-neon-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-neon-500 inline-flex items-center transition-colors">
                                    View Project
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
