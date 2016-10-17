import React from 'react';
import { Link } from 'react-router'

export default () => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link href="/" className="navbar-brand">Redux App</Link>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link href="/signup">Sign Up</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}