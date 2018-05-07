import React, { Component } from 'react';
import Result from './Result';
import ButtonLayoutPanel from './ButtonLayoutPanel';
import calculate from '../core/calculate';
import Constants from '../constants/constants';
import './App.scss';

class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = Constants.EMPTY_RESULT;
	}

	handleClick = (buttonName) => {
		this.setState(calculate(this.state, buttonName));
	}

	render() {
		return (
			<div className="container">
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
				<Result
					result={this.state.numberString || Constants.ZERO} current={this.state.currentNumber}
				/>
				<ButtonLayoutPanel
					clickHandler={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
