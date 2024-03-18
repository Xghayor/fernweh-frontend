import React from 'react';
import Slider from "react-slick";
import logo from '../../assets/logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

const Hero = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="custom-slider-container">
      <Slider {...settings}>
        <div className="custom-slide-box">
          <div className="custom-content">
            <div className="custom-text">
              <div className="custom-text-content">
                <h2>Title 1</h2>
                <p>Short paragraph 1 </p>
              </div>
            </div>
            <div className="custom-image">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="custom-slide-box">
          <div className="custom-content">
            <div className="custom-text">
              <div className="custom-text-content">
                <h2>Title 2</h2>
                <p>Short paragraph 2 </p>
              </div>
            </div>
            <div className="custom-image">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
