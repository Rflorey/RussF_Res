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

// Experience and Projects Component
const ExperienceAndProjects = ({ isDark, activeTab, setActiveTab }) => {
  const cardBgColor = isDark ? 'bg-gray-700' : 'bg-white';
  const sectionBgColor = isDark ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <section className={`py-12 px-4 ${sectionBgColor}`}>
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