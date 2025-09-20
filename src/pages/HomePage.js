import Courses from "../components/DemandCourses/Courses";
import Partner from "../components/FeaturedPartner/Partner";
import Feature from "../components/FeatureHeading/Feature";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sticker from "../components/Sticker/Sticker";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Partner />
      <Courses />
      <Sticker />
    </div>
  )
}

export default HomePage;
