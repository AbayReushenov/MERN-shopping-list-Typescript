import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';
import { Signup } from './Signup';
import { Login } from './Login';

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
