import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Download, Award, Book, Briefcase, CodeSquare, GraduationCap, ScrollText } from 'lucide-react';

// Skills Section Component
const SkillsSection = ({ isDark }) => {
  const cardBgColor = isDark ? 'bg-gray-700' : 'bg-white';

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
            <h4 className="text-lg font-semibold mb-4">Analysis & Simulation</h4>
            <ul className="space-y-2">
              <li>• Static/Dynamic Structure Analysis</li>
              <li>• Finite Element Analysis (FEA)</li>
              <li>• Modal Analysis</li>
              <li>• Fatigue Analysis</li>
              <li>• Multibody Dynamic Simulations</li>
            </ul>
          </div>
          <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
            <h4 className="text-lg font-semibold mb-4">Software Development</h4>
            <ul className="space-y-2">
              <li>• Python Algorithm Development</li>
              <li>• VB.NET Framework Development</li>
              <li>• AI/ML Model Integration</li>
              <li>• Automation Tools</li>
              <li>• Custom Analysis Software</li>
            </ul>
          </div>
          <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
            <h4 className="text-lg font-semibold mb-4">Technical Leadership</h4>
            <ul className="space-y-2">
              <li>• Team Mentorship</li>
              <li>• Process Optimization</li>
              <li>• Cross-functional Collaboration</li>
              <li>• Technical Documentation</li>
              <li>• Strategic Planning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const ProfessionalWebsite = () => {
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
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection isDark={isDark} />

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

export default ProfessionalWebsite;