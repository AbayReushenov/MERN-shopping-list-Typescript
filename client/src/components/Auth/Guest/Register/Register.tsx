import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, NavLink, Alert } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { EventTarget } from '../../../../types/EventTarget';
import { register } from '../../../../store/auth/register';
import { FormRegister } from './FormRegister';
import { useMsgModal } from '../hooks/useMsgModal';
import { E_ERROR } from '../../../../types/enum';

export const Register: React.FC = () => {
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
    dispatch(register(user));
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href='#'>
        Регистрация
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Регистрация</ModalHeader>
        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}
          <FormRegister
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
