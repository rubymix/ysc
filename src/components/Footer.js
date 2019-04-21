import React from 'react';

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'gray',
    paddingTop: 15,
  },
};

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div style={styles.rootContainer}>
        Built with&nbsp;
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GatsbyJS
        </a>
      </div>
    );
  }
}
