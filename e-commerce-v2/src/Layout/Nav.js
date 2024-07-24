import React, { useState } from 'react';
import logo from '../Assets/Images/Logo-1.png'; 
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="home">Home</Link>
                <Link to="store">Store</Link>
                <Link to="contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'toggle' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'toggle' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'toggle' : ''}`}></div>
            </div>
            <style>{`
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: #333;
                    color: white;
                    position: relative;
                }

                .logo img {
                    height: 200px;
                    width: auto;  
                }

                .nav-links {
                    display: flex;
                    gap: 20px;
                }

                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                }

                .hamburger {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                }

                .bar {
                    width: 25px;
                    height: 3px;
                    background-color: white;
                    margin: 5px;
                    transition: 0.3s;
                }

                /* Mobile and Tablet Styles */
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        width: 100%;
                        position: absolute;
                        top: 60px; /* Adjust based on navbar height */
                        right: 0;
                        background-color: #333;
                        text-align: center;
                        gap: 0;
                    }

                    .nav-links.active {
                        display: flex;
                    }

                    .hamburger {
                        display: flex;
                    }

                    .bar.toggle {
                        background-color: #f00; /* Optional: change color when menu is open */
                    }

                    .nav-links a {
                        padding: 15px;
                        border-bottom: 1px solid #444;
                    }

                    .nav-links a:last-child {
                        border-bottom: none;
                    }
                }

                /* Desktop Styles */
                @media (min-width: 769px) {
                    .nav-links {
                        display: flex;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Nav;
