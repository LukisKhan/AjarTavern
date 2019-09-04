import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
  configModal("signUp");
  configModal("logIn");
  window.store = store;
  console.log(window.store.getState().session.currentUser);
  console.log(store.getState());
})

function configModal(type) {
  var modal = document.getElementById(type+"Modal");
  var btn = document.getElementById(type+"Btn");
  var span = document.getElementsByClassName(type+"Close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
}


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }