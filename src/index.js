import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Feed } from './homepage';
import { BugForm } from './bugs';

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

const rootElement = document.getElementById('root');
ReactDOM.render(<Feed posts={posts} />, rootElement);
