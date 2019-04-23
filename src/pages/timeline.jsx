import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chart from 'react-google-charts';

import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import LightboxImage from '../components/LightboxImage';
import './../styles/timeline.css';
import jsonData from './../data/timeline';


class Statistics extends React.PureComponent {
  constructor(props) {
    super(props);

    this.data1 = [
      ['Weekday', 'Number',],
      ['Monday', 0],
      ['Tuesday', 0],
      ['Wednesday', 0],
      ['Thursday', 0],
      ['Friday', 0],
      ['Saturday', 0],
      ['Sunday', 0],
    ];

    for (let i = 0; i < jsonData.length; ++i) {
      let date = new Date(jsonData[i].date);
      // getDay 함수는 일요일 부터 시작
      let day = (date.getDay() + 6) % 7;
      this.data1[day + 1][1] += 1;
    }

    this.data2 = [
      ['Place', 'Number'],
    ];
    let places = {};
    for (let i = 0; i < jsonData.length; ++i) {
      for (let j = 0; j < jsonData[i].places.length; ++j) {
        const place = jsonData[i].places[j];
        if (places[place]) {
          places[place] += 1;
        } else {
          places[place] = 1;
        }
      }
    }
    let etc = 0;
    for (const [key, value] of Object.entries(places)) {
      if (value > 1) {
        this.data2.push([key, value]);
      } else {
        etc += value;
      }
    }
    if (etc > 0) {
      this.data2.push(['기타', etc]);
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs>
            <Chart
              width={'100%'}
              height={'250px'}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={this.data1}
              options={{
                legend: { position: 'none' }
              }}
            />
          </Col>
          <Col xs>
            <Chart
              width={'100%'}
              height={'250px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.data2}
              options={{
                is3D: true,
              }}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

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

        {/* <h2>Statistics</h2>
        <Statistics /> */}

        <h2>Timeline</h2>
        <VerticalTimeline>
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
