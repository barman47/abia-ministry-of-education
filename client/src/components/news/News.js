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
                <article>
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
                <article>
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