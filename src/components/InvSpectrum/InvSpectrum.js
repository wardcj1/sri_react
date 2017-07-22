import React, { Component } from 'react';
import { Panel, Button, Col } from "react-bootstrap";
// import { browserHistory } from "react-router";

import {ListItems} from "./ListItems";
import {GoalList} from "./GoalList";

const goalTitle = (
  <h3>How do you feel about investments?</h3>
);
const typeTitle = (
  <h3>My Primary Investment need is:</h3>
);

class InvSpectrum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      investorType: '',
      investorGoal: '',
    }
    this.doCommit = this.doCommit.bind(this);
    console.log("hitting goals component");
  }

  handleChange(event) {
    //update selection within clicked panel
    //make sure hilite is on selected item
    this.setState({ investorType: this.state.investorType });
    this.setState({ investorGoal: this.state.investorGoal });
  }

  doCommit() {
    //if this.state.investorType && this.state.investorGoal {
      //console.log(this.state.investorType)
      //console.log(this.state.investorGoal)
      this.props.history.push('/MyPortfolio/MyPortfolio');
    //}
    // commit selections to storage upon SUBMIT
    // trigger next page
  }

  render() {
    return (
        <div>

          <h2 className="text-center">Please select the 2 options that most closely describe you and press Submit.</h2>
          <br />

          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5}>
            <Panel header={goalTitle}>
              <ListItems />
            </Panel>
          </Col>  

          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5} mdOffset={1}>
            <Panel header={typeTitle}>
              <GoalList />
            </Panel>
          </Col>  

          <Col xs={4} xsOffset={4} sm={4} smOffset={4} md={4} mdOffset={4}>
            <Button type="submit" className="btn btn-primary" bsSize="large" block onClick={this.doCommit}>
              Submit
            </Button>
          </Col>

        </div>  
    )
  }
};

// Export the component back for use in other files
export default InvSpectrum;