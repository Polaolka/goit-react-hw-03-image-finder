import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags, id, onClickImg, largeImageURL } = this.props;
    return (
      <li className={css.galleryItem} key={id} onClick={onClickImg}>
        <img
          className={css.galleryImage}
          src={webformatURL}
          alt={tags}
          data-modal={largeImageURL}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isImagesLoaded: PropTypes.bool.isRequired,
  onClickImg: PropTypes.func.isRequired,
};
