import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ITarget } from '../../../../types/interfaces';

interface Props {
  onChangeName: (e: ITarget) => void;
  onChangeEmail: (e: ITarget) => void;
  onChangePassword: (e: ITarget) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormSignup: React.FC<Props> = ({
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
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

        <Label for='password'>Password</Label>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          className='mb-3'
          onChange={onChangePassword}
        />
        <Button color='dark' style={{ marginTop: '2rem' }} block>
          Register
        </Button>
      </FormGroup>
    </Form>
  );
};
