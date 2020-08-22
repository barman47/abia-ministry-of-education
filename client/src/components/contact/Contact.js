import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';
import axios from 'axios';
import Validator from 'validator';
import { motion } from 'framer-motion';

import { sectionVariants } from '../../animationVariants';

import TextInput from '../input-groups/TextInput';
import TextArea from '../input-groups/TextArea';
import Layout from '../layout/Layout';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const isEmpty = (value) => (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
    

    const validateMessage = (data) => {
        let errors = {};
        data.name = !isEmpty(data.name) ?  data.name : '';
        data.email = !isEmpty(data.email) ?  data.email : '';
        data.message = !isEmpty(data.message) ?  data.message : '';

        if (Validator.isEmpty(data.name)) {
            errors.name = 'Your name is required';
        }

        if (Validator.isEmpty(data.email)) {
            errors.email = 'Email Address is required!';
        }
        if (!Validator.isEmail(data.email)) {
            errors.email = 'Invalid Email Address!';
        }

        if (Validator.isEmpty(data.message)) {
            errors.message = 'Your message is required!';
        }
    
        return {
            errors,
            isValid: isEmpty(errors)
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert('button clicked');
        const data = {
            name,
            email,
            message
        };

        const { errors, isValid } = validateMessage(data);

        if (!isValid) {
            M.toast({
                html: 'Invalid Data',
                classes: 'toast-invalid'
            });
            return setErrors(errors);
        }

        setErrors({});
        axios.post('/contact', data)
            .then(res => {
                console.log(res.data);
                M.toast({
                    html: 'Message Sent',
                    classes: 'toast-valid'
                });
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(err => {
                M.toast({
                    html: 'Sending Failed',
                    classes: 'toast-invalid'
                });
                console.error(err)
            });

    };

    return (
        <Layout>
            <>
                <Helmet><title>Contact - Abia State Ministry of Education</title></Helmet>
            </>
            <motion.section 
                className="contact"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"    
            >
                <h4>Contact Us</h4>
                <p>We are always available and accessible to attend your concerns and or suggestions. Just leave a message.</p>
                <div className="contact-content">
                    <form onSubmit={onSubmit} noValidate>
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
                            onChange={(e) => setMessage(e.target.value)}
                            errorMessage={errors.message}
                        />
                        <button className="button">Send</button>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3009901076316!2d7.509809714765755!3d5.522279295995781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042dcb03bfb03a5%3A0x7204b8678017321c!2sAbia%20State%20Secretariat!5e0!3m2!1sen!2sng!4v1597880249879!5m2!1sen!2sng" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Abia State Ministry of Education"></iframe>
                </div>
            </motion.section>
        </Layout>
    );
};

export default Contact;