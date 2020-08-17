import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Footer = () => (
    <footer>
        <section>
            <Link to="/"><img src={logo} alt="Abia State Ministry of Education Logo" /></Link>
            <p>Abia State Ministry of Education</p>
        </section>
        <section>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
            <div>
                <a href=""><span title="Like us on Facebook" className="mdi mdi-facebook mdi-24px"></span></a>
                <a href=""><span title="Follow us on Twitter" className="mdi mdi-twitter mdi-24px"></span></a>
                <a href=""><span title="Follow us on Instagram" className="mdi mdi-instagram mdi-24px"></span></a>
                <a href=""><span title="Subscribe to our channel on YouTube" className="mdi mdi-youtube mdi-24px"></span></a>
            </div>
        </section>
        <p className="copyright">&copy; {new Date().getFullYear()}, Abia State Ministry of Education - All Rights Reserved</p>
    </footer>
);

export default Footer;