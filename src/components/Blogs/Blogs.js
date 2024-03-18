import React from 'react';
import './styles.css';
import Slider from "react-slick";

const SampleNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", background: "grey", marginRight: '50px' }}
    onClick={onClick}
  />
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", background: "grey"}}
    onClick={onClick}
  />
);



const Blogs = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <section className="blogs-slider">
        <h1 className='blogs-heading'>Discover Asia</h1>
          <Slider {...settings}>
            <div className='blogs-box'>
              <h3>1</h3>
            </div>
            <div className='blogs-box'>
              <h3>2</h3>
            </div>
            <div className='blogs-box'>
              <h3>3</h3>
            </div>
            <div className='blogs-box'>
              <h3>4</h3>
            </div>
            <div className='blogs-box'>
              <h3>4</h3>
            </div>
            <div className='blogs-box'>
              <h3>4</h3>
            </div>
            <div className='blogs-box'>
              <h3>4</h3>
            </div>
          </Slider>
        </section>
      );
}

export default Blogs;