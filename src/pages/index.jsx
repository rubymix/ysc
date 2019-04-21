import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Hemlet from 'react-helmet';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/Layout';
import YusungTelecom from '../assets/images/YusungTelecom.gif';

export default class Home extends React.PureComponent {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;
    const imageFluid = this.props.data.image.childImageSharp.fluid;

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <Img fluid={imageFluid} title="유성의 봄" alt="The spring of Yusung" />
        <h2>YUSUNG CASTLE ™</h2>
        <p>
          Yusung Castle is an organization in Korea.<br />
          Since our found in 2018, we grow up over 5 members.<br />
          Collaboration, hard work, and creativity is what drives our organization to glory.<br />
        </p>
        <h2>Sponsors</h2>
        <a href="http://www.yusung82.co.kr" target="_blank" rel="noopener noreferrer">
          <img src={YusungTelecom} alt="Yusung Telecom" />
        </a>

        <h2>Maps</h2>
        <iframe
          title="Yusung Castle Maps"
          src="https://www.google.com/maps/d/embed?mid=1VXvPxilzJq9XyV27iVisbI4srptG12_8"
          width="100%"
          height="500">
        </iframe>
      </Layout>
    );
  }
}
Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    },
    image: file(relativePath: {eq: "JP410417_121158.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
