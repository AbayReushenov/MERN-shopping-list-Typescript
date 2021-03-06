import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAsync } from '../../store/items/addItem';
import { EventTarget } from '../../types/EventTarget';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import { AddItem } from './AddItem/AddItem';
import { FormForName } from './FormForName/FormForName';

export const ItemModal = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleToggle = () => setModal(!modal);
  const handleChangeName = (e: EventTarget) => setName(e.target.value);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newName = {
      name,
    };
    dispatch(addItemAsync(newName));
    handleToggle();
  };

  return (
    <div>
      {isAuthenticated ? (
        <AddItem onClick={handleToggle} />
      ) : (
        <h4 className='mb-3 ml-4'>
          Привет Гость! Можно добавить и удалить, но только после регистрации
        </h4>
      )}

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Добавить в список</ModalHeader>
        <ModalBody>
          <FormForName onChange={handleChangeName} onSubmit={handleOnSubmit} />
        </ModalBody>
      </Modal>
    </div>
  );
};
