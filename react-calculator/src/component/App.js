import React, { Component } from 'react';
import Result from './Result';
import ButtonLayoutPanel from './ButtonLayoutPanel';
import calculate from '../core/calculate';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
			nextNumber: null,
			operation: null,
		};
	}

	handleClick = (buttonName) => {
		console.log('click', buttonName);
		this.setState(calculate(this.state, buttonName));
	}

	render() {
		return (
			<div className="App">
				<Result>
					{this.state.nextNumber || this.state.total || '0'}
				</Result>
				<ButtonLayoutPanel
					clickHandler={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
