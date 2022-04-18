import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { EventTarget } from '../../../../types/EventTarget';

interface Props {
  onChangeName: (e: EventTarget) => void;
  onChangeEmail: (e: EventTarget) => void;
  onChangePassword: (e: EventTarget) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormRegister: React.FC<Props> = ({
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for='name'>Имя</Label>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Имя'
          className='mb-3'
          onChange={onChangeName}
        />

        <Label for='email'>Email</Label>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className='mb-3'
          onChange={onChangeEmail}
        />

        <Label for='password'>Пароль</Label>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Пароль'
          className='mb-3'
          onChange={onChangePassword}
        />
        <Button color='dark' style={{ marginTop: '2rem' }} block>
          Зарегистрироваться
        </Button>
      </FormGroup>
    </Form>
  );
};
