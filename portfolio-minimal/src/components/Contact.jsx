import React from 'react';
import Section from './Section';
import { Mail, Github, Linkedin, BookOpen, PenTool, Phone } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        {
            label: "Email",
            text: "rohithv63@gmail.com",
            icon: <Mail size={20} />,
            url: "mailto:rohithv63@gmail.com"
        },
        {
            label: "Phone",
            text: "+91 8078171696",
            icon: <Phone size={20} />,
            url: "tel:8078171696"
        },
        {
            label: "GitHub",
            text: "GitHub",
            icon: <Github size={20} />,
            url: "https://github.com/Rohithv07"
        },
        {
            label: "LinkedIn",
            text: "LinkedIn",
            icon: <Linkedin size={20} />,
            url: "https://www.linkedin.com/in/rohith-v-824820184/"
        },
        {
            label: "Dev.to",
            text: "Dev.to",
            icon: <BookOpen size={20} />, // Using BookOpen as generic icon for Dev.to
            url: "https://dev.to/rohithv07"
        },
        {
            label: "Medium",
            text: "Medium",
            icon: <PenTool size={20} />, // Using PenTool for Medium
            url: "https://medium.com/@rohithv63"
        }
    ];

    return (
        <Section id="contact" className="py-20 md:py-32">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary">Let's connect.</h2>

            <div className="flex flex-wrap gap-4 items-center">
                {socialLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-secondary hover:text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                        title={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                        <span className="font-medium text-sm md:text-base">{link.text}</span>
                    </a>
                ))}
            </div>

            <footer className="mt-20 text-sm text-gray-400">
                © 2026 Rohith V.
            </footer>
        </Section>
    );
};

export default Contact;
