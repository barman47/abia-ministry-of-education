import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner">
            <div>
                <header>
                    <h3>Abia State Ministry of Education</h3>
                    <h6>The executive arm of the Abia state government, responsible for providing access to, and improving the quality of basic education.</h6>
                    <Link to="/about" className="button">Read More</Link>
                </header>
            </div>
            <div>
                
            </div>
        </section>
    );
    // return (
    //     <section className="banner">
    //         <div>
    //             <header>
    //                 <h3>Abia State Ministry of Education</h3>
    //                 <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum sint esse atque nobis illo necessitatibus asperiores libero eveniet officiis?</h6>
    //                 <Link to="/about" className="button">Read More</Link>
    //             </header>
    //         </div>
    //     </section>
    // );
};

export default Banner;