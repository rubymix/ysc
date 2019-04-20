import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Hemlet from 'react-helmet';

import Layout from '../components/Layout';
import DisplayImage from './../assets/images/JP410417_121158.jpg';

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
          YUSUNG CASTLE
        </p>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    );
  }
}

export default SiteIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
