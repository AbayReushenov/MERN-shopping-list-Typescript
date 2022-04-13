import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';
import { AuthState } from '../../../store/auth/authSlice';
import { Logout } from './Logout/Logout';

interface Props {
  auth: AuthState;
}

export const СonfirmedUser: React.FC<Props> = (props) => {
  const { auth } = props;
  return (
    <Fragment>
      <NavItem>
        <span className='navbar-text mr-3'>
          <strong>
            {auth && auth.user ? `Welcome ${auth.user.name}` : ''}
          </strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );
};
