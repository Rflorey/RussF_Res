import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Download, Award, Book, Briefcase, CodeSquare, GraduationCap, ScrollText } from 'lucide-react';

// ... (previous component code)

// Update the resume download link in the Hero section
<a 
  href="/RussF_Res/resume.pdf" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
>
  <Download size={20} />
  Download Resume
</a>