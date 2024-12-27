import React from 'react';
import { User, Phone, Mail, MapPin, Award, Book, FileText, Briefcase } from 'lucide-react';

const ResumeWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">RUSS FLOREY, P.E.</h1>
          <h2 className="text-xl mb-4">SENIOR PRINCIPAL MECHANICAL STRUCTURAL ANALYSIS ENGINEER</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>832-727-4675</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>russflorey@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Chandler, AZ</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Professional Summary</h3>
          <p className="text-gray-700 mb-4">
            High-Achieving Mechanical Structural Analysis Engineer with demonstrated success combining traditional
            engineering with modern computational methods for major clients and Fortune 500 companies in the heavy
            equipment, military, oil and gas, aerospace, and renewable industries.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Body of work includes development of complex physics-based and data-driven analysis models and methods of structural, mechanical analytical algorithm development and automation.</li>
            <li>Expertise spans static and dynamic structure analysis, FEA, modal analysis, fatigue analysis, and multibody dynamic simulations (MBD).</li>
            <li>Currently enrolled in Eastern University's Master of Science, Data Science Program (expected completion fall 2025).</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Professional Experience</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">ARRAY TECHNOLOGY</h4>
            <p className="text-gray-600 italic mb-2">Principal Mechanical Structural Engineer (2024 - Present)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Architected and developed AATLAS, delivering consistent analysis methodology across global engineering teams.</li>
              <li>Created Python-based algorithms for solar tracker modal frequency calculations and wind loading analysis.</li>
              <li>Reduced design cycle time from days to hours, increasing loading and stress assessment accuracy.</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 italic mb-2">Senior Mechanical Engineer (2020 - 2024)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Conducted dynamic simulation of solar tracker system subject to wind loading events.</li>
              <li>Developed transfer functions from FEA models and innovated stress-based time series analysis.</li>
              <li>Created comprehensive direct integration model for nonlinear transient dynamic response.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-2 rounded">Abaqus</div>
            <div className="bg-blue-50 p-2 rounded">Ansys</div>
            <div className="bg-blue-50 p-2 rounded">MSC ADAMs</div>
            <div className="bg-blue-50 p-2 rounded">Python</div>
            <div className="bg-blue-50 p-2 rounded">VB.NET</div>
            <div className="bg-blue-50 p-2 rounded">Excel/VBA</div>
            <div className="bg-blue-50 p-2 rounded">SolidWorks</div>
            <div className="bg-blue-50 p-2 rounded">Visual Studio</div>
          </div>
        </section>

        {/* Patents */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Patents</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Award className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>Anti-Tracking Spear Points for Earth-Boring Drill Bits (US8579051B2)</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>Erosion-Resistant Fluid Passageways and Flow Tubes for Earth-Boring Tools (US7828089B2)</span>
            </li>
          </ul>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Education & Certifications</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Book className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Master of Science, Data Science (In Progress)</p>
                <p className="text-gray-600">Eastern University (Expected Fall 2025)</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Book className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Bachelor of Science, Mechanical Engineering</p>
                <p className="text-gray-600">University of Texas at Tyler</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Professional Engineering Licenses</p>
                <p className="text-gray-600">TX, LA, WA, OR, AK (Mechanical) | OK (Mechanical & Structural)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <a href="https://github.com/Rflorey/Machine_Learning" className="hover:text-blue-200 transition-colors">
            GitHub: github.com/Rflorey/Machine_Learning
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;