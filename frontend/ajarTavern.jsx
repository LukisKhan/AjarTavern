import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import { createNewUser, login, logout } from './actions/session_action';
//

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

//testing
  window.store = store;
  window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  let modal = document.getElementById("signUpModal");
  if (modal) {
    configModal("signUp");
    configModal("logIn");
  }
//testing
})

function configModal(type) {
  let modal = document.getElementById(type+"Modal");
  let btn = document.getElementById(type+"Btn");
  let span = document.getElementsByClassName(type+"Close")[0];
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