import React from 'react';
import Section from './Section';

const Education = () => {
    return (
        <Section id="education" className="py-10">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-8">Education</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 dark:border-white/20 pt-8">
                <div>
                    <h3 className="text-xl font-bold text-primary">Government Engineering College Thrissur</h3>
                    <p className="text-secondary">Bachelor of Technology in Computer Science and Engineering</p>
                </div>
                <div className="text-secondary font-mono mt-2 md:mt-0">
                    Aug 2016 – Jun 2020
                </div>
            </div>
        </Section>
    );
};

export default Education;
