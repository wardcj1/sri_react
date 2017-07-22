import React from "react";
import { CardStack, Card } from 'react-cardstack';

//import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";

const iTypes = [{
  desc: 'Self Directed',
  summary: 'Stronger than my peers, but I\'m here to see what you offer.  I\'m skeptical about "professionals".' 
  }, {
  desc: 'Validator',
  summary: "I feel good about what I'm doing and want to maintain control.  I would like someone on occasion to validate my holdings."
  }, {
  desc: 'Delegator',
  summary: "I don't have the time, or possibly the confidence, to manage everything by myself.  I would prefer to delegate some responsibilities to professionals."
  }
];

export class ListItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			investorType: ''
		};
	}

	buildOptions() {
		
	}

	render() {
		return(
			<div>
				<CardStack
					height={300}
					width={500}
					background='#f8f8f8'
					hoverOffset={25}>

					<Card background='#30b8f2'>
						<h1>{iTypes[0].desc}</h1>
						<p>{iTypes[0].summary}</p>
					</Card>

					<Card background='#6ded75'>
						<h1>{iTypes[1].desc}</h1>
						<p>{iTypes[1].summary}</p>
					</Card>

					<Card background='#7c9ed6'>
						<h1>{iTypes[2].desc}</h1>
						<p>{iTypes[2].summary}</p>
					</Card>

				</CardStack>
			</div>
		)
	}
}

// Export the component back for use in other files
export default ListItems;

