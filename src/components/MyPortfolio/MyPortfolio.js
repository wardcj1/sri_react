import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyPortfolio.css';
import firebase from '../../config/constants.js';
	
class MyPortfolio extends Component {
constructor() {
    super();
    this.state = {
      currentItem: '',
      ticker: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.ticker
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      ticker: ''
    });
  }

   componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  submitMyPortfolio () {
		console.log("Submit Button Clicked");
		this.props.history.push('/Suitability/Suitability');
  }

	render() {
		return(
		  <div className="picklist">
			<div className="row">
					<section className="col-md-10"></section>
					<section className="col-md-2 searchBar">
						<span className="glyphicon glyphicon-search"> Search			      
						</span>
				<form onSubmit={this.handleSubmit} className="form-inline">
                  <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" name="currentItem" placeholder="Company Name" onChange={this.handleChange} value={this.state.currentItem} />
                  <input type="text" class="form-control" name="ticker" placeholder="Ticker" onChange={this.handleChange} value={this.state.ticker} />
                  <button className="search-btn">Search</button>
                </form>
					</section>
			<hr />
			</div>
			<div className="row">
			        <section className="col-md-4 portfolio">
				        <center><h1>My Portfolio</h1></center>
				        <hr />
				        	<h3>user selected stocks go here</h3>
				        <hr />
				        <center>
				        <Link to="/Suitability" className="userstock-btn">Submit</Link>
				        </center>
			        </section>
			        <section className="col-md-1"></section>
			        <section className="col-md-7 watchlist">
			 	        <center><h1>Watchlist</h1></center>
			 	        <hr />
			 	        <div className="wrapper">
			                <span className="tile">
			                  {this.state.items.map((item) => {
			                    return (
			                      <span className="watchlist-contents" key={item.id}>
			                        <h3>{item.title}</h3>
			                        <p>{item.user}  
								<form onSubmit={this.handleSubmit} className="form-inline">
					                  <button className="btn btn-success" onClick={() => this.removeItem(item.id)}>Add</button>
          					    </form>
			                        </p>
			                      </span>
			                    )
			                  })}
			                </span>
              			</div>
			        </section>
			</div>
		  </div>
	);
  }
}

export default MyPortfolio;