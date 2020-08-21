import React from 'react';
import { motion } from 'framer-motion';

const ImageModal = ({ selectedImage, setSelectedImage }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setSelectedImage(null);
        }
    };

    return (
        <motion.div 
            className="modal" 
            onClick={handleClick}
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
        >
            <motion.img 
                src={selectedImage} 
                alt="Abia State Ministry of Education Gallery" 
                className="modal-image"
            />
        </motion.div>
    );
};

export default ImageModal;