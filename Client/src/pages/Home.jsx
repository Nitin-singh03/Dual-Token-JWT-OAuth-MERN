import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaGoogle, FaGithub, FaEnvelope, FaKey, FaRoute, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Home = () => {

    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Dual-Token System',
            description: 'Advanced security with access tokens and refresh tokens stored in HTTPOnly cookies for maximum protection.'
        },
        {
            icon: <div className="flex space-x-2"><FaGoogle /><FaGithub /></div>,
            title: 'OAuth 2.0 Integration',
            description: 'Complete Google and GitHub OAuth integration with seamless social login experience.'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Verification & OTP',
            description: 'Secure OTP-based email verification system with automated account activation workflow.'
        },
        {
            icon: <FaKey />,
            title: 'Password Reset Flow',
            description: 'Complete password recovery system with OTP verification and secure password reset functionality.'
        },
        {
            icon: <FaReact />,
            title: 'Auto Token Refresh',
            description: 'Intelligent token refresh mechanism with automatic retry logic and seamless user experience.'
        },
        {
            icon: <FaRoute />,
            title: 'Protected Routes & Context',
            description: 'React Context-based authentication state management with protected route components.'
        },
    ];

    const techStack = [
        { icon: <SiMongodb size={40} />, name: 'MongoDB' },
        { icon: <SiExpress size={40} />, name: 'Express.js' },
        { icon: <FaReact size={40} />, name: 'React' },
        { icon: <FaNodeJs size={40} />, name: 'Node.js' },
    ];

    return (
        <div className="bg-secondary text-text-main">
            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-text-main">
                        Modern Authentication for the{' '}
                        <span className="text-primary">MERN</span> Stack
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-text-light max-w-3xl mx-auto">
                        A production-ready authentication system featuring dual-token security, OAuth integration, and comprehensive user management built for modern web applications.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/register" className="w-full sm:w-auto px-8 py-3 bg-primary bg-black text-white rounded-md text-lg font-semibold shadow-md hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:scale-105">
                            Get Started
                        </Link>
                        <a href="https://github.com/Nitin-singh03/MERN-OAuth-JWT.git" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-text-main text-white rounded-md text-lg font-semibold shadow-md hover:bg-slate-700 bg-black transition-all duration-300 hover:shadow-lg hover:scale-105">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Enterprise-Grade Authentication</h2>
                        <p className="mt-2 text-text-light">Secure, scalable, and feature-complete authentication system.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-primary text-3xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-text-light">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="bg-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Built with a Powerful &amp; Popular Stack</h2>
                    <p className="mt-2 text-text-light mb-8">Leveraging the best of the JavaScript ecosystem.</p>
                    <div className="flex justify-center items-center space-x-8 md:space-x-12 text-text-light">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center space-y-2">
                                {tech.icon}
                                <span className="text-sm font-semibold">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;