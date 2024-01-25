/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppProvider} from './src/provider/AppProvider';

import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGN1RrdbNByal0hTePkuK3vHTc5S1OW7o',
  authDomain: 'all-bistro.firebaseapp.com',
  projectId: 'all-bistro',
  storageBucket: 'all-bistro.appspot.com',
  messagingSenderId: '653871808954',
  appId: '1:653871808954:web:a8f42c9623e721fd9fdd83',
  measurementId: 'G-7GGNWME6ZT',
};

firebase.initializeApp(firebaseConfig);

function App(): React.JSX.Element {
  return <AppProvider />;
}

export default App;
