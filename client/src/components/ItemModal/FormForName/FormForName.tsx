import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { EventTarget } from '../../../types/EventTarget';

interface Props {
  onChange: (e: EventTarget) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormForName: React.FC<Props> = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for='item'>Что добавить?</Label>
        <Input
          type='text'
          name='name'
          id='item'
          placeholder='Написать здесь'
          onChange={onChange}
        />
        <Button color='dark' style={{ marginTop: '2rem' }} block>
          Подтвердить
        </Button>
      </FormGroup>
    </Form>
  );
};
