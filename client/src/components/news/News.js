import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Layout from '../layout/Layout';

import { sectionVariants } from '../../animationVariants';

const News = () => {
    return (
        <Layout>
            <>
                <Helmet><title>News - Abia State Ministry of Education</title></Helmet>
            </>
            <motion.section
                className="news-page"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h4>News Updates</h4>
                <article id="2nd-december">
                    <p>The Commissioner for Education, Dr. Kanelechi Nwangwa has ettolled the Chancellor Gregory University, Uturu Prof. Gregory Ibe for his vision and passion for development of Education in the Country.</p>
                    <p>Dr. Nwangwa who stated this when he paid a working visit to the institution to see the academic activities and infrastructural facilities in the citadel of learning assured that his office will partner the institution.</p>
                    <p>The Education Commissioner further expressed happiness that the University has continued to develop human resources through technology, Agriculture, science and entrepreneurship as well as training and retraining of staff for effective service delivery.</p>
                    <p>Receiving the Commissioner and his team, the Chancellor Gregory University Uturu, Prof. Gregory Ibe who described the visit as apt, promised to synergize with the Ministry Of Education to enhance the Educational development of the State.</p>
                    <p>Prof. Ibe listed some courses offered in the institution and commended the Governor, Dr. Okezie Victor Ikpeazu for approving Abia State specialist and diagnostic Hospital Amachara for students of the University to do their housemanship.</p>
                    <p>In a vote of thanks, the vice Chancellor of the University Prof. Augustine Uwakwe described Education as the bed rock of civilization and Industrialization and appreciated Dr. Ikpeazu for appointing a renowed Educationist, Dr Nwangwa as Commissioner for Education in the State.</p>
                    <p>The Commissioner for Education Dr. Kanelechi Nwangwa had earlier joined via zoom meeting of the University on the annual international conference on Information Technology and Economic Development (ICITED) 2020.</p>
                    <p>Body of Special Advisers to the Governor on Education matters and Directors of the Ministry, accompanied Dr. Nwangwa on the visit.</p>
                </article>
                <article id="11th-november">
                   <p>The Honourable Commissioner for Education Dr. Kanelechi C.K. Nwangwa says the present Government is committed to building a functional technical department in all technical schools in the state to make them vocational schools.</p>
                   <p>Dr. K.C.K. Nwangwa made the assertion at the foundation laying ceremony of Amaise Community Secondary Technical school, Ukpakiri. He noted that there is need to give children vocational education in the present age so that they can have applicable and functional Education that will  help them stabilize.</p>
                   <p>The education boss used the medium to urge the community to embrace the opportunity to ensure that the facilities are secured and promised to renovate  the dilapidated buildings in the primary section . He also charged  parents and guardians to release their wards to start off 2020/2021 academic session in the school.</p>
                   <p>
                        Speaking earlier, the traditional ruler of the Autonomous Community, His Royal Majesty Eze Dr. Nwabiarije Eñeogwe appreciated  Governor Okezie Victor Ikpeazu Ph.D and the Commissioner for making their dream a reality.
                        Eze Nwabiarije Eneogwe expressed the community's profound gratitude to the State Governor Dr. Okezie Victor Ikpeazu for making them proud assuring that they will do their best to make the school productive.
                    </p>
                    <p>
                        In his remarks, one of the sons of the Royal Father, Prince Obinna Nwabiraije,  thanked  Governor Okezie Victor Ikpeazu Ph.D and the Honourable Commissioner for the historic event and pledged their  loyalty to the present Government.
                    </p>
                </article>
                <article id="2nd-september">
                    <h5>Public Service Announcemnt</h5>
                    <p>The State Government is by this announcement calling on Principals and Head Teachers of Public and Private Schools in exit classes in the State to present themselves for collection of samples for compulsory COVID-19 test of Principals and Head Teachers scheduled as follows:</p>
                    <p><strong>Aba Zone:</strong> Venue is Aba Town Hall.</p>
                    <p><strong>Umuahia Zone:</strong> Venue is Abia State Specialist Hospital, Amachara.</p>
                    <p><strong>Ohafia Zone</strong>: Venue is Ohafia LGA Headquarters.</p>
                    <p><strong>Date:</strong> Tuesday 4th and Wednesday 5th August, 2020.</p>
                    <br />
                    <p>
                        Kanelechi C.K. Nwangwa, FNIM<br />
                        Honourable Commissioner<br />
                        Ministry of Education.
                    </p>
                </article>
                <article id="1st-september">
                    <p>The new Secondary Education Management Board members has been inaugurated with a charge to contribute in restoring transparency and efficiency in the education system.</p>
                    <p>The Governor Okezie Victor Ikpeazu, Ph.D represented by the Honorable Commissioner for Education Kanelechi C.K. Nwangwa, Ph.D stated that the Board is saddled with responsibility of brings in back sanity to the Board.</p>
                    <p>He also urged them to ensure that teachers are posted to schools based on the requirement of the school and competency of the teacher, pointing out that the need to uphold standards and quality in Education cannot be over emphasized.</p>
                    <p>Earlier in his address, the Acting Education Secretary of SEMB and the Secretary of the Board Mr. Osuagwu Christopher thanked the Governor Dr. Okezie Victor Ikpeazu for appointing him as the Acting Education Secretary and for the provision of Personal Protective Equipments (PPE) to all Secondary Schools in the State and students of the exit classes. </p>
                    <p>In a vote of thanks, on behalf of the Members, the Board Chairman, Chief Eke Onyeforo appreciated the Governor for finding them worthy to serve in such capacity and promised to work assiduously to ensure that the Governor’s vision for Education is realized.</p>
                    <p>The members of the Board include:</p>
                    <ol>
                        <li>Chief Eke Onyeforo (Chairman)</li>
                        <li>Ogbonnaya Ememe, Ph.D (Member)</li>
                        <li>Sir Ishmael Olewe (Member)</li>
                        <li>Mrs. Pauline Anyanwu (Member)</li>
                        <li>Dr. Mrs. Nwakaego Uwadi (Member)</li>
                        <li>Dr. Sunny Orie (Member)</li>
                        <li>Mr. Osuagwu Christopher (Secretary)</li>
                    </ol>
                </article>
            </motion.section>
        </Layout>
    );
};

export default News;