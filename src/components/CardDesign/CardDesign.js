import { useEffect, useState } from "react";
import "./CardDesign.css";
import Star from "../../assets/star.png";
import StarWhite from "../../assets/star-white.png";
import Save from "../../assets/saved.png";
import CardImg from "../../assets/card-img1.png";
import CardImg2 from "../../assets/card-img2.jpg";
import CardImg3 from "../../assets/card-img3.jpg";
import CardImg4 from "../../assets/card-img4.jpg";

const images = [CardImg, CardImg2, CardImg3, CardImg4];

const CardDesign = ({ images, heading, info }) => {

    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1000); 

      return () => clearInterval(interval);
    }
  }, [images]);

    return (
        <div className="card-container">
            <div className="card-contents">
                <div className="card-images">
                    <img src={images?.[currentImage]} alt={heading} />
                    <div className="hover-contents">
                        <p>
                            Write a detailed introduction about your institute here. Mention the types of programs,
                            courses, or services you offer, you teaching approach, and any special facilities or
                            resources available to students. Highlight your achievements, accreditations, and success
                            stories to build trust. Explain what makes you institute unique.
                        </p>
                    </div>
                </div>
                <div className="card-heading">
                    <h3>{heading}</h3>
                </div>
                <div className="card-info">
                    {info?.map((item, index) => (
                        <p key={index}>
                            <strong>{item.label}: </strong> {item.value}
                        </p>
                    ))}
                </div>
                <div className="card-footer">
                    <div className="ratings">
                        <div className="stars">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={StarWhite} alt="" />
                        </div>
                        <div className="rating-text">
                            <div className="reviews">
                                <img src={Star} alt="" />
                                <p><strong>4.3</strong> (12K Reviews)</p>
                            </div>
                        </div>
                    </div>
                    <div className="saved">
                        <button>See Courses</button>
                        <img src={Save} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDesign;
