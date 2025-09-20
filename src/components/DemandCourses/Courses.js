import "./Courses.css";
import MainImage from "../../assets/courses-image.png";
import CourseImg1 from "../../assets/courses-img1.png";
import CourseImg2 from "../../assets/courses-img2.png";
import CourseImg3 from "../../assets/courses-img3.png";
import CourseImg4 from "../../assets/courses-img4.png";
import CourseImg5 from "../../assets/courses-img5.png";
import CourseImg6 from "../../assets/courses-img6.png";
import CourseImg7 from "../../assets/courses-img7.png";
import CourseImg8 from "../../assets/courses-img8.png";

const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses-heading">
                <h3>Discover <span>In - Demand Courses</span></h3>
                <p>
                    Explore a curated selection of courses that are highly sought after by employers and learners
                    alike. From emerging technologies to creative disciplines, these programs are designed to
                    equip you with skills that are relevant, practical, and future-ready.
                </p>
            </div>
            <div className="courses-images">
                <div className="left-course-image">
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg1} alt="course-img1" />
                        </div>
                        <p>Artificial Intelligence</p>
                    </div>
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg2} alt="course-img2" />
                        </div>
                        <p>Cybersecurity</p>
                    </div>
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg3} alt="course-img3" />
                        </div>
                        <p>Sustainability & Green Tech</p>
                    </div>
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg4} alt="course-img4" />
                        </div>
                        <p>Cloud Computing</p>
                    </div>
                </div>
                <div className="main-course-image">
                    <img src={MainImage} alt="main-image" />
                </div>
                <div className="right-course-image">
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg5} alt="course-img5" />
                        </div>
                        <p>Digital Marketing</p>
                    </div>
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg6} alt="course-img6" />
                        </div>
                        <p>Financial Technology</p>
                    </div>
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg7} alt="course-img7" />
                        </div>
                        <p>Data Science</p>
                    </div>
                    <div className="course-content">
                        <div className="course-image">
                            <img src={CourseImg8} alt="course-img8" />
                        </div>
                        <p>Robotics & Automation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
