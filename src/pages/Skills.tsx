
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Languages } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python (Pandas, NumPy, Scikit-learn)', proficiency: 90 },
    { name: 'SQL', proficiency: 85 },
    { name: 'Power BI', proficiency: 88 },
    { name: 'R', proficiency: 80 },
    { name: 'Tableau', proficiency: 85 },
    { name: 'Data Visualization', proficiency: 90 },
    { name: 'Machine Learning', proficiency: 82 },
    { name: 'Statistical Analysis', proficiency: 85 },
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem-Solving',
    'Communication & Presentation',
    'Attention to Detail',
    'Team Collaboration',
  ];
  
  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Kannada', level: 'Basic' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Skills & Expertise</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          With a background in data analysis and machine learning, I've developed a diverse set of technical and soft skills applicable across various industries.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <Star className="mr-2 h-5 w-5" /> Technical Skills
            </h2>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2 bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <Star className="mr-2 h-5 w-5" /> Professional Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
            
            {/* Languages */}
            <h2 className="text-2xl font-bold mb-6 mt-10 text-slate-800 flex items-center">
              <Languages className="mr-2 h-5 w-5" /> Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <span className="font-medium text-slate-700">{lang.name}</span>
                  <span className="block text-sm text-slate-500 mt-1">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Pandas', 'NumPy', 'Scikit-learn', 'MySQL', 'PostgreSQL', 'Excel', 'Google Analytics', 'NLTK'].map((tool) => (
              <div key={tool} className="bg-slate-100 py-2 px-4 rounded-md text-center text-slate-700">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
