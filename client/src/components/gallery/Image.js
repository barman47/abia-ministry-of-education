import React from 'react';
import { motion } from 'framer-motion';

const Image = ({ image, setSelectedImage }) => (
    <motion.div
        onClick={() => setSelectedImage(image)}
        whileHover={{ opacity: 1 }}
    >
        <motion.img 
            src={image} alt="Abia State Ministry of Education" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        />
    </motion.div>
);

export default Image