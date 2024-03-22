import React from 'react';
import './styles.css';

const Articles = () => {
  return (
    <section className="blogs-section">
      <h1 className='blogs-heading'>Discover Asia</h1>
      <div className='blogs-slider'>
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
      </div>
    </section>
  );
}

export default Articles;
