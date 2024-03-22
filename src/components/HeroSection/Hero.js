import React from 'react';
import Slider from "react-slick";
import logo from '../../assets/logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {
  const posts = [{
    id :1,
    title  : 'hello',
    content: 'world',
    image: logo
  },
  {
    id :2,
    title  : 'yes',
    content: 'my frnd',
    image: logo
  },
]

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
        {posts.map((post) => (
          <div key={post.id} className="custom-slide-box">
            <Link to={`/articles/${post.id}`}>
              <div className="custom-content">
                <div className="custom-text">
                  <div className="custom-text-content">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                </div>
                <div className="custom-image">
                  <img src={post.image} alt="Logo" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Hero;
