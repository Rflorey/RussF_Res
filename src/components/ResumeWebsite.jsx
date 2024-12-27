import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ResumeWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Education & Certifications</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Master's Degree */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                📚
              </div>
              <div>
                <h3 className="text-xl font-bold">Master of Science</h3>
                <p className="text-gray-600">Data Science (In Progress)</p>
                <p className="text-blue-600">Eastern University</p>
                <p className="text-gray-500 mt-2">Expected Completion: Fall 2025</p>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                📚
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science</h3>
                <p className="text-gray-600">Mechanical Engineering</p>
                <p className="text-blue-600">University of Texas at Tyler</p>
                <p className="text-gray-500 mt-2">2000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Professional Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
              <span>Registered Professional Engineer: Texas, Louisiana, Washington, Oregon, Alaska (Mechanical Discipline)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
              <span>Registered Professional Engineer: Oklahoma (Mechanical & Structural Discipline)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
              <span>Certificate in Machine Learning & AI Micro Boot Camp – Arizona State University (2023)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
              <span>Pilot License: Airplane Single-Engine & Multi-Engine Instrument Rating</span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/Rflorey" className="hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:russflorey@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">© 2024 Russ Florey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;