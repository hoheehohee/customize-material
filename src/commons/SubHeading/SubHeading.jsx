import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Image from '../Image';
import logo from '../../assets/images/logo_default.svg';

/**
 * 모바일 상단, 사이드 메뉴 상단 타이틀
 *
 * @param {object} classes
 * @param {string} title
 * @param {string} position 헤더 상단에 위치하는지 네비게이션 상단에 위치하는지를 지정
 * @param {string} link 로고를 클릭했을때 이동되는 경로
 */

const propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  position: PropTypes.string
};

const defaultProps = {
  title: '',
  position: 'header'
};

const SubHeading = ({ title, position, classes, link }) => {
  const style = position === 'header' ? classes.header : classes.navigation;

  return (
    <h2 className={`${classes.subheading} ${classes.headingStyle} ${style}`}>
      <Link to={link}>
        <Image src={logo} width="70" height="50" alt="Image" />
        <span>{title}</span>
      </Link>
    </h2>
  );
};

const styles = theme => ({
  subheading: theme.typography.subheading,
  headingStyle: {
    margin: 0,
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.black
    },
    '& span ': {
      verticalAlign: 'middle'
    },
    '& img': {
      verticalAlign: 'middle'
    }
  },
  header: {
    textAlign: 'center',
    '& img': {
      display: 'none'
    }
  },
  navigation: {
    paddingTop: theme.spacing.unit - 4,
    paddingLeft: theme.spacing.unit,
    height: 60,
    borderWidth: 1,
    borderBottomStyle: 'solid',
    verticalAlign: 'middle',
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.common.black,

    '& > a': {
      color: theme.palette.common.white
    }
  },
  isMobile: {
    display: 'inline-block'
  },
  isPc: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    header: {
      textAlign: 'left',

      '& img': {
        display: 'inline-block'
      },
      '& span': {
        color: theme.palette.common.white
      }
    },
    navigation: {
      paddingTop: theme.spacing.unit + 2,
      height: 70
    }
  }
});

SubHeading.propTypes = propTypes;
SubHeading.defaultProps = defaultProps;

export default withStyles(styles)(SubHeading);
