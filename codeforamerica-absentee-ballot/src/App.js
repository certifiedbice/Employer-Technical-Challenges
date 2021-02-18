// require('dotenv').config();
import React from 'react';

import RequestForm from './requestform/requestform';


import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Absentee Ballot Request Form</h1>
			</header>
			<main>
				<RequestForm/>
			</main>
		</div>
	);
}

export default App;
