import "./Feature.css";

const Feature = () => {
    return (
        <div className="feature-container">
            <div className="features features1">
                <h3>Discover Courses Worldwide</h3>
                <p>
                    Students can easily search thousands of courses across multiple fields from institutions
                    worldwide. Whether you want to upskill in technology, improve soft skills, or pursue higher
                    education, finding the right course has never been easier.
                </p>
                <div className="overlay"></div>
            </div>
            <div className="features features2">
                <h3>Find Institutes Online & Offline</h3>
                <p>
                    Explore verified learning institutes both locally and internationally. From nearby training
                    centers to globally recognized universities, students get the flexibility to choose between
                    online learning or in-person experiences, depending on their needs.
                </p>
                <div className="overlay"></div>
            </div>
            <div className="features features3">
                <h3>Build Meaningful Connections</h3>
                <p>
                    Our platform is not just about courses—it’s about community. Students can connect with peers,
                    engage with teachers, and collaborate with institutions around the world, creating a global
                    network of opportunities and knowledge sharing.
                </p>
                <div className="overlay"></div>
            </div>
        </div>
    )
}

export default Feature;
