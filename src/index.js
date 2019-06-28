import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const feed = (
  <div className="feed">
    <article className="card post">
      <div className="card-title">
        <a href="https://twitter.com/dog_feelings/status/1130660155966730240">
          Thoughts of Dog 🏳️‍🌈
        </a>
        <button className="focus-btn" type="button">
          ...
        </button>
      </div>
      <div className="card-content">to be perfectly clear. i love you</div>
      <div className="card-actions">
        <button type="button" className="button">
          Like
        </button>
      </div>
    </article>
    <article className="card post">
      <div className="card-title">
        <a href="https://twitter.com/markdalgleish/status/1095424850565378048">
          Mark Dalgleish
        </a>
        <button className="focus-btn" type="button">
          ...
        </button>
      </div>
      <div className="card-content">
        If you're not mocking out Lodash, can you really call it a unit test?
      </div>
      <div className="card-actions">
        <button type="button" className="button">
          Like
        </button>
      </div>
    </article>
    <article className="card post">
      <div className="card-title">
        <a href="https://twitter.com/iamdevloper/status/1081923027644882944">
          I Am Devloper
        </a>
        <button className="focus-btn" type="button">
          ...
        </button>
      </div>
      <div className="card-content">
        when you visit a site you handed over 6 months ago and the client made
        some changes themselves
      </div>
      <div className="card-image-container">
        <img
          className="card-image"
          src="https://bugbook.netlify.com/images/picture-after-client.jpg"
          alt="Ugly"
        />
      </div>
      <div className="card-actions">
        <button type="button" className="button">
          Like
        </button>
      </div>
    </article>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(feed, rootElement);
