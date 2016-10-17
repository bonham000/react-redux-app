import React from 'react'
import NavigationBar from './NavigationBar'


class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<NavigationBar />
					{this.props.children}
				</div>
			</div>
		);
	}
};

export default App;