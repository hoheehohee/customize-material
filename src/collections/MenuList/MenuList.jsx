import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

/**
 * 사이드메뉴 리스트
 *
 * @param {Object} classes
 * @param {string} category 1Depth 메뉴명
 * @param {string} path 1Depth 메뉴 path
 * @param {Array} subRoutes 2Depth 메뉴 아이템 배열
 * @param {Func} onSelected 메뉴 아이템 클릭시 id, value 값을 넘김
 */

const propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
  // currentKey: PropTypes.number.isRequired,
  subRoutes: PropTypes.array
};

const defaultProps = {
  subRoutes: []
};

class MenuList extends Component {
  handleClick = (e, value, nPath) => {
    const target = e.currentTarget;
    const { id } = target;
    const { onSelected } = this.props;

    onSelected(id, value, nPath);
  };

  render() {
    const { path, category, subRoutes, classes } = this.props;
    const { pathname } = window.location;
    const wPath = pathname;

    return (
      <List className={classes.menulist} component="nav">
        <ListItem>
          <ListItemText primary={category} />
        </ListItem>
        {subRoutes.length > 0 ? (
          <List component="nav">
            {subRoutes.map((subRoute, idx) => {
              const nPath = path + subRoute.path;

              return (
                <ListItem
                  button
                  id={idx}
                  key={idx}
                  className={classes.submenu}
                  onClick={e => this.handleClick(e, subRoute.name, nPath)}
                >
                  <Link
                    to={`${path}${subRoute.path}`}
                    className={wPath === nPath ? classes.active : ''}
                    id={idx}
                  >
                    <ListItemText primary={subRoute.name} />
                  </Link>
                </ListItem>
              );
            })}
            {/* <div
              className={classes.activeBar}
              style={{ top: 52 * currentKey + 8 }}
            /> */}
          </List>
        ) : null}
        <Divider />
      </List>
    );
  }
}

const styles = theme => ({
  menulist: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 0,
    paddingBottom: 0,
    width: 256
  },
  menu: {
    padding: 0,
    '& a': {
      display: 'block',
      width: '100%',
      textDecoration: 'none',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 24,
      paddingRight: 24
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary
    }
  },
  submenu: {
    padding: 0,
    '& a': {
      display: 'block',
      width: '100%',
      textDecoration: 'none',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 48,
      paddingRight: 24
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary
    }
  },
  active: {
    borderWidth: 5,
    borderColor: theme.palette.primary.main,
    borderRightStyle: 'solid',
    '& span': {
      color: theme.palette.primary.dark
    }
  },
  activeBar: {
    position: 'absolute',
    top: 8,
    right: 0,
    width: 5,
    height: 52,
    transition: theme.transitions.create('top'),
    backgroundColor: theme.palette.primary.main
  }
});

MenuList.propTypes = propTypes;
MenuList.defaultProps = defaultProps;

export default withStyles(styles)(MenuList);
