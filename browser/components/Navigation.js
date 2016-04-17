import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    roles: state.roles
  };
};

let Navigation = function ({ roles }) {
  const navItems = [];
  Object.keys(roles).forEach((id) => {
    let role = roles[id];
    navItems.push(<span className="nav-pills">{role.name}</span>);
  });
  return (
    <div>{navItems}</div>
  );
};

Navigation.propTypes = {
  roles: React.PropTypes.object
};

Navigation = connect(mapStateToProps)(Navigation);

export default Navigation;
