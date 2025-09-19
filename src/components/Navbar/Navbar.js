import { useEffect, useState } from "react";
import "./Navbar.css";
import CompanyLogo from "../../assets/company-logo.png";
import BellIcon from "../../assets/bell-icon.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu or notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
      if (
        !event.target.closest(".notification-container") &&
        !event.target.closest(".bell-icon")
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Sample notifications
  const notifications = [
    {
      title: "Springfield University",
      text: "Admissions Open for B.Sc. Computer Science (2025–26 batch). Apply before 15 September 2025.",
      date: "16 July, 2025",
    },
    {
      title: "Global Business School",
      text: "MBA Entrance Test results announced. Check your score now.",
      date: "15 July, 2025",
    },
    {
      title: "Bright Minds Institute",
      text: "Ranked #3 in State for Engineering Education by EduRank 2025.",
      date: "13 July, 2025",
    },
  ];

  return (
    <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
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

      {/* Right section */}
      <div className="icon-sign">
        {/* Bell Icon (Desktop) */}
        <div
          className="bell-icon"
          onClick={(e) => {
            e.stopPropagation();
            setShowNotifications(!showNotifications);
          }}
        >
          <img src={BellIcon} alt="bell-icon" />
        </div>

        {/* Notification Dropdown */}
        {showNotifications && (
          <div className="notification-container">
            <h4>Notifications</h4>
            <div className="notification-list">
              {notifications.map((item, index) => (
                <div className="notification-item" key={index}>
                  <p>
                    <strong>{item.title}</strong> – {item.text}
                  </p>
                  <span>{item.date}</span>
                </div>
              ))}
            </div>
            <div className="see-more">See Older Notifications</div>
          </div>
        )}

        {/* Sign in button */}
        <div className="sign-btn">
          <button>Sign in</button>
        </div>
      </div>

      {/* Mobile Menu (hamburger) */}
      <div className="icon-hamburger">
        <div className="icons">
          {/* Bell Icon (Mobile) */}
          <div
            className="bell-icon"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotifications(!showNotifications);
            }}
          >
            <img src={BellIcon} alt="bell-icon" />
          </div>

          {/* Notification Dropdown (Mobile) */}
          {showNotifications && (
            <div className="notification-container mobile-notification">
              <h4>Notifications</h4>
              <div className="notification-list">
                {notifications.map((item, index) => (
                  <div className="notification-item" key={index}>
                    <p>
                      <strong>{item.title}</strong> – {item.text}
                    </p>
                    <span>{item.date}</span>
                  </div>
                ))}
              </div>
              <div className="see-more">See Older Notifications</div>
            </div>
          )}

          {/* Sign in button */}
          <div className="sign-btn">
            <button>Sign in</button>
          </div>
        </div>

        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu List */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>Community</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Dashboard</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Account</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
