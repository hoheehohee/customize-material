import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SubHeading from '../../commons/SubHeading';
import Icon from '../../commons/Icon';

/**
 * 공통 헤더
 *
 * @param {classes} classes
 * @param {func} toggleDrawer 네비게이션 메뉴 on/off
 * @param {string} headline PC: 공통 타이틀, Mobile: 페이지의 타이틀
 */

const propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  headline: PropTypes.string
};

const defaultProps = {
  headline: ''
};

class Header extends Component {
  state = {
    tYvalue: 0
  };

  componentDidMount() {
    window.addEventListener('wheel', this.wheelScroll);
  }

  // 스크롤 시 translateY 값 변경하여 스티키헤더 적용
  wheelScroll = (e) => {
    const { innerHeight } = window;
    const contentHeight = document.getElementById('contents').offsetHeight;

    // 콘텐츠의 높이가 브라우저의 높이보다 클 경우에만 wheel 이벤트를 실행
    if (innerHeight < contentHeight) {
      const scrollUp = e.deltaY > 0;

      if (scrollUp) {
        this.setState({ tYvalue: '-100%' });
      } else {
        this.setState({ tYvalue: 0 });
      }
    }
  };

  render() {
    const { tYvalue } = this.state;
    const { classes, toggleDrawer, headline } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classes.root}
        style={{ transform: `translateY(${tYvalue})` }}
      >
        <Toolbar className={classes.toolbar}>
          <Button
            disableRipple
            color="inherit"
            aria-label="Menu"
            classes={{
              root: classes.button,
              flat: classes.menuButton
            }}
            onClick={toggleDrawer(true)}
          >
            <Icon name="hamburger" size="md" />
          </Button>

          <div className={classes.isMobile}>
            <SubHeading title={headline} position="header" />
          </div>

          <div className={classes.isPc}>
            <SubHeading title="백오피스" position="header" />
          </div>

          <Button disableRipple color="inherit" aria-label="Member" className={classes.button}>
            <Icon name="profile" size="md" />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  root: {
    borderWidth: 10,
    borderTopStyle: 'solid',
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard + 100
    })
  },
  toolbar: {
    minHeight: 50,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderBottomStyle: 'solid',
    borderColor: theme.palette.divider,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeInout,
      duration: theme.transitions.duration.shortest
    }),
    '& div': {
      flexGrow: 1
    }
  },
  button: {
    padding: 0,
    marginLeft: 12,
    minWidth: 32,
    minHeight: 32
  },
  isMobile: {
    display: 'block'
  },
  isPc: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    toolbar: {
      minHeight: 60,
      paddingLeft: 20,
      paddingRight: 20,
      borderColor: theme.palette.primary.main
    },
    isMobile: {
      display: 'none'
    },
    isPc: {
      display: 'block'
    }
  },
  [theme.breakpoints.up('md')]: {
    root: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      display: 'none'
    }
  }
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withStyles(styles)(Header);
