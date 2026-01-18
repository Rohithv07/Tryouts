import React from 'react';
import Section from './Section';

const Skills = () => {
    const skillCategories = [
        { label: "Languages", items: "Java, JavaScript, HTML/CSS, SQL" },
        { label: "Frameworks", items: "Spring Boot, ADF, RESTful API" },
        { label: "Tools", items: "Git, VS Code, JMeter, OJET" }
    ];

    return (
        <Section id="skills" className="py-10">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 dark:border-white/20 pt-8">
                {skillCategories.map((cat, i) => (
                    <div key={i}>
                        <h3 className="text-lg font-semibold mb-2 text-primary">{cat.label}</h3>
                        <p className="text-secondary leading-relaxed">
                            {cat.items}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
