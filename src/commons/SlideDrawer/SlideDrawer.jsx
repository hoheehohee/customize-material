import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

/**
 * 다음 주소 검색 입력창
 *
 * @param {bool} isOpen
 * @param {string} postCode
 * @param {string} address
 * @param {string} addressJibun
 * @param {string} addressDetail
 * @param {any} latitude
 * @param {any} longitude
 * @param {func} changeTextFields
 * @param {func} daumPoupOpen
 * @param {func} closeDaumPostcode
 */

const propTypes = {
  isOpen: PropTypes.bool,
  direction: PropTypes.string,
  toggleDrawer: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  isOpen: false,
  direction: 'left'
};

const SlideDrawer = ({ isOpen, direction, toggleDrawer, children, classes }) => (
  <div>
    <Hidden mdUp>
      <Drawer
        variant="temporary"
        anchor={direction}
        open={isOpen}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
        ModalProps={{
          keepMounted: true
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {children}
        </div>
      </Drawer>
    </Hidden>
    <Hidden smDown implementation="css">
      <Drawer
        variant="permanent"
        anchor={direction}
        open={isOpen}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
      >
        <div
          tabIndex={0}
          role="button"
          className={classes.drawerPaper}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {children}
        </div>
      </Drawer>
    </Hidden>
  </div>
);

const styles = theme => ({
  drawer: {},
  drawerPaper: {
    width: 256
  },
  [theme.breakpoints.up('md')]: {
    drawer: {
      position: 'relative'
    }
  }
});

SlideDrawer.propTypes = propTypes;
SlideDrawer.defaultProps = defaultProps;

export default withStyles(styles)(SlideDrawer);
