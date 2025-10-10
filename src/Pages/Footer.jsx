import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from "../../src/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2"><img
                                src={logo}
                                alt="Hero Logo"
                                className="w-10 h-10 object-contain"
                              />
                        <h2 className="text-2xl font-bold">Hero.IO</h2>
                      
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8">
                    <p>&copy; {new Date().getFullYear()} Hero.IO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
