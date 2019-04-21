import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

export default class Contact extends React.PureComponent {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Contact | ${siteTitle}`}
        />

        <h2>Contact</h2>
        <br />
        <p>Kakao: 김정진</p>
        <p>Phone: 김찬수</p>
        <p>Email: 김정현</p>
        <p>Meet: 안진영</p>
      </Layout>
    );
  }
}
Contact.propTypes = {
  data: PropTypes.object.isRequired
};

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
