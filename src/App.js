import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

 constructor() {
    super();
    this.state = {
        title: "Smart Robo Investments"
    };
 }

 componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const titleRef = rootRef.child('title');
    titleRef.on('value', snap => {
      this.setState({
        title: snap.val()
      });
    });
 }

  render() {
    return (
      <div className="App">
        <h1 className='jumbotron alert-danger'><strong>{this.state.title}</strong></h1>    
      </div>
    );
  }
}

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

export default App;
