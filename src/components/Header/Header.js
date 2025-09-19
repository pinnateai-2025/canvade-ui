import "./Header.css";
import GirlImage from "../../assets/header-img.png";
import BgImg from "../../assets/header.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="info-container">
                <div className="info-heading">
                    <h1>
                        Find your Best Suited <br /> Course
                    </h1>
                    <p>
                        Easily discover the course that matches your interest and career goals. Canvade helps
                        you compare different programs, explore subjects, and choose the right path — whether
                        it’s academic, professional, or skill-based learning.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder='Write the name of "Course" or "Institute"'
                    />
                    <button>Search</button>
                </div>

                {/* Dropdown Filters */}
                <div className="info-dropdown">
                    <div className="dropdown-item">
                        <label htmlFor="price">Price</label>
                        <select id="price" name="price">
                            <option value="0-1000">0 - 1000</option>
                            <option value="1000-2000">1000 - 2000</option>
                            <option value="2000-3000">2000 - 3000</option>
                            <option value="3000-4000">3000 - 4000</option>
                        </select>
                    </div>
                    <div className="dropdown-item">
                        <label htmlFor="learning">Learning Mode</label>
                        <select id="learning" name="learning">
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                    <div className="dropdown-item">
                        <label htmlFor="duration">Duration</label>
                        <select id="duration" name="duration">
                            <option value="6months">6 Months</option>
                            <option value="1year">1 Year</option>
                            <option value="2year">2 Years</option>
                            <option value="3year">3 Years</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="image-container">
                <img src={BgImg} alt="bg-shape" className="bg-img" />
                <img src={GirlImage} alt="Course illustration" className="girl-img" />
            </div>

        </div>
    );
};

export default Header;
