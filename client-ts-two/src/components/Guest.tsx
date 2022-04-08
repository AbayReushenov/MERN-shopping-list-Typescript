import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';
import { SignupModal } from './auth/SignupModal';
import LoginModal from './auth/LoginModal';

export const Guest: React.ReactFragment = (
  <Fragment>
    <NavItem>
      <SignupModal />
    </NavItem>
    <NavItem>
      <LoginModal />
    </NavItem>
  </Fragment>
);
