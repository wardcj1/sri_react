import React, { Component } from 'react';
import { Grid, Row, Thumbnail, Col } from "react-bootstrap";
// import { browserHistory } from "react-router";
// import thumbnail images
import './index.css';
import rLogo from './assets/images/Reuters.jpg';
import cLogo from './assets/images/cnbc.png';
import fLogo from './assets/images/Forbes.jpeg';
import sLogo from './assets/images/theStreet.png';
import moLogo from './assets/images/MorningStar-logo.jpg';
import maLogo from './assets/images/market-watch-logo.jpg';
import bLogo from './assets/images/Bloomberg.png';
import aLogo from './assets/images/Alpha.png';

// const divStyle = {
//   backgroundImage: 'url(' + './assets/images/palms.jpg' + ')',
// };
 
class Home extends Component {

  constructor(props) {
    super(props);
    this.getStarted = this.getStarted.bind(this);
  }  

  getStarted() {

      console.log("getting Started");
      this.props.history.push('/InvSpectrum/InvSpectrum');
    // trigger the rendering of the Goals component
  }

  render() {
    return (
      <div className="container homecontainer"> 

        <div>
          <Row className="col-md-12">
            <center><button onClick={this.getStarted} className="startbtn">Start</button></center>
          </Row>
          <Row className="col-md-12">
            <h2>Press Start to begin entering some information that will help us choose a portfolio.  <br /><br /> Or click on one of these links for market information.</h2>
          </Row>
        </div>

        <br></br>

        <div>
         <Row className="col-md-12">	
          <Grid>
            <Row>
              <Col xs={2} sm={2} md={3} lg={3}>
                <Thumbnail src={rLogo} alt="Reuters" href="http://www.reuters.com" target="_blank">
                  <p>Reuters</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>
                <Thumbnail src={cLogo} alt="CNBC" href="http://www.cnbc.com" target="_blank">
                  <p>CNBC</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>  
                <Thumbnail src={fLogo} alt="Forbes" href="https://www.forbes.com" target="_blank">
                  <p>Forbes</p>
                </Thumbnail>
              </Col>  
              <Col xs={2} sm={2} md={3} lg={3}>
              <Thumbnail src={sLogo} alt="theStreet" href="https://www.thestreet.com" target="_blank">
                <p>the Street, Inc</p>
              </Thumbnail>
              </Col>
            </Row>

            <Row>
              <Col xs={2} sm={2} md={3} lg={3}>
                <Thumbnail src={moLogo} alt='Morningstar' href='http://www.morningstar.com' target="_blank">
                  <p>Morningstar, Inc.</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>
                <Thumbnail src={maLogo} alt='MarketWatch' href='http://www.marketwatch.com' target="_blank">
                  <p>MarketWatch</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>
                <Thumbnail src={bLogo} alt='Bloomberg' href='https://www.bloomberg.com' target="_blank">
                  <p>Bloomberg L.P.</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>
                <Thumbnail src={aLogo} alt='Seeking Alpha' href='https://seekingalpha.com' target="_blank">
                  <p>Seeking Alpha</p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
         </Row> 
        </div>  
      </div>
    )
  }
};

// Export the component back for use in other files
export default Home;