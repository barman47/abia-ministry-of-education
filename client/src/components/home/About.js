import React from 'react';

import chairman from '../../img/chairman.jpg';

const About = () => (
    <section className="about">
        <div>
            <h4>About MOE</h4>
            <p>The Abia State Ministry of Education came into existence on the creation of Abia State in August, 1997. It is located at the Dr. Nnamdi Azikiwe Secretariat, Umuahia, Abia State. The Ministry provides policy Guidelines, Standards and programs for the facilitation and acquisition of knowledge, skills, values and beliefs as a fundamental human right for an all-inclusive education for development. This is paramount for the attainment of the Sustainable Development Goal (No. 4); the UNESCO Education 2030 Agenda, and one of the five Economic Pillars of the current Administration of Governor Okezie Victor Ikpeazu (PhD). The Ministry aligns with Federal Government policies on education.</p>
            <p>The cardinal objective of the Ministry is to, through the general goals of the State Education Sector, achieve the acquisition of appropriate skills, mental, physical and social abilities and competences to empower the individual to live in, and contribute positively to the society.</p>
        </div>
        <div>
            <img src={chairman} alt="" />
        </div>
    </section>
);

export default About;