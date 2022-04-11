import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ITarget } from '../../../../types/interfaces';

interface Props {
  onChangeEmail: (e: ITarget) => void;
  onChangePassword: (e: ITarget) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FormLogin: React.FC<Props> = ({
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => {
  return (
    <Form>
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className='mb-3'
          onChange={onChangeEmail}
        />

        <Label for='password'>Password</Label>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          className='mb-3'
          onChange={onChangePassword}
        />
        <Button
          color='dark'
          style={{ marginTop: '2rem' }}
          block
          onClick={onSubmit}
        >
          Login
        </Button>
      </FormGroup>
    </Form>
  );
};