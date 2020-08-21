import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import logo from '../../img/logo.png';
import coatOfArms from '../../img/coat-of-arms.png';

const Header = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        const instances = M.Sidenav.init(elems, {});

        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(mobileLink => {
            mobileLink.addEventListener('click', () => { 
                // instances[0].close();
                setTimeout(() => instances[0].close(), 1000);
            });
        });
        // eslint-disable-next-line
    }, []);

    return (
        <section>
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" data-target="mobile-menu" className="sidenav-trigger menu-icon"><span className="mdi mdi-menu"></span></Link>
                    <div className="coat-of-arms">
                        <Link to="/"><img src={coatOfArms} alt="" /></Link>
                    </div>
                    <ul className="links hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>     
                        <li><Link to="/gallery">Gallery</Link></li>   
                    </ul>
                    <div className="logo-container">
                        <Link to="/" className="logo"><img src={logo} alt="" /></Link>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                <li><Link to="/" className="mobile-link">Home</Link></li>
                <li><Link to="about" className="mobile-link">About</Link></li>
                <li><Link to="/news" className="mobile-link">News</Link></li>
                <li><Link to="/contact" className="mobile-link">Contact</Link></li>     
                <li><Link to="/gallery" className="mobile-link">Gallery</Link></li>
            </ul>
        </section>
    );
};

export default Header;