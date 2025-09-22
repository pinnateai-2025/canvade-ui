import Courses from "../components/DemandCourses/Courses";
import Partner from "../components/FeaturedPartner/Partner";
import Feature from "../components/FeatureHeading/Feature";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import NearbyCourses from "../components/NearbyCourses/NearbyCourses";
import NearbyInstitutes from "../components/NearbyInstitutes/NearbyInstitutes";
import SearchedCourses from "../components/SearchedCourses/SearchedCourses";
import SearchedInstitutes from "../components/SearchedInstitutes/SearchedInstitutes";
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
      <NearbyInstitutes />
      <NearbyCourses />
      <SearchedInstitutes />
      <SearchedCourses />
    </div>
  )
}

export default HomePage;