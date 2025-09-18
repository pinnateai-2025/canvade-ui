import { useEffect, useState } from "react";
import "./Navbar.css";
import CompanyLogo from "../../assets/company-logo.png";
import BellIcon from "../../assets/bell-icon.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Handle sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                !event.target.closest(".mobile-menu") &&
                !event.target.closest(".hamburger")
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="navbar-container">

            <div className="company-logo">
                <img src={CompanyLogo} alt="company-logo" />
            </div>

            {/* Desktop Navbar */}
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#account">Account</a></li>
                </ul>
            </nav>

            <div className="icon-sign">
                <img src={BellIcon} alt="bell-icon" />
                <div className="sign-btn">
                    <button>Sign in</button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="icon-hamburger">
                <div className="icons">
                    <img src={BellIcon} alt="bell-icon" />
                    <div className="sign-btn">
                        <button>Sign in</button>
                    </div>
                </div>
                <div className="hamburger" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>Community</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Dashboard</a></li>
                    <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Account</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
