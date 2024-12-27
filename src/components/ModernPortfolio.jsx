import React from 'react';
import { Github, Linkedin, Mail, GraduationCap, Code2, Award, Book } from 'lucide-react';

const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Previous sections remain the same */}

      {/* Education Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Book className="text-blue-600 h-6 w-6 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Master of Science</h3>
            <p className="text-gray-600">Data Science (In Progress)</p>
            <p className="text-blue-600">Eastern University</p>
            <p className="text-gray-500 text-sm mt-2">Expected Completion: Fall 2025</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Book className="text-blue-600 h-6 w-6 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Bachelor of Science</h3>
            <p className="text-gray-600">Mechanical Engineering</p>
            <p className="text-blue-600">University of Texas at Tyler</p>
            <p className="text-gray-500 text-sm mt-2">2000</p>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Professional Certifications</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                <span>Registered Professional Engineer: Texas, Louisiana, Washington, Oregon, Alaska (Mechanical Discipline)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                <span>Registered Professional Engineer: Oklahoma (Mechanical & Structural Discipline)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                <span>Certificate in Machine Learning & AI Micro Boot Camp – Arizona State University (2023)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                <span>Pilot License: Airplane Single-Engine & Multi-Engine Instrument Rating</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer with Social Links */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/russflorey/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Rflorey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:russflorey@gmail.com"
                className="hover:text-blue-400 transition"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Russ Florey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;