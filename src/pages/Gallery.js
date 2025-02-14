// src/pages/Gallery.js
import AnimatedPage from "../components/AnimatedPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots",
    arrows: true,
    prevArrow: <button style={{ color: 'white' }}>Previous</button>,
    nextArrow: <button style={{ color: 'white' }}>Next</button>,
  };

  // Replace these URLs with your actual image URLs
  const images = [
    image1,
    image2,
    image3,
  ];

  return (
    <AnimatedPage>
      <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
        <h1>Your Beauty ❤️</h1>
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto", 
          padding: "20px",
          "& .slick-prev, & .slick-next": { color: "white" },
          "& .slick-dots li button:before": { color: "white" }
        }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  style={{ 
                    width: "100%", 
                    height: "600px",
                    objectFit: "contain",
                    margin: "0 auto",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    transform: "rotate(-90deg)",
                  }} 
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Gallery;