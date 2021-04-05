import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'; 

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, firestoreReducer } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, firebaseReducer } from 'react-redux-firebase';

import firebaseConfig from './config/firebaseConfig';

const store = createStore( rootReducer,
  compose(  
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
)
