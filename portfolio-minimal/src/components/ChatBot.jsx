import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I can help you navigate. Try asking for 'experience', 'skills', or 'contact'.", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);

        const lowerInput = input.toLowerCase();
        let botResponse = { text: "I'm not sure about that section. Try 'experience', 'skills', 'projects', or 'contact'.", sender: 'bot' };
        let sectionId = null;

        if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
            sectionId = 'experience-section';
            botResponse.text = "Scrolling to Experience...";
        } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
            sectionId = 'skills';
            botResponse.text = "Taking you to Skills...";
        } else if (lowerInput.includes('project') || lowerInput.includes('highlight') || lowerInput.includes('proud')) {
            sectionId = 'highlights';
            botResponse.text = "Showing what I'm most proud of...";
        } else if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('college')) {
            sectionId = 'education';
            botResponse.text = "Here is my Education info...";
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('touch')) {
            sectionId = 'contact';
            botResponse.text = "Let's get in touch!";
        }

        setTimeout(() => {
            setMessages(prev => [...prev, botResponse]);
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 500);

        setInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl w-80 mb-4 overflow-hidden flex flex-col"
                    >
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="font-semibold text-sm">Navigation Assistant</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="h-64 overflow-y-auto p-4 space-y-3 bg-white dark:bg-gray-900">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask to see sections..."
                                className="flex-1 bg-gray-50 dark:bg-gray-800 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <button
                                onClick={handleSend}
                                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </div>
    );
};

export default ChatBot;
