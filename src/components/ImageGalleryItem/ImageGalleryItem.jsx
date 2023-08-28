import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Img, Item } from './ImageGalleryItem.styled';

class ImageItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;

    return (
      <>
        <Item>
          <Img
            src={image.webformatURL}
            onClick={this.toggleModal}
          />
          {showModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              onClose={this.toggleModal}
            />
          )}
        </Item>
      </>
    );
  }
}

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;
