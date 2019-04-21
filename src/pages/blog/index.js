import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import { rhythm } from '../../utils/typography';

export default class BlogIndex extends React.PureComponent {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Blog | ${siteTitle}`}
        />
        <h2>Blog</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.path;
          return (
            <div key={node.frontmatter.path}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}
BlogIndex.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql `
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            type
          }
        }
      }
    }
  }
`;
