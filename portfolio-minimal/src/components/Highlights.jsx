import React from 'react';
import Section from './Section';

const Highlights = () => {
    const highlights = [
        {
            title: "Migration Tool Architecture",
            desc: "Orchestrated end-to-end migration of custom business logic to the Next-Generation Sales Cloud UI for a top-tier customer. Delivered a transition that earned formal recognition from senior leadership.",
            tags: ["Architecture", "Migration", "Leadership"]
        },
        {
            title: "Team Enablement",
            desc: "Trained 50+ Support Engineers on the Next-Generation Oracle Sales Cloud UI, directly leading to a 50% reduction in bug escalations.",
            tags: ["Mentorship", "Training", "Impact"]
        },
        {
            title: "Dev Community",
            desc: "Built a community of 1,200+ followers by publishing detailed guides on coding challenges and data structures in Java on Dev.to and Medium.",
            tags: ["Writing", "Community", "Java"]
        }
    ];

    return (
        <Section id="highlights">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-12">Most Proud Of</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {highlights.map((item, i) => (
                    <div key={i} className="group p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg hover:border-gray-200 dark:hover:border-white/20 hover:shadow-sm transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors text-primary">{item.title}</h3>
                        </div>
                        <p className="text-secondary mb-6 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono text-secondary bg-gray-50 dark:bg-white/10 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Highlights;
