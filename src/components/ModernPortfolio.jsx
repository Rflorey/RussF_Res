import React from 'react';
import { Github, Linkedin, Mail, GraduationCap, Code2, Award, Book } from 'lucide-react';

const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Previous sections remain the same */}

      {/* Experience Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-3xl mx-auto">
            {/* Array Technology Principal Role */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold">Principal Mechanical Structural Engineer</h3>
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-gray-500">2024 - Present</span>
              </div>
              <p className="text-blue-600 font-medium mb-4">Array Technology</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Led development of AATLAS, revolutionizing solar tracker analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Automated analysis storage in Azure for ML integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Reduced design cycle time from days to hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Streamlined engineering workflow with faster iteration and better decision-making in structural design</span>
                </li>
              </ul>
            </div>

            {/* Array Technology Senior Role */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold">Senior Mechanical Engineer</h3>
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-gray-500">2020 - 2024</span>
              </div>
              <p className="text-blue-600 font-medium mb-4">Array Technology</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Conducted dynamic simulation of solar tracker systems using MSC Adams software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Developed Python Linear Dynamic Model using modal superposition method</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Created comprehensive direct integration models for nonlinear transient dynamic response</span>
                </li>
              </ul>
            </div>

            {/* Insitu Experience */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold">Mechanical Engineer IV, PE</h3>
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-gray-500">2015 - 2020</span>
              </div>
              <p className="text-blue-600 font-medium mb-4">Insitu</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Analyzed UAV structural-mechanical systems using FEA and classical calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Performed dynamic structural analysis of ground equipment during UAV captures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Developed analytical tools for fatigue assessment and structural load calculation</span>
                </li>
              </ul>
            </div>

            {/* Gunnebo Johnson Experience */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold">Product Development Engineer PE</h3>
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-gray-500">2014 - 2015</span>
              </div>
              <p className="text-blue-600 font-medium mb-4">Gunnebo Johnson</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Led redesign of submersible gear housing for Army Corps of Engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Developed first line of well service tubing blocks from concept to production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Ensured 100% compliance with industry standards and ASME design codes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
