import React from 'react';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const mapStateToProps = (state) => {
  return {
    roles: state.roles
  };
};

let Navigation = function ({ roles }) {
  const navItems = [];
  Object.keys(roles).forEach((id) => {
    let role = roles[id];
    navItems.push(<NavItem eventKey={role.name} href="/home">{role.name}</NavItem>);
  });
  return (
    <section>
      <Nav bsStyle="tabs" justified activeKey={1}>
        {navItems}
      </Nav>
    </section>
  );
};

Navigation.propTypes = {
  roles: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  }))
};

Navigation = connect(mapStateToProps)(Navigation);

export default Navigation;
