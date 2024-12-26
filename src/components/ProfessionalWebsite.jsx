        {activeTab === 'projects' && (
          <div className="space-y-6">
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
    <section className={`py-12 px-4 ${sectionBgColor}`}>
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