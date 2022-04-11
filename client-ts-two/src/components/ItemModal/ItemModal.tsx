import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAsync } from '../../store/items/addItem';
import { EventTarget } from '../../types/EventTarget';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import { AddItem } from './AddItem/AddItem';
import { FormForName } from './FormForName/FormForName';

export const ItemModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  
  const handleToggle = () => setModal(!modal); 
  const handleChangeName = (e: EventTarget) => setName(e.target.value);
  
  const dispatch = useDispatch();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      name,
    };
    dispatch(addItemAsync(newItem));
    handleToggle();
  };
  
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <AddItem onClick={handleToggle} />
      ) : (
        <h4 className='mb-3 ml-4'>Please log in to manage items</h4>
      )}

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <FormForName
            onChange={handleChangeName}
            onSubmit={handleOnSubmit}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};
