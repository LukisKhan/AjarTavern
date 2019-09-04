import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  console.log(window.store.getState().session.currentUser);
  console.log(store.getState());
})

