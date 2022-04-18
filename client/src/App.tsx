import React, { useEffect } from 'react';
import { AppNavbar } from './components/AppNavbar/AppNavbar';
import { ShoppingList } from './components/ShoppingList/ShoppingList';
import { ItemModal } from './components/ItemModal/ItemModal';
import { Container } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { loadUser } from './store/auth/loadUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className='App'>
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </div>
  );
};
