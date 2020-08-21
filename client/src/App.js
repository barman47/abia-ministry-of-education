import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

const App = () => {
	return (
		<ScrollToTop>
			<Router>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				{/* <Route path="/news" exact component={About} /> */}
				<Route path="/contact" exact component={Contact} />
				<Route path="/gallery" exact component={Gallery} />
				<Footer />
			</Router>
		</ScrollToTop>
	);
}

export default App;
