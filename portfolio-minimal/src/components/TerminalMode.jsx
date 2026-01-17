import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const TerminalMode = ({ onClose }) => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to Rohith\'s Portfolio v2.0.0' },
        { type: 'output', content: 'Type /help to see available commands.' },
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
    }, [history]);

    const handleCommand = (cmd) => {
        const lowerCmd = cmd.trim().toLowerCase();
        let output = [];

        switch (lowerCmd) {
            case '/help':
                output = [
                    'Available commands:',
                    '  /experience  - View professional history',
                    '  /skill       - List technical skills',
                    '  /proud       - See most proud achievements',
                    '  /contact     - Get contact details',
                    '  clear        - Clear terminal',
                    '  exit         - Switch back to standard view'
                ];
                break;
            case '/experience':
                output = [
                    '--- WORK EXPERIENCE ---',
                    '',
                    'Senior Application Engineer @ Oracle (Apr 2024 - Present)',
                    '  * Developed Redwood Oracle Sales Cloud UI Migration Tool (~5k customers).',
                    '  * Architected Agentic AI tool UI (flows < 1 min).',
                    '  * POC for PSR team (frontend optimizations).',
                    '',
                    'Application Engineer @ Oracle (May 2022 - Apr 2024)',
                    '  * Resolved critical Go-Live blockers.',
                    '  * Mitigated P1 regression impacts (30% drop in SRs).',
                    '',
                    'Programmer Analyst @ Cognizant (Oct 2020 - Apr 2022)',
                    '  * Code maintenance & bug fixes.',
                    '  * QA & Production support.'
                ];
                break;
            case '/skill':
                output = [
                    '--- TECHNICAL SKILLS ---',
                    '',
                    'Languages:   Java, JavaScript, HTML/CSS, SQL',
                    'Frameworks:  Spring Boot, ADF, RESTful API',
                    'Tools:       Git, VS Code, JMeter, OJET'
                ];
                break;
            case '/proud':
                output = [
                    '--- MOST PROUD OF ---',
                    '',
                    '1. Migration Tool Architecture',
                    '   End-to-end migration logic for Next-Gen Sales Cloud UI.',
                    '',
                    '2. Team Enablement',
                    '   Trained 50+ engineers, reduced bug escalations by 50%.',
                    '',
                    '3. Dev Community',
                    '   1,200+ followers on Dev.to & Medium.'
                ];
                break;
            case '/contact':
                output = [
                    '--- CONTACT DETAILS ---',
                    '',
                    'Email:    rohithv63@gmail.com',
                    'GitHub:   github.com/Rohithv07',
                    'LinkedIn: linkedin.com/in/rohith-v-824820184',
                    'Dev.to:   dev.to/rohithv07',
                    'Medium:   medium.com/@rohithv63'
                ];
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'exit':
                onClose();
                return;
            default:
                output = [`Command not found: ${cmd}. Type /help for list.`];
        }

        setHistory(prev => [
            ...prev,
            { type: 'command', content: `user@portfolio:~$ ${cmd}` },
            ...output.map(line => ({ type: 'output', content: line }))
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-cover bg-center font-mono text-sm md:text-base"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Terminal Window */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-4 md:inset-20 bg-[#1a1b26] rounded-lg shadow-2xl flex flex-col border border-gray-700/50"
            >
                {/* Window Bar */}
                <div className="bg-[#1f2335] px-4 py-3 rounded-t-lg flex items-center gap-2 border-b border-gray-800">
                    <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80" title="Close" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <div className="flex-1 text-center text-gray-400 text-xs font-semibold">user — -zsh — 80x24</div>
                </div>

                {/* Content Area */}
                <div
                    className="flex-1 p-4 md:p-6 overflow-y-auto text-[#a9b1d6] selection:bg-[#3d59a1] selection:text-white"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((line, i) => (
                        <div key={i} className={`mb-1 ${line.type === 'command' ? 'text-[#7aa2f7] mt-4' : ''}`}>
                            {line.content}
                        </div>
                    ))}

                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-[#9ece6a]">user@portfolio:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-[#c0caf5] caret-[#c0caf5]"
                            autoFocus
                        />
                    </div>
                    <div ref={endRef} />
                </div>
            </motion.div>
        </div>
    );
};

export default TerminalMode;
