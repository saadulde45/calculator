import React, { Component } from 'react';
import Result from './Result';
import ButtonLayoutPanel from './ButtonLayoutPanel';
import calculate from '../core/calculate';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberString: '0',
			currentNumber: '0',
			operation: null
		};
	}

	handleClick = (buttonName) => {
		this.setState(calculate(this.state, buttonName));
	}

	render() {
		return (
			<div className="App">
				<Result
					result={this.state.numberString || '0'} current={this.state.currentNumber}
				/>
				<ButtonLayoutPanel
					clickHandler={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
