import React, { useEffect, useState } from "react";
import { createComment, deleteComment } from '../../Redux/comments/commentThunk';
import { createLike, deleteLike } from '../../Redux/likes/likesThunk';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../../Redux/articles/articleThunk";

const Article = () => {
  const { postId } = useParams();
  const token = useSelector(state => state.login.token);
  const post = useSelector(state => state.post.posts.find(post => post.id === parseInt(postId)));
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!post) {
    return <div>Post not found</div>
  }

  const handlePostComment = () => {
    if (commentText.trim()) {
      dispatch(createComment({ token, postId, commentData: { text: commentText } }));
      setCommentText('');
    }
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment({ token, postId, commentId }));
  };

  const handleCreateLike = () => {
    dispatch(createLike({ token, postId }));
  };

  const handleDeleteLike = () => {
    dispatch(deleteLike({ token, postId }));
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <section>
      <div>
       <img src = {post.image}  alt="post-image"/>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post.comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>Delete Comment</button>
          </div>
        ))}
        <p>Likes: {post.likes}</p>
        <form onSubmit={(e) => { e.preventDefault(); handlePostComment(); }}>
          <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Enter your comment"
          />
          <button type="submit">Comment</button>
        </form>
        <button onClick={handleCreateLike}>Like</button>
        <button onClick={handleDeleteLike}>Unlike</button>
      </div>
    </section>
  );
};

export default Article;
