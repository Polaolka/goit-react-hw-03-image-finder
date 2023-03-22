import React, { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';
// import PropTypes from 'prop-types';

export class Loader extends Component {
  render() {
    return (
      <div className={css.loaderWrapper}>
        <ColorRing
          margin="0 auto"
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      </div>
    );
  }
}
