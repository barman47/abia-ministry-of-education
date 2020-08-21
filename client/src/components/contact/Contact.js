import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import TextInput from '../input-groups/TextInput';
import TextArea from '../input-groups/TextArea';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    return (
        <>
            <>
                <Helmet><title>Contact - Abia State Ministry of Education</title></Helmet>
            </>
            <section className="contact">
                <h4>Contact Us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum odit vero voluptas. Veritatis, adipisci iure! Quas nihil ipsam expedita eos doloremque minus quibusdam, fugit amet sequi a, nemo ad!</p>
                <div className="contact-content">
                    <form>
                        <TextInput 
                            label="* Name"
                            icon="mdi-alphabetical"
                            info="Enter your full name"
                            title="Name is required"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            errorMessage={errors.name}
                        />
                        <TextInput
                            type="email"
                            label="* Email"
                            icon="mdi-email-outline"
                            title="Email is required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            errorMessage={errors.email}
                        />
                        <TextArea
                            label="Enter your message"
                            icon="mdi-message-processing-outline"
                            title="Your message is required"
                            value={message}
                            onChange={(e) => setEmail(e.target.value)}
                            errorMessage={errors.message}
                        />
                        <button className="button">Send</button>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3009901076316!2d7.509809714765755!3d5.522279295995781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042dcb03bfb03a5%3A0x7204b8678017321c!2sAbia%20State%20Secretariat!5e0!3m2!1sen!2sng!4v1597880249879!5m2!1sen!2sng" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Abia State Ministry of Education"></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;