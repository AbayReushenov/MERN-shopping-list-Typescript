import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';

import { Register } from './Register/Register';
import { Login } from './Login/Login';

export const Guest: React.FC = () => {
  return (
    <Fragment>
      <NavItem>
        <Register />
      </NavItem>
      <NavItem>
        <Login />
      </NavItem>
    </Fragment>
  );
};
