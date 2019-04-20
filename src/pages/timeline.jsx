import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import './../styles/timeline.css';
import LightboxImage from '../components/LightboxImage';
import jsonData from './../data/timeline';

class Timeline extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

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
            {jsonData.map(e => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={e.date}
                iconStyle={{ background: '#fff', color: '#34495e' }}
                icon={e.icon}
                key={e.headline}
              >
                <h3 className="vertical-timeline-element-title">
                  {e.headline}
                </h3>
                <br />
                {e.image &&
                  <LightboxImage
                    src={e.image}
                    title={e.headline}
                    caption={e.description}
                  />
                }
                {e.places.map(place =>
                  <label key={place} className="vertical-timeline-element-place">{place}</label>)}
                {e.attendances.map(attendance =>
                  <label key={attendance} className="vertical-timeline-element-attendance">{attendance}</label>)}
                <br />
                <div className="vertical-timeline-element-description">{e.description}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Layout>
    );
  }
}

export default Timeline;

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
