import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, NavLink, Alert } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { EventTarget } from '../../../../types/EventTarget';
import { signupUserAsync } from '../../../../store/auth/signupUser';
import { FormSignup } from './FormSignup';
import { useMsgModal } from '../hooks/useMsgModal';
import { E_ERROR } from '../../../../types/enum';


export const Signup: React.FC = () => {
  const { msg, modal, handleToggle } = useMsgModal(E_ERROR.REGISTER_FAIL);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const handleChangeName = (e: EventTarget) => setName(e.target.value);
  const handleChangeEmail = (e: EventTarget) => setEmail(e.target.value);
  const handleChangePassword = (e: EventTarget) => setPassword(e.target.value);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(signupUserAsync(user));
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href='#'>
        Register
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}
          <FormSignup
            onChangeName={handleChangeName}
            onChangeEmail={handleChangeEmail}
            onChangePassword={handleChangePassword}
            onSubmit={handleOnSubmit}
          />
        </ModalBody>        
      </Modal>
    </div>
  );
};
