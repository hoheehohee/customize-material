import React from 'react';
import PropTypes from 'prop-types';

/**
 * 백오피스 공통 아이콘
 *
 * @param {string} name
 * @param {string} color
 * @param {string} size
 */

const propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  color: '',
  size: 'md'
};

const Icon = ({ name, color, size }) => <i className={`icon icon-${name} ${color} ${size}`} />;

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
