import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: 'Apr 2024 – Present',
            role: 'Senior Application Engineer',
            company: 'Oracle',
            desc: [
                'Developed a specialized Redwood Oracle Sales Cloud UI Migration Tool, facilitating seamless migration for ~500 customers.',
                'Architected the end-to-end UI for an Agentic AI tool, reducing sales flow generation time to under one minute.',
                'Served as POC for the PSR team, directing frontend optimizations to ensure performance baselines.',
                'Collaborated to resolve critical bugs, increasing automation pass rates to 95%.'
            ]
        },
        {
            year: 'May 2022 – Apr 2024',
            role: 'Application Engineer',
            company: 'Oracle',
            desc: [
                'Resolved critical Go-Live blockers for enterprise customers, enhancing product stability.',
                'Mitigated P1 regression impacts by patching fleet segments, resulting in a 30% drop in weekend Service Requests.'
            ]
        },
        {
            year: 'Oct 2020 – Apr 2022',
            role: 'Programmer Analyst',
            company: 'Cognizant',
            desc: [
                'Performed code maintenance and bug fixes with the development team.',
                'Collaborated to ensure seamless application support across QA and production environments.'
            ]
        }
    ];

    return (
        <Section id="experience-section" className="relative">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-12">Experience</h2>

            {/* Vertical Timeline Line */}
            <div className="absolute left-[19px] md:left-[219px] top-24 bottom-10 w-0.5 bg-gray-200 dark:bg-white/10" />

            <div className="space-y-12">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group relative grid grid-cols-[40px_1fr] md:grid-cols-[200px_40px_1fr] gap-4 md:gap-0"
                    >
                        {/* Date (Desktop: Left, Mobile: Hidden/Inside) */}
                        <div className="hidden md:block text-right pr-10 pt-1 text-sm font-mono text-secondary">
                            {exp.year}
                        </div>

                        {/* Timeline Dot */}
                        <div className="relative flex justify-center pt-1.5 h-full">
                            {/* The Dot */}
                            <motion.div
                                className="w-3 h-3 rounded-full border-2 border-secondary bg-[var(--bg-color)] z-10 group-hover:border-accent group-hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)] transition-colors duration-300"
                                whileInView={{ scale: [0, 1.2, 1] }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                            />
                        </div>

                        {/* Content */}
                        <div className="pt-0.5 pb-8">
                            {/* Date (Mobile Only) */}
                            <div className="md:hidden text-xs font-mono text-secondary mb-1">
                                {exp.year}
                            </div>

                            <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors text-primary">
                                {exp.role}
                            </h3>
                            <div className="text-base mb-4 font-medium text-primary">
                                {exp.company}
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-secondary text-sm md:text-base leading-relaxed marker:text-gray-300 group-hover:marker:text-accent/50 transition-colors">
                                {exp.desc.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
