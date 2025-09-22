import Button from "../Button/Button";
import CardDesign from "../CardDesign/CardDesign";
import "./NearbyInstitutes.css";
import CardImg from "../../assets/card-img1.png";
import CardImg2 from "../../assets/card-img2.jpg";
import CardImg3 from "../../assets/card-img3.jpg";
import CardImg4 from "../../assets/card-img4.jpg";

const NearbyInstitutes = () => {
    return (
        <div className="institutes-container">

            <Button text="180+ Institutes in Your Area" />

            <div className="institutes-heading">
                <h3>Your <span>Nearby</span> Institutes</h3>
            </div>

            <div className="institutes-cards">
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    heading="ICAI - The Institute of Chartered Accountants of India"
                    info={[
                        { label: "Learning Mode", value: "Online & Offline" },
                        { label: "Courses", value: "Academic & Skill Based Courses" },
                        { label: "Location", value: "New Delhi, India (5 more)" },
                        { label: "Recognition", value: "Statutory Body" },
                    ]}
                    footerType="button"
                    footerText="See Course"
                />
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    heading="AMNEC Learning Studios"
                    info={[
                        { label: "Learning Mode", value: "Online & Offline" },
                        { label: "Courses", value: "Skill Based Courses" },
                        { label: "Location", value: "New Delhi, India" },
                        { label: "Recognition", value: "Privately Owned" },
                    ]}
                    footerType="button"
                    footerText="See Course"
                />
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    heading="SRM Institute of Science and Technology"
                    info={[
                        { label: "Learning Mode", value: "Online & Offline" },
                        { label: "Courses", value: "Academic & Skill Based Courses" },
                        { label: "Location", value: "Chennai" },
                        { label: "Recognition", value: "AICTE Approved" },
                    ]}
                    footerType="button"
                    footerText="See Course"
                />
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    heading="ICAI - The Institute of Chartered Accountants of India"
                    info={[
                        { label: "Learning Mode", value: "Online" },
                        { label: "Courses", value: "Academic & Skill Based Courses" },
                        { label: "Location", value: "All India" },
                        { label: "Recognition", value: "UGC Approved" },
                    ]}
                    footerType="button"
                    footerText="See Course"
                />
            </div>

        </div>
    )
}

export default NearbyInstitutes;
