import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Articles = () => {
  const articles = useSelector((state)=> state.post)

  return (
    <section className="blogs-section">
      <h1 className='blogs-heading'>Discover Asia</h1>

      <div className="blogs-slider">
        {articles.posts.map((post)=> (
          <div className="blogs-box" key={post.id} style={{ backgroundImage: `url(${post.image})` }}>
            <h3><Link to={`/articles/${post.id}`}>{post.title}</Link></h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
