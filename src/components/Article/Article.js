import React, { useEffect, useState } from "react";
import { createComment, deleteComment } from "../../Redux/comments/commentThunk";
import { createLike, deleteLike } from "../../Redux/likes/likesThunk";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../../Redux/articles/articleThunk";


const Article = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.post.posts.find((post) => post.id === parseInt(postId))
  );
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAsyncAction = async (action, ...params) => {
    setLoading(true);
    try {
      await dispatch(action(...params));
      await dispatch(fetchPosts());
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostComment = () => {
    if (commentText.trim()) {
      handleAsyncAction(createComment, { postId, commentData: { text: commentText } });
      setCommentText("");
    }
  };

  const handleDeleteComment = (commentId) => {
    handleAsyncAction(deleteComment, { postId, commentId });
  };

  const handleCreateLike = () => {
    handleAsyncAction(createLike, { postId });
  };

  const handleDeleteLike = (likeId) => {
    handleAsyncAction(deleteLike, { postId, likeId });
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section>
      <div>
        <img src={post.image} alt="post-image" />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {loading && <p>Loading...</p>}
        {post.comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>
              Delete Comment
            </button>
          </div>
        ))}
        <p>Likes: {post.likes.length}</p>

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
        {post.likes.map((like) => (
          <button key={like.id} onClick={() => handleDeleteLike(like.id)}>
            Unlike
          </button>
        ))}
      </div>
    </section>
  );
};

export default Article;
