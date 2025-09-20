import "./Partner.css";
import img1 from "../../assets/partner-img1.png";
import img2 from "../../assets/partner-img2.png";
import img3 from "../../assets/partner-img3.png";
import img4 from "../../assets/partner-img4.png";
import img5 from "../../assets/partner-img5.png";
import img6 from "../../assets/partner-img6.png";
import img7 from "../../assets/partner-img7.png";

const Partner = () => {
    return (
        <div className="partner-container">
            <div className="partner-heading">
                <h3>Featured <span>Partners</span> – The Best in <span>Education</span></h3>
            </div>
            <div className="image-containers">
                <div className="image-box"><img src={img1} alt="" /></div>
                <div className="image-box"><img src={img2} alt="" /></div>
                <div className="image-box"><img src={img3} alt="" /></div>
                <div className="image-box"><img src={img4} alt="" /></div>
                <div className="image-box"><img src={img5} alt="" /></div>
                <div className="image-box"><img src={img6} alt="" /></div>
                <div className="image-box"><img src={img7} alt="" /></div>
            </div>
        </div>
    )
}

export default Partner;
