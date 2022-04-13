import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, ModalHeader, ModalBody, NavLink, Alert } from 'reactstrap';

import { EventTarget } from '../../../../types/EventTarget';
import { login } from '../../../../store/auth/login';
import { FormLogin } from './FormLogin';
import { useMsgModal } from '../hooks/useMsgModal';
import { E_ERROR } from '../../../../types/enum';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const { msg, modal, handleToggle } = useMsgModal(E_ERROR.LOGIN_FAIL);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e: EventTarget) => setEmail(e.target.value);
  const handleChangePassword = (e: EventTarget) => setPassword(e.target.value);
  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href='#'>
        Войти
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Войти с паролем</ModalHeader>
        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}
          <FormLogin
            onChangeEmail={handleChangeEmail}
            onChangePassword={handleChangePassword}
            onSubmit={handleOnSubmit}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};
