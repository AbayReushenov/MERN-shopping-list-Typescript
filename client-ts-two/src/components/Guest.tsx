import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';
import {RegisterModal} from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';

export const Guest: React.ReactFragment = (
  <Fragment>
    <NavItem>
      <RegisterModal />
    </NavItem>
    <NavItem>
      <LoginModal />
    </NavItem>
  </Fragment>
);
