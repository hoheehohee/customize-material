import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../assets/style/theme';

const propTypes = {
  children: PropTypes.node.isRequired
};

const Wrapper = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
