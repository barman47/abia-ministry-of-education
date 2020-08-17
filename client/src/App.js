import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/home';
import Footer from './components/layout/Footer';

const App = () => {
	return (
		<Router>
			<Header />
			<Route path="/" exact component={Home} />
			<Footer />
		</Router>
	);
}

export default App;
