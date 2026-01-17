import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="min-h-screen flex flex-col justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary">
                    Rohith V
                </h1>
                <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
                    Senior Applications Engineer at Oracle.
                </p>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-6 animate-bounce text-secondary cursor-pointer hover:text-primary transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown size={24} />
            </motion.div>
        </Section>
    );
};

export default Hero;
