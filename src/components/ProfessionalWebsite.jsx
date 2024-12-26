import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Download, Award, Book, Briefcase, CodeSquare, GraduationCap, ScrollText } from 'lucide-react';

// Skills Section Component
const SkillsSection = ({ isDark }) => { /* ... component code ... */ };

// Experience and Projects Component
const ExperienceAndProjects = ({ isDark, activeTab, setActiveTab }) => { /* ... component code ... */ };

// Education Section Component
const EducationSection = ({ isDark }) => { /* ... component code ... */ };

// Main Component
export const ProfessionalWebsite = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  const toggleTheme = () => setIsDark(!isDark);

  const baseBgColor = isDark ? 'bg-gray-900' : 'bg-white';
  const baseTextColor = isDark ? 'text-white' : 'text-gray-900';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${baseBgColor} ${baseTextColor}`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-sm border-b ${borderColor}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Russ Florey, P.E.</h1>
          <div className="flex items-center gap-6">
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Senior Principal Mechanical Structural Analysis Engineer</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Excelling in combining traditional engineering & modern computational methods in Heavy Equipment, Military, Oil & Gas, Aerospace, and Renewable Industries
          </p>
          <div className="flex gap-4">
            <a href="mailto:russflorey@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Mail size={20} />
              Contact Me
            </a>
            <a 
              href="/RussF_Res/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection isDark={isDark} />

      {/* Experience & Projects */}
      <ExperienceAndProjects 
        isDark={isDark}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Education & Certifications */}
      <EducationSection isDark={isDark} />

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Russ Florey. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Rflorey" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:russflorey@gmail.com" className="hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
