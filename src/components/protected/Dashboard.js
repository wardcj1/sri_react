import React, { Component } from 'react'

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.submitRecommendation = this.submitRecommendation.bind(this);
	}


	submitRecommendation () {
		console.log("Recommendation Button Clicked");
		this.props.history.push('/Recommendation/Recommendation');
	}

	render() {
		return(
			<div>
				<h1>Client Dashboard Page</h1>	
				<button onClick={this.submitRecommendation} className="btn btn-primary">Go to Recommendation</button>
			</div>
	);
  }
}

export default Dashboard;