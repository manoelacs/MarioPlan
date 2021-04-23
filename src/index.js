import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'; 

import { createStore, applyMiddleware, compose, } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, } from 'react-redux-firebase';

import firebaseConfig from './config/firebaseConfig';

const store = createStore( rootReducer,
  compose(  
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
  )
);
const rrfConfig = {
 // enableLogging: false,
  userProfile: 'users', // root that user profiles are written to
 // updateProfileOnLogin: false, // enable/disable updating of profile on login
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  //useFirestoreForStorageMeta: true // Metadata associated with storage file uploads goes to Firestore
}

const rrfProps = {  
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
)
