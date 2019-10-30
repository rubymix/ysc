import React from 'react';
import PropTypes from 'prop-types';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import { rhythm } from '../utils/typography';
import jsonData from './../data/leadership';


export default function Author(props) {
  const { author } = props;

  let authorInfo = null;
  for (let i = 0; i < jsonData.length; ++i) {
    if (author === jsonData[i].name) {
      authorInfo = jsonData[i];
    }
  }
  if (!authorInfo) return null;

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={authorInfo.portrait}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: '50%'
        }}
      />
      <p>{authorInfo.description}</p>
    </div>
  );
}
Author.propTypes = {
  author: PropTypes.string.isRequired
};
