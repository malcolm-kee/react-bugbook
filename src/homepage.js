import React from 'react';

const Post = ({ post, onToggleLike, liked }) => {
  return (
    <article className="card post" key={post.id}>
      <div className="card-title">
        <a href={post.author.src}>{post.author.name}</a>
        <button className="focus-btn" type="button">
          ...
        </button>
      </div>
      <div className="card-content">{post.post.text}</div>
      {post.post.image && (
        <div className="card-image-container">
          <img
            className="card-image"
            src={post.post.image.src}
            alt={post.post.image.alt}
          />
        </div>
      )}
      <div className="card-actions">
        <button
          onClick={onToggleLike}
          type="button"
          className={liked ? 'button button-liked' : 'button'}
        >
          Like
        </button>
      </div>
    </article>
  );
};

export const Feed = ({ posts }) => {
  const [likedPosts, setLikedPosts] = React.useState([]);

  function toggleLikePost(postId) {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts(likedPosts.concat(postId));
    }
  }

  function likeAll() {
    setLikedPosts(posts.map(post => post.id));
  }

  return (
    <>
      <div className="card ads-card">
        <div className="card-small-title">Exclusive Features for You!</div>
        <button
          onClick={likeAll}
          id="like-all-btn"
          className="btn"
          type="button"
        >
          Like All Posts
        </button>
      </div>
      <div className="feed">
        {posts.map(post => (
          <Post
            post={post}
            liked={likedPosts.includes(post.id)}
            onToggleLike={() => toggleLikePost(post.id)}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};
