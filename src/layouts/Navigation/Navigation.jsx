import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubHeading from '../../commons/SubHeading';
import SlideDrawer from '../../commons/SlideDrawer';
import MenuList from '../../collections/MenuList';

/**
 * 공통 네비게이션
 *
 * @param {array} routes 네비게이션 메뉴 정보
 * @param {bool} drawerOpen 네비게이션의 on/off 상태
 * @param {number} currentKey 선택된 네비게이션의 index 값
 * @param {func} onSelected 네비게이션 아이템 선택
 * @param {func} toggleDrawer 네비게이션 메뉴 on/off
 */

const propTypes = {
  routes: PropTypes.array,
  drawerOpen: PropTypes.bool,
  currentKey: PropTypes.number,
  toggleDrawer: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired
};

const defaultProps = {
  routes: [],
  currentKey: 0,
  drawerOpen: false
};

class Navigation extends Component {
  state = {};

  render() {
    const { routes, drawerOpen, toggleDrawer, currentKey, onSelected } = this.props;

    return (
      <SlideDrawer direction="left" isOpen={drawerOpen} toggleDrawer={toggleDrawer}>
        <nav>
          <SubHeading title="백오피스" position="navigation" />
          {routes.map((route, idx) => (
            <MenuList
              path={route.path}
              category={route.category}
              subRoutes={route.subRoutes}
              currentKey={currentKey}
              onSelected={onSelected}
              key={idx}
            />
          ))}
        </nav>
      </SlideDrawer>
    );
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
