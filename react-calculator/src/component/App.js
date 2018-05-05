import React, { Component } from 'react';
import Result from './Result';
import ButtonLayoutPanel from './ButtonLayoutPanel';

class App extends Component {

	handleClick = (buttonName) => {
		console.log('click', buttonName);
	}

	render() {
		return (
			<div className="App">
				<Result />
				<ButtonLayoutPanel 
					clickHandler={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
