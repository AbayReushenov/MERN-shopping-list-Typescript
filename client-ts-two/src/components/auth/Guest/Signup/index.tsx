import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, NavLink, Alert } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { ITarget } from '../../../../types/interfaces';
import { signupUserAsync } from '../../../../store/auth/signupUser';
import { FormSignup } from './FormSignup';
import { Msg } from '../../../../store/auth/enumMsg';
import { useMsgModal } from '../useMsgModal';


export const Signup: React.FC = () => {
  const { msg, modal, handleToggle } = useMsgModal(Msg.REGISTER_FAIL);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const handleChangeName = (e: ITarget) => setName(e.target.value);
  const handleChangeEmail = (e: ITarget) => setEmail(e.target.value);
  const handleChangePassword = (e: ITarget) => setPassword(e.target.value);

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
