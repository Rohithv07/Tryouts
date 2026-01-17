import React from 'react';
import Section from './Section';

const Experience = () => {
    const experiences = [
        {
            year: 'Apr 2024 – Present',
            role: 'Senior Application Engineer',
            company: 'Oracle',
            desc: [
                'Developed a specialized Redwood Oracle Sales Cloud UI Migration Tool, facilitating seamless migration for ~5,000 customers.',
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
        <Section id="experience-section" className="flex flex-col gap-12">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Experience</h2>

            <div className="space-y-12">
                {experiences.map((exp, i) => (
                    <div key={i} className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 transition-colors duration-300">
                        <div className="text-secondary font-mono text-sm pt-1">{exp.year}</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors">{exp.role}</h3>
                            <div className="text-base mb-4 font-medium">{exp.company}</div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-secondary text-base leading-relaxed marker:text-gray-300">
                                {exp.desc.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
