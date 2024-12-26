import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Download, Award, Book, Briefcase, CodeSquare, GraduationCap, ScrollText } from 'lucide-react';

// Skills Section Component
const SkillsSection = ({ isDark }) => {
  const cardBgColor = isDark ? 'bg-gray-700' : 'bg-white';

  return (
    <section id="skills" className="py-12 px-4">
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

// Experience and Projects Component
const ExperienceAndProjects = ({ isDark, activeTab, setActiveTab }) => {
  const cardBgColor = isDark ? 'bg-gray-700' : 'bg-white';
  const sectionBgColor = isDark ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <section id="experience" className={`py-12 px-4 ${sectionBgColor}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'experience' ? 'bg-blue-600 text-white' : ''}`}
          >
            <Briefcase className="inline-block mr-2" size={20} />
            Experience
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'projects' ? 'bg-blue-600 text-white' : ''}`}
          >
            <CodeSquare className="inline-block mr-2" size={20} />
            Projects
          </button>
        </div>

        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
              <h4 className="text-xl font-semibold mb-2">Principal Mechanical Structural Engineer</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Array Technology • 2024 - Present</p>
              <ul className="space-y-2">
                <li>• Led development of AATLAS, revolutionizing solar tracker analysis</li>
                <li>• Automated analysis storage in Azure for ML integration</li>
                <li>• Reduced design cycle time from days to hours</li>
                <li>• Standardized analysis methods across global teams</li>
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
              <h4 className="text-xl font-semibold mb-2">Senior Mechanical Engineer</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Array Technology • 2020 - 2024</p>
              <ul className="space-y-2">
                <li>• Conducted dynamic simulation of solar tracker systems</li>
                <li>• Developed component-level load spectrums</li>
                <li>• Created comprehensive Python-based analysis tools</li>
                <li>• Implemented advanced fatigue analysis methods</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div id="projects" className="space-y-6">
            <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
              <h4 className="text-xl font-semibold mb-2">AATLAS Development</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Array Technology • 2023 - Present</p>
              <p className="mb-4">Led development of Array's Advanced Tracker Loads Analysis System, a revolutionary Python-based FEA software.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {['Python', 'FEA', 'Azure', 'ML'].map((tech) => (
                  <div key={tech} className="text-center p-3 bg-blue-100 dark:bg-blue-900 rounded">
                    <p className="font-bold">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = ({ isDark }) => {
  const cardBgColor = isDark ? 'bg-gray-700' : 'bg-white';
  const sectionBgColor = isDark ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <section id="education" className={`py-12 px-4 ${sectionBgColor}`}>
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-8">Education & Professional Credentials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2" size={20} />
              Education
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">Master of Science, Data Science</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Eastern University • Expected 2025</p>
              </li>
              <li>
                <p className="font-semibold">Machine Learning & AI Micro Boot Camp Certificate</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Arizona State University • 2023</p>
              </li>
              <li>
                <p className="font-semibold">Bachelor of Science, Mechanical Engineering</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">University of Texas at Tyler • 2000</p>
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg`}>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <ScrollText className="mr-2" size={20} />
              Professional Engineering Licenses
            </h4>
            <div className="mb-6">
              <h5 className="font-medium mb-2">Mechanical Discipline</h5>
              <ul className="space-y-2">
                <li>• Texas</li>
                <li>• Louisiana</li>
                <li>• Washington</li>
                <li>• Oregon</li>
                <li>• Alaska</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
      <nav className={`fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-sm border-b ${borderColor} ${baseBgColor}`}>
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
