import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { actions as actionsAuth } from '../../../../store/auth/authSlice';

export const Logout = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <NavLink onClick={() => dispatch(actionsAuth.reset())} href='/'>
        Выйти
      </NavLink>
    </Fragment>
  );
};
