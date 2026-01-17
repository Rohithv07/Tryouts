import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Laptop } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import TerminalMode from './components/TerminalMode';

function App() {
  const [theme, setTheme] = useState('light');
  const [viewMode, setViewMode] = useState('standard'); // 'standard' or 'terminal'

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 transition-colors duration-300 bg-[var(--bg-color)]">
      <nav className="fixed top-0 w-full p-6 flex justify-end items-center z-50 pointer-events-none mix-blend-difference text-white">

        <div className="flex items-center gap-4 pointer-events-auto">
          {viewMode === 'standard' && (
            <button
              onClick={() => setViewMode('terminal')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Switch to Terminal Mode"
              title="Terminal Mode"
            >
              <Laptop size={20} />
            </button>
          )}

          <a
            href="/RohithV.pdf"
            download="Rohith_Vazhathody_Resume.pdf"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <Download size={16} />
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {viewMode === 'terminal' ? (
        <TerminalMode onClose={() => setViewMode('standard')} />
      ) : (
        <>
          <Hero />
          <Experience />
          <Highlights />
          <Skills />
          <Education />
          <Contact />
          <ChatBot />
        </>
      )}
    </div>
  );
}

export default App;
