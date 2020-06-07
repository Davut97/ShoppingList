import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import listReducer from './store/reducers/listReducer';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ReactReduxFirebaseProvider, firebaseReducer, getFirebase } from 'react-redux-firebase';
import authReducer from './store/reducers/authReducer';
import { firestoreReducer, getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebaseConfig from './config/firebaseConfig';
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  list: listReducer,
  auth: authReducer,
  firestore: firestoreReducer, // to sync with data base
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firebase, firebaseConfig)));
//enhancer using  compose
const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};
const rrfProps = {
  firebase,
  config: firebaseConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
