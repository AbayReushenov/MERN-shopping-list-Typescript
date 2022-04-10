import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { actions as actionsAuth } from '../../../../store/auth/auth';

export const Logout = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <NavLink onClick={() => dispatch(actionsAuth.reset())} href='#'>
        Logout
      </NavLink>
    </Fragment>
  );
};
