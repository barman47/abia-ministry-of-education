import React from 'react';
import { Link } from 'react-router-dom';

import news1 from '../../img/news1.jpg';
import seb1 from '../../img/seb1.jpeg';

const News = () => (
    <section className="news">
        <div>
            <h5>NEWS UPDATES</h5>
            <Link to="/news" className="button">See All</Link>
        </div>
        <div>
            <section>
                <img src={news1} alt="Abia State Ministry of Education" />
                <h6 className="truncate">The State Government is by this . . .</h6>
                <small>2nd September, 2020</small>
                <Link to="/news">Read Full Story</Link>
            </section>
            <section>
                <img src={seb1} alt="Abia State Ministry of Education" />
                <h6 className="truncate">The new Secondary Education . . .</h6>
                <small>1st, September, 2020</small>
                <Link to="/news">Read Full Story</Link>
            </section>
        </div>
    </section>
);

export default News;