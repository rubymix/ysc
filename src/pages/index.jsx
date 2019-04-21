import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Hemlet from 'react-helmet';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/Layout';

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
        <p>YUSUNG CASTLE</p>
        <Img fluid={imageFluid} title="유성의 봄" alt="유성의 봄" />
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
