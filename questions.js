import React, { Component } from 'react';
import React-DOM from 'react-dom';
import './questions.cc';
import logo from './logo.svg'

class Questions extends Component {
	
	function enlarge(identification) {
		var iden = document.getElementById(identification);
		iden.style.width = "400px";
	}

	render() {
		return( 
			<div className="body">
				<div className="header">
				  <img src={logo} className="logo" alt="logo" />
				  <h1> Tryst </h1>
				</div>
				<p className="vertical container">
					Pick up to 4 areas of interests!
				</p>
				<div className="buttons">
					<button id='volunteering' onClick='enlarge("volunteering")'> Volunteering </button>
				</div>
			</div> 

			 )
	}
}
