import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout';
import jsonData from './../data/leadership';


export default class Leadership extends React.PureComponent {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Leadership | ${siteTitle}`}
        />

        <h2>Leadership</h2>
        <Grid fluid>
          <Row>
            <h3>Board</h3>
          </Row>
          <Row>
            {jsonData.filter(item => item.grade === 'board').map((item, index) =>
              <Col key={index} xs>
                <img src={item.portrait} alt={item.name} style={{ width: 250, margin: 10 }} />
              </Col>
            )}
          </Row>
        </Grid>
      </Layout>
    );
  }
}
Leadership.propTypes = {
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
