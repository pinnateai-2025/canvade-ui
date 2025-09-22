import Button from "../Button/Button";
import CardDesign from "../CardDesign/CardDesign";
import "./SearchedCourses.css";
import CardImg from "../../assets/card-img1.png";
import CardImg2 from "../../assets/card-img2.jpg";
import CardImg3 from "../../assets/card-img3.jpg";
import CardImg4 from "../../assets/card-img4.jpg";

const SearchedCourses = () => {
    return (
        <div className="institutes-container">

            <Button text="2000+ Courses" />

            <div className="institutes-heading">
                <h3><span>Recently Searched</span> Courses</h3>
            </div>

            <div className="institutes-cards">
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    subHeading="ICAI - The Institute of Chartered Accountants"
                    heading="Machine Learning and Artificial Intelligence"
                    info={[
                        { label: "Duration of Course", value: "1 Year" },
                        { label: "Learning", value: "Online & Offline (New Delhi, India)" },
                        { label: "Certification", value: "Diploma" },
                        { label: "Placement", value: "Inrernship" },
                    ]}
                    footerType="p"
                    footerText="₹ 2,90,000"
                />
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    subHeading="ICAI - The Institute of Chartered Accountants"
                    heading="Philosophy of Doctorate in Human Behavior and Phycological Research"
                    info={[
                        { label: "Duration of Course", value: "4 Year" },
                        { label: "Learning", value: "Online & Offline (New Delhi, India)" },
                        { label: "Certification", value: "PHD Degree" },
                        { label: "Placement", value: "Inrernship" },
                    ]}
                    footerType="p"
                    footerText="₹ 10,90,000"
                />
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    subHeading="ICAI - The Institute of Chartered Accountants"
                    heading="Advance Multimedia and Animation"
                    info={[
                        { label: "Duration of Course", value: "2 Year" },
                        { label: "Learning", value: "Online & Offline (New Delhi, India)" },
                        { label: "Certification", value: "Diploma" },
                        { label: "Placement", value: "Yes" },
                    ]}
                    footerType="p"
                    footerText="₹ 2,50,000"
                />
                <CardDesign
                    images={[CardImg, CardImg2, CardImg3, CardImg4]}
                    subHeading="ICAI - The Institute of Chartered Accountants"
                    heading="Data Analytics & Power BI"
                    info={[
                        { label: "Duration of Course", value: "6 Months" },
                        { label: "Learning", value: "Online & Offline (New Delhi, India)" },
                        { label: "Certification", value: "Certificate" },
                        { label: "Placement", value: "No (Interview Training incl.)" },
                    ]}
                    footerType="p"
                    footerText="₹ 1,00,000"
                />
            </div>

        </div>
    )
}

export default SearchedCourses;
