import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import { sectionVariants } from '../../animationVariants';

import Banner from './Banner';
import News from './News';
import About from './About';
import Team from './Team';
import MissionAndVision from './MisionAndVision';
import GoogleMap from './GoogleMap';
import Layout from '../layout/Layout';

const Home = () => {
    return (
        <Layout>
            <>
                <Helmet><title>Abia State Ministry of Education</title></Helmet>
            </>
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Banner />
                <News />
                <About />
                <Team />
                <MissionAndVision />
                <GoogleMap />
            </motion.section>
        </Layout>
    );
};

export default Home;