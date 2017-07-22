import React from "react";
import { CardStack, Card } from 'react-cardstack';

//import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";

const iGoals = [{
    desc: 'Growth',
    type: 'To grow capital', 
    needs: ["Fund an early retirement", "Finance a child or grandchild's education"]
  }, {
    desc: 'Income',
    type: 'To increase current income',
    needs: ["Preserving Capital", "Supplemental Retirement Spending"]  
  }, {
    desc: 'Tax Savings',
    type: 'To reduce taxes',
    needs: ["Ideas that produce tax-free income", "Ideas that produce tax-deferred income (pay taxes at a later date)"]
  }
];

export class GoalList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			investorGoal: ''
		};
	}

	render() {
		return(
			<div>
				<CardStack
					height={300}
					width={500}
					background='#f8f8f8'
					hoverOffset={25}>

					<Card background='#efe22d'>
						<h1>{iGoals[0].desc}</h1>
						<ul>
			  	    		<li>{iGoals[0].type}</li>
			  	    		<ul>
			  	      			<li>{iGoals[0].needs[0]}</li>
			  	      			<li>{iGoals[0].needs[1]}</li>
			  	    		</ul>
			  	  		</ul> 
					</Card>

					<Card background='#f7b125'>
						<h1>{iGoals[1].desc}</h1>
						<ul>
			  	    		<li>{iGoals[1].type}</li>
			  	    		<ul>
			  	      			<li>{iGoals[1].needs[0]}</li>
			  	      			<li>{iGoals[1].needs[1]}</li>
			  	    		</ul>
			  	  		</ul>
			  	  	</Card>

					<Card background='#f25226'>
						<h1>{iGoals[2].desc}</h1>
						<ul>
			  	    		<li>{iGoals[2].type}</li>
			  	    		<ul>
			  	      			<li>{iGoals[2].needs[0]}</li>
			  	      			<li>{iGoals[2].needs[1]}</li>
			  	    		</ul>
			  	  		</ul> 					
			  	  	</Card>

				</CardStack>

			</div>
		)
	}
}

// Export the component back for use in other files
export default GoalList;