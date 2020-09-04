import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import Layout from '../layout/Layout';

import { sectionVariants } from '../../animationVariants';

const About = () => (
    <Layout>
        <>
            <Helmet><title>About - Abia State Ministry of Education</title></Helmet>
        </>
        <motion.section 
            className="about-us"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h3>About Abia State Ministry of Education</h3>
            <section>
                <h4>Brief History</h4>
                <p>The Abia State Ministry of Education came into existence on the creation of Abia State in August, 1991. It is located at the Dr. Nnamdi Azikiwe Secretariat, Umuahia, Abia State. The Ministry provides policy Guidelines, Standards and programs for the facilitation and acquisition of knowledge, skills, values and beliefs as a fundamental human right for an all-inclusive education for development. This is paramount for the attainment of the Sustainable Development Goal (No. 4); the UNESCO Education 2030 Agenda, and one of the five Economic Pillars of the current Administration of Governor Okezie Victor Ikpeazu (PhD). The Ministry aligns with Federal Government policies on education.</p>
                <p>The cardinal objective of the Ministry is to, through the general goals of the State Education Sector, achieve the acquisition of appropriate skills, mental, physical and social abilities and competences to empower the individual to live in, and contribute positively to the society.</p>
            </section>
            <section>
                <h3>Mission and Vision</h3>
                <div>
                    <h5>Mission</h5>
                    <p>The mission is to ensure that all the diverse educational institutions in Abia State provide safe, conducive and stimulating learning environment that will facilitate and enhance the development of self-worth, discipline, motivation and excellence in learning and character, for students to develop skills with which to become independent and self-reliant adults who will succeed and contribute meaningfully to the socio-economic development of Abia State, Nigeria and the world at large.</p>
                </div>
                <div>
                    <h5>Vision</h5>
                    <p>The vision of the Ministry is to provide adequate capacity for engineering appropriate education policies, enforcement and inspection, in line with International Best Practices for the advancement of the Education Sector towards self, state, national and global development.</p>
                </div>
            </section>
            <section className="responsibilities">
                <h3>Duties and Responsibilities</h3>
                <ol>
                    <li>Education policy formulation, enforcement of standards, curriculum development and continuous Teacher Education;</li>
                    <li>Provision of physical structures, conducive and enabling environment and facilities for proper formal learning;</li>
                    <li>Management of Bursary, Scholarship delivery and Education Endowments Funds;</li>
                    <li>Supervision of Adult Education, Implementation of Non-formal and Extra-Moral studies, Entrepreneurship/Vocational training and Technical Education;</li>
                    <li>Implementation of all – inclusive education, and Special Education Services for Vulnerable groups;</li>
                    <li>Supervision of Secondary Education Management Board (SEMB), Scholarship Board, Library Board, Universal Basic Education Board (ASUBEB), and the State’s Tertiary Institutions;</li>
                    <li>Education Inspection and Quality Assurance Monitoring;</li>
                    <li>Education Databank, Research/Statistics and Data Management;</li>
                    <li>Examination Registration, Supervision and Assessment;</li>
                    <li>Textbooks development, Review/Supplies, and Curriculum Development and Monitoring;</li>
                    <li>Certificate Evaluation, Students’ Advisory Services, and assistance to private students overseas.</li>
                </ol>
                <div>
                    <h4>STRUCTURE/DEPARTMENTS OF THE MINISTRY</h4>
                    <p>The Honorable Commissioner is the Chief Executive and reports to the Executive Governor. The Permanent Secretary is the Chief Accounting Officer and reports to the Honorable Commissioner/ Chief Executive, while the Directors of the Departments report to the Permanent Secretary. </p>
                    <p>The Ministry is presently comprised of ten Departments:</p>
                    <ul>
                        <li>Administration Department</li>
                        <li>Finance Department</li>
                        <li>Planning, Research and Statistics Department</li>
                        <li>Inspectorate (Basic) Department</li>
                        <li>Inspectorate (Senior) Department</li>
                        <li>Curriculum Development and Education Planning Department</li>
                        <li>Science, Technical and Higher Education Department</li>
                        <li>Education Services Department</li>
                        <li>Scholarship Department</li>
                        <li>Examination Development Department</li>
                    </ul>
                    <p><strong>The Quality Assurance Unit</strong> is under the office of the Permanent Secretary.</p>
                </div>
            </section>
            <section>
                <h3>Departments</h3>
                <h4>THE EXAMINATION DEVELOPMENT DEPARTMENT</h4>
                <p>The Examination Development Department, which hitherto was a part of the Ministry known as the Examination Development Center (EDC) is now a Commission under the Ministry; though yet to be backed by legislation.</p>
                <div className="department">
                    <h4>PARASTATALS/AGENCIES UNDER THE MINISTRY</h4>
                    <p>The Ministry supervises the following Parastatals/Agencies:</p>
                    <ol>
                        <li>Abia State Universal Basic Education Board (ASUBEB) which operates the Universal Basic Education involving children of ages 6 – 15 through provision of child-friendly facilities, suitable learning environment, monitoring of teachers in this sphere for foundational educational empowerment, etc;</li>
                        <li>Secondary Education Management Board (SEMB) which is responsible for recruiting, deployment and supervision, training and retraining of teachers for Upper Basic Education Learning, School Monitoring, maintenance and general management of the 3 Education Zones of the State;</li>
                        <li>Abia State School Lunch Program, domiciled in the Office of Her Excellency, the Wife of the Governor;</li>
                        <li>Agency for Mass Literacy, Adult Formal and Non-formal Education;</li>
                        <li>Education for Employment (E4E) and other adult literacy learning centers;</li>
                        <li>Examination Development Commission (EDC);</li>
                        <li>Abia State Library Board;</li>
                        <li>Abia State Scholarship Board;</li>
                        <li>The Continuing Teachers Training Institute.</li>
                    </ol>
                </div>
                <div className="department">
                    <h4>TERTIARY EDUCATIONAL INSTITUTIONS IN THE STATE</h4>
                    <p>The Ministry plays oversight functions to:</p>
                    <ul>
                        <li>Abia State College of Education, Technical, set up to feed the School System with Teaching manpower, particularly in the vocational and technical areas, with the award of Nigerian Certificate of Education (NCE), and Bachelor’s Degree in Education (B.Ed).</li>
                        <li>Abia State Polytechnic Aba, set up to produce middle-level technical manpower for the industrial, technological and educational systems.</li>
                        <li>Abia State University, Uturu (ABSU), set up to produce high-level professional manpower in various fields for overall economic development.</li>
                        <li>Abia State College of Health Management and Technology, Aba, set up to produce middle-level Public Health Officers in various health and health-related fields under the Ministry of Health.</li>
                        <li>Other Education Stakeholders and service providers, including the private sector participants</li>
                    </ul>
                </div>
                <div className="department">
                    <h3>FUNCTIONS OF THE DEPARTMENTS</h3>
                    <h4>ADMINISTRATION DEPARTMENT</h4>
                    <p>The Administration Department is one of the service departments and has the traditional responsibilities of staff control/discipline, recruitment, training, record-keeping, preparation and forwarding of returns to the Office of the Head of Service, Bureau of Establishment and Pensions, Civil Service Commission, among other Government Establishments. The Department also oversees security matters, maintenance of vehicles, office buildings, office equipment, office accommodation, clean environment and day to day running of the affairs of the Ministry as the need arises. It is headed by a Director of Administration.</p>
                    <p>The Department is made up of units which include;</p>
                    <ol>
                        <li>The General Administration;</li>
                        <li>The General Duties;</li>
                        <li>The Secret Registry;</li>
                        <li>The Open Registry;</li>
                        <li>Records Unit;</li>
                        <li>The Transport Unit.</li>
                    </ol>
                </div>
                <div className="department">
                    <h4>FINANCE DEPARTMENT</h4>
                    <p>This Department superintends over all financial activities of the Ministry and is charged with the responsibilities of Co-ordinating, Organizing, and reporting of all financial activities of the Ministry to the Permanent Secretary who is the Accounting Officer of the Ministry, the Hon. Commissioner, the Accountant-General, Auditor-General, State Planning Commission, Abia State House of Assembly, etc. The Department has the following units;</p>
                    <ol>
                        <li>Director of Finance Office</li>
                        <li>Revenue Unit</li>
                        <li>Payroll Unit</li>
                        <li>Cash Office</li>
                        <li>Other Charges Unit</li>
                        <li>Internal Audit Unit</li>
                        <li>Reconciliation Unit</li>
                        <li>Adjustments Unit</li>
                    </ol>
                    <h4>THE PLANNING, RESEARCH AND STATISTICS DEPARTMENT(PRSD)</h4>
                    <p>The Planning, Research and Statistics Department (PRSD) is one of the mandatory Service Departments in all Ministries, Extra-Ministerial Departments, and Agencies (MDAs) of Government.</p>
                    <p>The functions include:</p>
                    <ol>
                        <li>Coordination and production of strategic, short-term, medium- term, and long- term Sector Development Plans,</li>
                        <li>Data collection and management for evidence – based Planning,</li>
                        <li>Coordination, Monitoring and Evaluation of the Capital Projects and Programs of the Ministry,</li>
                        <li>Development and Management of the Database and custodian of the Education Sector Databank;</li>
                        <li>Coordination of Aid/Donor intervention programs,</li>
                        <li>Secretariat to the Ministerial Tender’s Board;</li>
                        <li>Secretariat to Special Programs, Projects and Events;</li>
                        <li>Coordination and Production of periodic reports on the Ministry;</li>
                        <li>Coordination/conduct of researches on Education Policies and Programs;</li>
                        <li>Liaison with Planning Commission, Federal Ministry of Education, Development Partners, and other relevant bodies,</li>
                        <li>
                            School Plans and School boundary matters.
                            <br />
                            The PRSD has divisions as follow:
                            <ol>
                                <li>Planning division, with Budget, Tenders, SDGs, Program Monitoring and Evaluation Units.</li>
                                <li>Research and Statistics division, with Surveys/Research, Annual School Census/data collection, Education Management Information System (EMIS) as Units.</li>
                                <li>Computer Operations division, with Units as Data cleaning/Entry, Data processing/Publications, Processing/Issuance of   data request.</li>
                                <li>TECHNICAL/WORKS Division, with Units as School Plans, and School boundary matters.</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div className="department">
                    <h4>INSPECTORATE DEPARTMENT(BASIC)</h4>
                    <p>The Headquarters Section coordinates the activities of the Department. It has four Zonal Offices, each headed by an Inspector of Education: Aba South, Aba North, Umuahia, and Ohafia Zones. Under the Zones are Area Offices in the seventeen Local Government Areas of the State which are headed by Area Inspectors of Education.</p>
                    <p><strong>Key Functions:</strong></p>
                    <ul>
                        <li>Conduct of regular and routine inspections, including Spot Check of Schools.</li>
                        <li>Conduct of Site Inspection, done by Zonal and Area Offices.</li>
                        <li>Approval Inspections of Nursery, Primary and Addition of Primary Six.</li>
                        <li>Conduct of Subject Approval Inspections (BECE) of  Junior Secondary Schools.</li>
                        <li>Change of School names on Basic level.</li>
                        <li>Conduct of full management inspection in collaboration with Senior Inspectorate Department for control and moderation of standards in the Public and Private Schools in the State.</li>
                        <li>Revalidation of Schools at Basic level.</li>
                        <li>Co-ordination of registration of candidates / conduct of National Common Entrance Examination.</li>
                        <li>Provision of guidelines on placement of JSS 1 into Secondary Schools (taken by EDC) Examination Development Commission.</li>
                        <li>Preparation of School Calendar.</li>
                        <li>PTA matters.</li>
                        <li>Investigations at the Basic level.</li>
                        <li>Regular Monitoring of resumption of Schools.</li>
                        <li>Screening of President’s Teachers / Schools Excellent Award in Abia.</li>
                    </ul>
                </div>
                <div className="department">
                    <h4>INSPECTORATE DEPARTMENT (SENIOR)</h4>
                    <p>The Department takes charge of Public and Private Secondary School matters in the State.</p>
                    <p><strong>Functions:</strong></p>
                    <ol>
                        <li>Regular monitoring of resumption of schools;</li>
                        <li>Co-ordination of WAEC and NECO matters;</li>
                        <li>Issuance of clearance to schools for SSCE registration of candidates;</li>
                        <li>Conduct of reassessment inspection before SSCE subject approvals;</li>
                        <li>Conduct of subject approval inspection for SSCE;</li>
                        <li>Handles National Secondary School Mathematics Competition organized by Cowbell;</li>
                        <li>Handles Schools debate;</li>
                        <li>Conduct of subject approval inspection BECE for Junior Secondary Schools in some Local Government Areas;</li>
                        <li>Draws academic calendar and insures smooth running of same;</li>
                        <li>Carries out investigations at Senior Secondary School level as the need arises;</li>
                        <li>Conducts quality assurance visits to Schools;</li>
                        <li>Ensures that all Government approved levies are paid by schools;</li>
                        <li>Partners with FMOE to ensure quality evaluation of Schools.</li>
                    </ol>
                </div>
                <div className="department">
                    <h4>CURRICULUM DEPARTMENT</h4>
                    <p>This department came into existence in October, 2003, when the PRS department was split into two, which brought about professional development and true educational planning in the Ministry. There are three units, namely;</p>
                    <ol>
                        <li>Core Curriculum Development and Implementation.</li>
                        <li>Educational Research/Book Production/Review.</li>
                        <li>Educational Planning.</li>
                    </ol>
                    <p><strong>Functions include:</strong></p>
                    <ol>
                        <li>
                            <strong>Core Curriculum Development and Implementation</strong>
                            <ul>
                                <li>Production and distribution of Scheme of work.</li>
                                <li>Monitor construction and use of instructional materials in  entrepreneurial subjects, statutory records.</li>
                                <li>Organize competitions on festival of instructional materials/entrepreneurial subjects.</li>
                                <li>Liaise with SEMB/ASUBEB for competitions on festival of instructional materials.</li>
                                <li>Implementation of entrepreneurial/trade subjects.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Educational Research/Book Production/Review</strong>
                            <ul>
                                <li>Book production and review.</li>
                                <li>Educational broadcasting e.g. quiz, debates, competitions.</li>
                                <li>Educational Research/Resource Centre.</li>
                                <li>Prepare editorials/digest for the Ministry.</li>
                                <li>Conduct of Seminars and Workshops.</li>
                                <li>Monitor the Implementation and use of curriculum materials in schools.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Educational Planning</strong>
                            <ul>
                                <li>Co-ordinates, analyses and evaluates JCCE/NCE Matters.</li>
                                <li>Report on the implementation of Policies on Education from FMOE/NCE.</li>
                                <li>Prepare Education Sector Plan.</li>
                                <li>Establishment of read campaign clubs in schools and Education Road Maps.</li>
                                <li>Issues of “out of school children”.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="department">
                    <h4>EDUCATIONAL SERVICES DEPARTMENT</h4>
                    <p>The department has the following schedules which is organized into units according to their functions:</p>
                    <ol>
                        <li>Special Education/gifted children programmes</li>
                        <li>HIV/AIDS Programmes</li>
                        <li>Women Education</li>
                        <li>UNICEF Programmes</li>
                        <li>School sports</li>
                        <li>French Language Programmes</li>
                        <li>Igbo Language and Culture</li>
                        <li>Guidance and Counselling</li>
                        <li>Nomadic/Migrant Farmers Education</li>
                    </ol>
                    <h4>UNITS</h4>
                    <ol>
                        <li>Special Education Unit</li>
                        <li>HIV/AIDS Unit</li>
                        <li>General Service Unit</li>
                    </ol>
                    <ol>
                        <li><strong>Special Education</strong> Unit takes care of all Economic, Educational and Physical welfare of persons with special needs, including:
                            <ul>
                                <li>The visually impaired/albinism</li>
                                <li>The physically challenged/orthopedically impaired</li>
                                <li>The hearing impaired</li>
                                <li>The learning disabled</li>
                                <li>The economically challenged.</li>
                            </ul>
                            <h4>SCHOOLS/CENTRES FOR PERSONS WITH SPECIAL NEEDS IN THE STATE</h4>
                            <ul>
                                <li>Abia State Centre for visually impaired persons, Afaraukwu Umuahia</li>
                                <li>Abia State Centre for Hearing impaired children, Aba</li>
                                <li>Abia State Centre for Hearing impaired children, Umuahia</li>
                                <li>Special Education Centre, Uzuakoli</li>
                                <li>Imo State Special Secondary School for the deaf, Ofekata, Orodo.</li>
                            </ul>
                            <br />
                            <strong>INCLUSIVE SCHOOLS:</strong>Some approved public and private  schools serve as inclusive schools where the physically and visually impaired are also integrated. These Schools include:
                            <ul>
                                <li>Williams Memorial Secondary School II, Afugiri, Umuahia</li>
                                <li>Donego Hope International School, Umuahia (Private provider)</li>
                            </ul>
                            <br />
                            Admissions for persons with special needs into the special centres or the inclusive schools is the sole responsibility of the Ministry. Their education is government sponsored, free for tuition and feeding.
                        </li>
                        <li>
                            <strong>GENERAL SERVICE UNIT</strong>
                            <br />
                            The Unit handles:
                            <ul>
                                <li>UNICEF Programmes</li>
                                <li>Early child Education</li>
                                <li>Women/Girl Child Education</li>
                                <li>French Language Programmes</li>
                                <li>Igbo Language and Culture</li>
                                <li>Guidance and Counselling</li>
                            </ul>
                            <h4>SCIENCE, TECHNICAL AND HIGHER EDUCATION </h4>
                            This department handles Science Education, Technical Education, Higher Education in the state
                            <br />
                            <strong>SCIENCE EDUCATION:</strong> The department is responsible to ensure that science subjects are being taught well in all schools in the State. To achieve this, the department ensures the adequate employment as well as equitable distribution of science teachers in the schools.
                            <br />
                            The equipment of science laboratories in our schools is also part of the responsibilities of the department.
                            <br />
                            <strong>TECHNICAL EDUCATION:</strong> The department ensures that technical subjects are effectively taught in the schools, especially in the technical colleges, by ensuring the equitable distribution of technical teachers and equipment to all schools.
                            <br />
                            <strong>HIGHER EDUCATION:</strong> Private tertiary institutions as well as state-owned tertiary institutions are supervised directly by the department.
                            <br />
                            <strong>IN PRIVATE INSTITUTIONS:</strong> The department embarks on routine visits to schools to ensure that standards are being met. Inspection of private schools’ laboratories, inspection/sighting of certificates of science and technological teachers to ensure that qualified teachers teach the subjects.
                            <br />
                            <strong>CERTIFICATE EVALUATION:</strong> The department is responsible to evaluate the authenticity of certificates for admission into tertiary institutions.
                            <br />
                            <strong>ORGANIZATION OF SCIENCE QUIZZES, ETC:</strong> The department also organizes science quiz competitions to assess the level of success achieved in the teaching and learning of science subjects in the state compared to other states.
                            <br />
                            <h4>QUALITY ASSURANCE</h4>
                            <br />
                            <strong>Functions:</strong>
                            <ol>
                                <li>Train-the-Trainees workshop for Evaluators of Public and Private Schools.</li>
                                <li>Regulated visits to selected schools by Trained Evaluators from the Ministry of Education.</li>
                                <li>Follow-up visits to selected schools by Evaluators from the Ministry.</li>
                                <li> Liaison with Quality Assurance Department, Federal Ministry of Education, to keep the State abreast of the activities of the Department in the Federal Ministry of Education (FMOE).</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div className="department">
                    <h4>SCHOLARSHIP DEPARTMENT </h4>
                    <p>The Scholarship department came into being with the creation of Abia State in 1991. The department was in full function from 1991 to 1999. From 1991 to date, the Department only carries out the functions that the Federal Scholarship assigns to it, like distribution of Scholarship forms for both Federal and Overseas Awards; and Education Scholarship Lottery Scheme from 2000 to 2001. </p>
                    <p>The bill for establishing the Board was passed into law on 27th May, 2011, by the State House of Assembly.</p>
                    <p> The Abia State Scholarship Board was inaugurated on 9th September, 2019.</p>
                    <p><strong>Functions include:</strong></p>
                    <ol>
                        <li>Establishment and Management of Secondary, Undergraduate/Postgraduate and other schemes as the Department may deem necessary.</li>
                        <li>Grant Bursaries to deserving students of Abia State origin.</li>
                        <li>Contribute to Federal Government International and other externally sponsored schemes in the State.</li>
                    </ol>
                    The<strong>UNITS</strong> are Local Scholarship matters, Overseas Scholarship matters, and Federal Scholarship matters
                    <h4>SCHOLARSHIP/BURSARY SCHEMES: These include</h4>
                    <ol>
                        <li>Post-Secondary (Open) Scholarship Award</li>
                        <li>Overseas Scholarship</li>
                        <li>Bursary Award</li>
                        <li>Scholarship for the handicapped</li>
                        <li>Women in Science and Technology Award</li>
                        <li>Law School Award</li>
                        <li>Aviation Scholarship Award</li>
                        <li>Maritime Scholarship Award</li>
                        <li>Scholarship for Sportsmen and Women</li>
                        <li>Special Scholarship at the Governor’s discretion</li>
                    </ol>
                    <strong>SCHOLARSHIP</strong> Award Programmes from Federal and Assisting Agencies are handled when they are advertised : Commonwealth and Fellowship Plan (CWFP) Award, Bi-lateral Education Agreement (BEA) Awards, Agbami Scholarship Award, Nigeria Award Scholarship, COWBELL PEDIA.
                </div>
            </section>
        </motion.section>
    </Layout>
);

export default About;