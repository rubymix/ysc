import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Hemlet from 'react-helmet';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/Layout';
import YusungTelecom from '../assets/images/YusungTelecom.gif';
import UpcomingEvents from '../assets/images/upcoming-events.gif';

export default function Home(props) {
  const siteTitle = props.data.site.siteMetadata.title;
  const siteDescription = props.data.site.siteMetadata.description;
  const imageFluid = props.data.image.childImageSharp.fluid;

  return (
    <Layout>
      <Hemlet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Hemlet>
      <Img fluid={imageFluid} title="트윈스" alt="Twins" />
      <h2>YUSUNG CASTLE ™</h2>
      <p>
        Yusung Castle is an organization in Korea.<br />
        Since our found in 2018, we grow up over 10 members.<br />
        Collaboration, hard work, and creativity is what drives our organization to glory.<br />
      </p>

      <br />
      <div>
        <img src={UpcomingEvents} alt="Upcoming Events" style={{ maxWidth: 300, marginRight: 20 }} />
        <strong style={{ verticalAlign: 'top' }}>TBA</strong>
      </div>

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
    image: file(relativePath: {eq: "JP411016_155934.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
