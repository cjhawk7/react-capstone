import React from 'react';
import { Link } from 'react-router';
import NavbarFeatures from './NavbarFeatures';

const Main = React.createClass({
  render() {
    return (
      <div>
        <NavbarFeatures />
        <h1>
          <Link to="/">cool app name</Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
