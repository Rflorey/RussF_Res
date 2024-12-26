import React from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Github, Linkedin, Mail, Download, Award, Book, Briefcase, Code2, GraduationCap, ScrollText } from 'lucide-react';

const ProfessionalWebsite = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Russ Florey, P.E.</h1>
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => window.open('mailto:russflorey@gmail.com')}
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('/resume.pdf')}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Download Resume
          </Button>
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
        <Button
          variant="default"
          className="flex items-center gap-2"
          onClick={() => {
            // Handle experience section navigation
          }}
        >
          <GraduationCap className="h-4 w-4" /> Experience
        </Button>
        <Button
          variant="default"
          className="flex items-center gap-2"
          onClick={() => {
            // Handle projects section navigation
          }}
        >
          <Code2 className="h-4 w-4" /> Projects
        </Button>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open('https://www.linkedin.com/in/russflorey/', '_blank')}
        >
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open('https://github.com/Rflorey', '_blank')}
        >
          <Github className="h-5 w-5" />
        </Button>
      </footer>
    </div>
  );
};

export default ProfessionalWebsite;