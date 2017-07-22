import React, { Component } from 'react';
// import './Recommendation.css';
import './d3/css/d3-bar-chart.css';
// import './d3/d3.min.js';
// import './d3/d3-bar-chart.js';

class Recommendation extends Component {
	render() {
		return (
<div>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="">
        <h1>Smart Robo Investments</h1>
        <p>Flexible asset allocation tailored to your individual investment objective and guided by market data.</p>
      </div>
    </div>
    <div class="col-md-1"></div>
</div>

<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <h1>Investment Objective: Capital Preservation</h1></div>
    <div class="col-md-1"></div>
</div>

<div class="row">
    <div></div>
</div>

<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div id="barchart"></div>
    </div>
    <div class="col-md-1"></div>
</div>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-1">
      <button id="reitPlus" class="btn btn-default" type="button">REIT +</button>
    </div>
    <div class="col-md-1">
      <button id="bondsPlus" class="btn btn-default" type="button">Bonds + </button>
    </div>
    <div class="col-md-1">
      <button id="fundPlus" class="btn btn-default" type="button">Smart Fund + </button>
    </div>
    <div class="col-md-1">
      <button id="selfPlus" class="btn btn-default" type="button">My Stocks + </button>
    </div>
    <div class="col-md-6"></div>
</div>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-1">
      <button id="reitMinus" class="btn btn-default" type="button">REIT - </button>
    </div>
    <div class="col-md-1">
      <button id="bondsMinus" class="btn btn-default" type="button">Bonds - </button>
    </div>
    <div class="col-md-1">
      <button id="fundMinus" class="btn btn-default" type="button">Smart Fund - </button>
    </div>
    <div class="col-md-1">
      <button id="selfMinus" class="btn btn-default" type="button">My Stocks - </button>
    </div>
    <div class="col-md-6"></div>
</div>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-5">
      <p>
        <br/>With capital preservation as your investment objective, most of your assets should be in cash, bonds, and stocks managed by Smart Robo Investments. You can redistribute these assets by using the buttons above to increase or decrease percentages invested across five classes of assets. Adding to an asset class will decrease cash. Subtracting from an asset class will increase cash.</p>
    </div>
    <div class="col-md-5"></div>
</div>
</div>
		);	
	}
}

export default Recommendation;	