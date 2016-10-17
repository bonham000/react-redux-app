import React from 'react'
import NavigationBar from './NavigationBar'
import FlashMessageList from './flash/FlashMessageList'

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<NavigationBar />
					<FlashMessageList />
					{this.props.children}
				</div>
			</div>
		);
	}
};

export default App;