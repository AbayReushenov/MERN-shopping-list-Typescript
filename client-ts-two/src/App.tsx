import React, { useEffect } from 'react';
import { AppNavbar } from './components/AppNavbar/AppNavbar';
import { ShoppingList } from './components/ShoppingList/ShoppingList';
import { ItemModal } from './components/ItemModal/ItemModal';
import { Container } from 'reactstrap';

import { Provider, useDispatch } from 'react-redux';
import { fillAuthUserAsync } from './store/auth/fillAuthUser';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillAuthUserAsync());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className='App'>
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
