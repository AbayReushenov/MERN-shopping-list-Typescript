import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../store/auth/selectors';
import { getItemsAsync } from '../../store/items/getItems';
import { selectItems } from '../../store/items/selectors';
import { deleteItemAsync } from '../../store/items/deleteItem';
import { DeleteItem } from './DeleteItem/DeleteItem';

export const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteItemAsync({ _id: id }));
  };

  const items = useSelector(selectItems);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className='shopping-list'>
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames='fade'>
              <ListGroupItem>
                {isAuthenticated ? (
                  <DeleteItem id={_id} onDelete={handleDelete} />
                ) : null}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};
