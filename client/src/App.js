import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './components/home';
import FAB from './components/common/FAB';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import News from './components/news/News';
import ScrollToTop from './components/layout/ScrollToTop';
import Page404 from './components/Page404';

const App = () => {
	const location = useLocation();

	return (
		<ScrollToTop>
			<FAB />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/gallery" exact component={Gallery} />
					<Route path="/news" exact component={News} />
					<Route component={Page404} />
				</Switch>
			</AnimatePresence>
		</ScrollToTop>
	);
}

export default App;
