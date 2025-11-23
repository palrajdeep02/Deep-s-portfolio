import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-neon-500 mx-auto rounded-full shadow-neon"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto glass rounded-xl shadow-lg border border-white/10 overflow-hidden">
                    <div className="p-8 md:p-10">
                        <form action="https://formspree.io/f/xpwnkrjg" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-white/10 bg-dark-900/50 text-white focus:border-neon-500 focus:ring-1 focus:ring-neon-500 outline-none transition-all placeholder-gray-600"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-white/10 bg-dark-900/50 text-white focus:border-neon-500 focus:ring-1 focus:ring-neon-500 outline-none transition-all placeholder-gray-600"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-md border border-white/10 bg-dark-900/50 text-white focus:border-neon-500 focus:ring-1 focus:ring-neon-500 outline-none transition-all placeholder-gray-600"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-neon-500 text-dark-900 rounded-md font-bold hover:bg-neon-400 transition-all shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-neon transform hover:-translate-y-0.5"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
