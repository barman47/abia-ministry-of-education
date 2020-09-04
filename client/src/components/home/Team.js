import React from 'react';

import schoolarships from '../../img/schoolarships.jpeg';
import curriculum from '../../img/curriculum.jpeg';
import administration from '../../img/administration.jpeg';
import science from '../../img/science.jpeg';
import qa from '../../img/qa.jpeg';
import finance from '../../img/finance.jpeg';
import education from '../../img/education.jpeg';
import information from '../../img/information.jpeg';
import inspectorate from '../../img/inspectorate.jpeg';

const Team = () => (
    <section className="team">
        <h4>Heads and Directors</h4>
        <section>
            <div>
                <img src={administration} alt="Rev. Jane Omereonye" />
                <h6>Rev. Jane Omereonye</h6>
                <p>Director, Department of Administration</p>
            </div>
            <div>
                <img src={finance} alt="Mr. Okorie Ibuchim" />
                <h6>Mr. Okorie Ibuchim</h6>
                <p>Director of Finance Department</p>
            </div>
            <div>
                <img src={inspectorate} alt="Mrs. Rhoda Dimanochie" />
                <h6>Mrs. Rhoda Dimanochie</h6>
                <p>Communications Department</p>
            </div>
            <div>
                <img src={curriculum} alt="Mr. Kalu John" />
                <h6>Mr. Kalu John</h6>
                <p>Director, Curriculum Department</p>
            </div>
            <div>
                <img src={science} alt="Mr. Alozie Wogu" />
                <h6>Mr. Alozie Wogu</h6>
                <p>Director of Science, Technical and Higher Education</p>
            </div>
            <div>
                <img src={schoolarships} alt="Dr. Mrs Nnenna Anyanwu" />
                <h6>Dr. Mrs Nnenna Anyanwu</h6>
                <p>Director of Scholarships Department</p>
            </div>
            <div>
                <img src={qa} alt="Mrs. Justina Uwajimgba" />
                <h6>Mrs. Justina Uwajimgba</h6>
                <p>Director of Quality Assurance Unit</p>
            </div>
            <div>
                <img src={education} alt="Mrs. Adindu" />
                <h6>Mrs. Adindu</h6>
                <p>Director Education Services Department</p>
            </div>
            
            <div>
                <img src={information} alt="Mrs. Ugochi Ihediwa" />
                <h6>Mrs. Ugochi Ihediwa</h6>
                <p>Director Information Unit</p>
            </div>
        </section>
    </section>
);

export default Team;