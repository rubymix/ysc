import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import './../styles/timeline.css';
import LightboxImage from '../components/LightboxImage';
import jsonData from './../data/timeline';


export default class Timeline extends React.PureComponent {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout style={{ maxWidth: rhythm(45) }}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Timeline | ${siteTitle}`}
        />

        <h2>Timeline</h2>

        <div>
          <VerticalTimeline animate={false}>
            {jsonData.map((item, index) => {
              let image = null;
              for (let i = 0; i < this.props.data.images.edges.length; ++i) {
                if (item.imagefile === this.props.data.images.edges[i].node.relativePath) {
                  image = this.props.data.images.edges[i].node.childImageSharp;
                  break;
                }
              }

              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  date={item.date}
                  iconStyle={{ background: '#fff', color: '#34495e' }}
                  icon={item.icon}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <br />
                  {image && (
                    <LightboxImage
                      fluid={image.fluid}
                      title={item.title}
                      description={item.description}
                    />
                  )}
                  {item.places.map(place => (
                    <label key={place} className="vertical-timeline-element-place">
                      {place}
                    </label>
                  ))}
                  {item.attendances.map(attendance => (
                    <label key={attendance} className="vertical-timeline-element-attendance">
                      {attendance}
                    </label>
                  ))}
                  <br />
                  <div className="vertical-timeline-element-description">
                    {item.description}
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Layout>
    );
  }
}
Timeline.propTypes = {
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
    images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          relativePath,
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
