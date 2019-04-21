import React from 'react';

import { rhythm } from '../utils/typography';
import Header from '../components/Header';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;
    const importedStyle = this.props.style;
    const defaultStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    };

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    };
    return (
      <div style={finalStyle}>
        <Header />
        <Navbar />
        <br />
        {children}
        <Footer />
      </div>
    );
  }
}
