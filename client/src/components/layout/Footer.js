import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Footer = () => (
    <footer>
        <section>
            <Link to="/"><img src={logo} alt="Abia State Ministry of Education Logo" /></Link>
            <h5>Abia State Ministry of Education</h5>
            <p><span className="mdi mdi-map-marker"></span>&nbsp;&nbsp;2nd Building, 3rd Floor, New Secretariat. Ogurube Layout, Umuahia.</p>
            <p><a href="tel:08012345678"><span className="mdi mdi-email-outline"></span>&nbsp;&nbsp;08012345678</a></p>
            <p><a href="mailto:contact@abiaministryofeducation.org"><span className="mdi mdi-email-outline"></span>&nbsp;&nbsp;contact@abiaministryofeducation.org</a></p>
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
                <a href="#!"><span title="Like us on Facebook" className="mdi mdi-facebook mdi-24px"></span></a>
                <a href="#!"><span title="Follow us on Twitter" className="mdi mdi-twitter mdi-24px"></span></a>
                <a href="#!"><span title="Follow us on Instagram" className="mdi mdi-instagram mdi-24px"></span></a>
                <a href="#!"><span title="Subscribe to our channel on YouTube" className="mdi mdi-youtube mdi-24px"></span></a>
            </div>
        </section>
        <p className="copyright">&copy; {new Date().getFullYear()}, Abia State Ministry of Education - All Rights Reserved</p>
    </footer>
);

export default Footer;