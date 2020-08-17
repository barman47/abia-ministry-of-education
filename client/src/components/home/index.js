import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from './Banner';
import News from './News';
import About from './About';
import Team from './Team';
import MissionAndVision from './MisionAndVision';

const Home = () => {
    return (
        <>
            <>
                <Helmet><title>Abia State Ministry of Education</title></Helmet>
            </>
            <>
                <Banner />
                <News />
                <About />
                <Team />
                <MissionAndVision />
            </>
        </>
    );
};

export default Home;