import React from 'react';
import Modal from 'react-responsive-modal';

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
    const { title, caption, src } = this.props;
    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.closeModal}
          center
          styles={{
            modal: {
              padding: 0,
            },
          }}
          showCloseIcon={true}
        >
          <img src={src} alt={title} />
          <div style={{ padding: 10 }}>
            <span style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</span>
            <br />
            {caption}
          </div>
        </Modal>
        <img
          src={src}
          alt={title}
          onClick={this.openModal}
        />
      </div>
    );
  }
}
