import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyPortfolio.css';
import firebase from '../../config/constants.js';
  
// var React = require('react');
// var axios = require('axios');
import axios from 'axios';
// var UserList = require('../views/list-user');
// import UserList from '';

var UserListContainer = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    axios.get('/path/to/user-api').then(function(response) {
      _this.setState({users: response.data})
    });
  },

  render: function() {
    return (<UserList users={this.state.users} />);
  }
});

module.exports = UserListContainer;