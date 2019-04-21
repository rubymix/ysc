import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import Img from 'gatsby-image/withIEPolyfill';


export default class LightboxImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const { fluid, title, description } = this.props;
    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.closeModal}
          // center
          styles={{ modal: { padding: 0 } }}
        >
          <Img fluid={fluid} style={{width: 800}} />
          <div style={{ padding: 10 }}>
            <span style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</span>
            <br />
            <p style={{whiteSpace: 'pre-wrap'}}>{description}</p>
          </div>
        </Modal>
        <div onClick={this.openModal}>
          <Img fluid={fluid} title={title} />
        </div>
      </div>
    );
  }
}
LightboxImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};
