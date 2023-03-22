import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';
import { TfiClose } from "react-icons/tfi";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) this.props.onClose();
  };

  render() {
    const { onClose, largeImageURL, tags } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
          <button
            type="button"
            className={css.btnClose}
            aria-label="Close"
            onClick={onClose}
          ><TfiClose />
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}