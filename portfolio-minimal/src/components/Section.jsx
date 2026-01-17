import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "", delay = 0, ...props }) => {
    return (
        <motion.section
            {...props}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`py-20 md:py-32 px-6 container mx-auto max-w-4xl ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
