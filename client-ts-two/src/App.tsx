import React, { useEffect } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider, useDispatch } from 'react-redux';
import { fillUserAuthintificatedAsync } from './store/auth/fillUserAuthintificated';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fillUserAuthintificatedAsync());
  }, [dispatch]);
  
  return (
    <Provider store={store}>
      <div className="App">
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