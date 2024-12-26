import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, Github, Linkedin, Mail, Download, Award, Book, Briefcase, Code2, GraduationCap, ScrollText } from 'lucide-react';

const ProfessionalWebsite = () => {
  const handleDownloadResume = () => {
    window.location.href = '/Russ_Florey_Resume.pdf';
  };

  const handleNavigation = (path) => {
    window.location.href = `/${path}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Russ Florey, P.E.</h1>
        <div className="flex justify-center gap-4 mb-8">
          <button 
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            onClick={() => window.open('mailto:russflorey@gmail.com')}
          >
            <Mail className="h-4 w-4" /> Contact Me
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            onClick={handleDownloadResume}
          >
            <Download className="h-4 w-4" /> Download Resume
          </button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Analysis & Simulation</h3>
            <ul className="space-y-2">
              <li>• Static/Dynamic Structure Analysis</li>
              <li>• Finite Element Analysis (FEA)</li>
              <li>• Modal Analysis</li>
              <li>• Fatigue Analysis</li>
              <li>• Multibody Dynamic Simulations</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Software Development</h3>
            <ul className="space-y-2">
              <li>• Python Algorithm Development</li>
              <li>• VB.NET Framework Development</li>
              <li>• AI/ML Model Integration</li>
              <li>• Automation Tools</li>
              <li>• Custom Analysis Software</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Technical Leadership</h3>
            <ul className="space-y-2">
              <li>• Team Mentorship</li>
              <li>• Process Optimization</li>
              <li>• Cross-functional Collaboration</li>
              <li>• Technical Documentation</li>
              <li>• Strategic Planning</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-4 mb-8">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => handleNavigation('experience')}
        >
          <GraduationCap className="h-4 w-4" /> Experience
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => handleNavigation('projects')}
        >
          <Code2 className="h-4 w-4" /> Projects
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => handleNavigation('education')}
        >
          <Book className="h-4 w-4" /> Education
        </button>
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Principal Mechanical Structural Engineer</h3>
        <p className="text-gray-600 mb-4">Array Technology • 2024 - Present</p>
        <ul className="space-y-2">
          <li>• Led development of AATLAS, revolutionizing solar tracker analysis</li>
          <li>• Automated analysis storage in Azure for ML integration</li>
          <li>• Reduced design cycle time from days to hours</li>
        </ul>
      </section>

      <footer className="flex justify-center gap-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => window.open('https://www.linkedin.com/in/russflorey/', '_blank')}
        >
          <Linkedin className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => window.open('https://github.com/Rflorey', '_blank')}
        >
          <Github className="h-5 w-5" />
        </button>
      </footer>
    </div>
  );
};

export default ProfessionalWebsite;