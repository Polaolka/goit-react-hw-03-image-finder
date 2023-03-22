import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { isImagesLoaded, onClickImg } = this.props;
    const { images } = this.props;
    return (
      <div className={css.container}>
        <ul className={css.gallery}>
          {isImagesLoaded && <p>loaded...</p>}
          {images &&
            images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
              largeImageURL={largeImageURL}
                onClickImg={onClickImg}
                key={id}
                id={id}
                webformatURL={webformatURL}
                target="_blank"
                rel="noreferrer noopener"
                tags={tags}
              />
            ))}
        </ul>

      </div>
    );
  }
}
