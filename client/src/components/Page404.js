import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../img/logo.png';

import { sectionVariants } from '../animationVariants';

const Page404 = () => {
    return (
        <>
            <><Helmet><title>Page Not Found - Abia State Ministry of Education</title></Helmet></>
            <motion.section 
                className="page-not-found"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <img src={logo} alt="Abia State Ministry of Education" />
                <h1>404 Error</h1>
                <span>Page not found</span>
                <h6>The page you are trying to look for is not here . . . </h6>
                <Link to="/" className="button"><span className="mdi mdi-arrow-left"></span>&nbsp;&nbsp;Take Me Back</Link>
            </motion.section>
        </>
    );
};

export default Page404;