import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "", delay = 0, ...props }) => {
    return (
        <motion.section
            {...props}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`py-20 md:py-32 px-6 container mx-auto max-w-4xl ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
