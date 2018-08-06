import React from 'react';
import PropTypes from 'prop-types';

/**
 * 백오피스 공통 이미지
 *
 * @param {string} src
 * @param {string} width
 * @param {string} height
 * @param {string} alt
 */

const propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string
};
const defaultProps = {
  alt: 'IMG'
};

const Image = ({ src, width, height, alt }) => (
  <img src={src} width={width} height={height} alt={alt} />
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
