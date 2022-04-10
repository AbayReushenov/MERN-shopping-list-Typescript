import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';

import { Signup } from './Signup/Signup';
import { Login } from './Login/Login';

export const Guest: React.ReactFragment = (
  <Fragment>
    <NavItem>
      <Signup />
    </NavItem>
    <NavItem>
      <Login />
    </NavItem>
  </Fragment>
);
