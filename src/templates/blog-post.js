import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Author from '../components/Author';
import { rhythm, scale } from '../utils/typography';


export default class BlogPostTemplate extends React.PureComponent {
  componentDidMount() {
    const utterances = document.createElement('script');
    utterances.setAttribute('src', 'https://utteranc.es/client.js');
    utterances.setAttribute('repo', 'rubymix/ysc');
    utterances.setAttribute('issue-term', 'pathname');
    utterances.setAttribute('label', 'comment');
    utterances.setAttribute('theme', 'github-light');
    utterances.setAttribute('crossorigin', 'anonymous');
    utterances.setAttribute('async', true);

    document.getElementById('utterances').appendChild(utterances);
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const post = this.props.data.markdownRemark;
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Link to="/articles">&larr; Articles</Link>
        <h1>{post.frontmatter.title}</h1>
        <br />
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Author author={post.frontmatter.author}/>
        <div id="utterances" />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.path} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}
BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql `
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        path
      }
      fields {
        slug
      }
    }
  }
`;
