import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC5NVKGsm6lXtN-KoLPPzhz2jlxFRiz8Hc",
    authDomain: "smartroboinvestments.firebaseapp.com",
    databaseURL: "https://smartroboinvestments.firebaseio.com",
    // projectId: "smartroboinvestments",
    storageBucket: "smartroboinvestments.appspot.com",
    // messagingSenderId: "78343951803"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root')
);

