import React, { Component } from 'react';
import Result from './Result';
import ButtonLayoutContainer from './ButtonLayoutContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Result />
		        <ButtonLayoutContainer />
       		</div>
		);
	}
}

export default App;
