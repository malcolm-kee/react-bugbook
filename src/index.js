import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const posts = [
  {
    id: 1111,
    author: {
      src: 'https://twitter.com/dog_feelings/status/1130660155966730240',
      name: 'Thoughts of Dog 🏳️‍🌈'
    },
    post: {
      text: 'to be perfectly clear. i love you',
      image: null
    }
  },
  {
    id: 1,
    author: {
      src: 'https://twitter.com/markdalgleish/status/1095424850565378048',
      name: 'Mark Dalgleish'
    },
    post: {
      text:
        "If you're not mocking out Lodash, can you really call it a unit test?",
      image: null
    }
  },
  {
    id: 2,
    author: {
      src: 'https://twitter.com/iamdevloper/status/1081923027644882944',
      name: 'I Am Devloper'
    },
    post: {
      text:
        'when you visit a site you handed over 6 months ago and the client made some changes themselves',
      image: {
        src: 'https://bugbook.netlify.com/images/picture-after-client.jpg',
        alt: 'Ugly photo'
      }
    }
  }
];

const Post = ({ post }) => {
  const [liked, setLiked] = React.useState(false);

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
          onClick={() => setLiked(!liked)}
          type="button"
          className={liked ? 'button button-liked' : 'button'}
        >
          Like
        </button>
      </div>
    </article>
  );
};

const Feed = ({ posts }) => (
  <div className="feed">
    {posts.map(post => (
      <Post post={post} />
    ))}
  </div>
);

const BugForm = () => {
  const [name, setName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('');

  function reset() {
    setName('');
    setTitle('');
    setStatus('');
  }

  return (
    <div className="card">
      <form id="bug-form">
        <input type="hidden" name="id" id="id" />
        <div className="card-title">Create Issue</div>
        <div className="card-content">
          <div className="form-control">
            <label htmlFor="reportedBy">Your Name</label>
            <input
              value={name}
              onChange={ev => setName(ev.target.value)}
              id="reportedBy"
              name="reportedBy"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="title">Issue Title</label>
            <input
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              id="title"
              name="title"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <select
              value={status}
              onChange={ev => setStatus(ev.target.value)}
              id="status"
              name="status"
              required
            >
              <option value="" />
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>
        <div className="card-actions">
          <button type="submit" className="btn">
            Create
          </button>
          <button onClick={reset} type="reset" className="btn btn-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<BugForm />, rootElement);
