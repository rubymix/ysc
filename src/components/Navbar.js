import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from './../utils/typography';

export default class Navbar extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link to={'/'}>Home</Link>
          <Link to={'/leadership'}>Leadership</Link>
          <Link to={'/timeline'}>Timeline</Link>
          {/* <Link to={'/articles'}>Articles</Link> */}
        </div>
      </div>
    );
  }
}
