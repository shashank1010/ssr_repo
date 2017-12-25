import React from 'react';

import NavLink from './NavLink'

const App = (props) => (
	<div>
		<h1>React Router Tutorial</h1>
		<ul role="nav">
			<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
		{props.children}
	</div>
);

export default App;