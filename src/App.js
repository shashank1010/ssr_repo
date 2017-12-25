import React from 'react';

import NavLink from './NavLink'

const App = (props) => (
	<div>
		<h1>React Router Tutorial</h1>
		<ul  className="ui very relaxed horizontal list" role="nav">
			<li className="item"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
			<li className="item"><NavLink to="/about">About</NavLink></li>
		</ul>
		{props.children}
	</div>
);

export default App;