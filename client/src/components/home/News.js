import React from 'react';
import { Link } from 'react-router-dom';

import news1 from '../../img/news1.jpg';

const News = () => (
    <section className="news">
        <div>
            <h5>NEWS UPDATES</h5>
            <Link to="/news" className="button">See All</Link>
        </div>
        <div>
            <section>
                <img src={news1} alt="" />
                <h5>Lorem ipsum dolor sit amet.</h5>
                <small>16th August, 2020</small>
                <Link to="/">Read Full Story</Link>
            </section>
            <section>
                <img src={news1} alt="" />
                <h5>Lorem ipsum dolor sit amet.</h5>
                <small>16th August, 2020</small>
                <Link to="/">Read Full Story</Link>
            </section>
            <section>
                <img src={news1} alt="" />
                <h5>Lorem ipsum dolor sit amet.</h5>
                <small>16th August, 2020</small>
                <Link to="/">Read Full Story</Link>
            </section>
            <section>
                <img src={news1} alt="" />
                <h5>Lorem ipsum dolor sit amet.</h5>
                <small>16th August, 2020</small>
                <Link to="/">Read Full Story</Link>
            </section>
        </div>
    </section>
);

export default News;