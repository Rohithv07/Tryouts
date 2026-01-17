import React from 'react';
import Section from './Section';

const Projects = () => {
    const projects = [
        {
            title: "Partner Center API",
            desc: "Microservices architecture for Oracle's Partner Center. Built with Spring Boot to handle high-volume interactions and reduce latency by 40%.",
            tags: ["Java", "Spring Boot", "Kafka", "Redis"],
            url: "#"
        },
        {
            title: "Sales Cloud Migration",
            desc: "Orchestrated end-to-end migration of custom business logic to the Next-Gen Sales Cloud UI, ensuring a seamless transition for top-tier customers.",
            tags: ["Cloud", "Migration", "Enterprise"],
            url: "#"
        },
        {
            title: "Tech Community",
            desc: "Built a community of 1,200+ followers on Dev.to by publishing guides on coding challenges and data structures in Java.",
            tags: ["Writing", "Education", "Java"],
            url: "https://dev.to/rohithvazhathody"
        }
    ];

    return (
        <Section>
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-12">Selected Work & Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, i) => (
                    <div key={i} className="group p-6 bg-white border border-gray-100 rounded-lg hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">↗</span>
                        </div>
                        <p className="text-secondary mb-6 leading-relaxed text-sm">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono text-secondary bg-gray-50 px-2 py-1 rounded">
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

export default Projects;
