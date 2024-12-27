import React from 'react';
import { Github, Linkedin, Mail, GraduationCap, Code2, Award, Book } from 'lucide-react';

const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Russ Florey, P.E.</h1>
            <p className="text-xl mb-8">Principal Mechanical Structural Engineer</p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:russflorey@gmail.com" 
                className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
              >
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Analysis & Simulation</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Static/Dynamic Structure Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Finite Element Analysis (FEA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Modal Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Fatigue Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Multibody Dynamic Simulations
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4">
              <Code2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Software Development</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Python Algorithm Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                VB.NET Framework Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                AI/ML Model Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Automation Tools
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Custom Analysis Software
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Technical Leadership</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Team Mentorship
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Process Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Cross-functional Collaboration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Technical Documentation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Strategic Planning
              </li>
            </ul>
          </div>
        </div>
      </div>