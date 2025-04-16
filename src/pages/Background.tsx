
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Background = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "RAIT DY Patil, Navi Mumbai",
      period: "2023 - 2027 (Expected)",
      description: "Currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science, focusing on machine learning algorithms, statistical analysis, and data visualization techniques."
    }
  ];

  const workExperience = [
    {
      title: "Data Analyst",
      company: "Personal Projects & Coursework",
      period: "2022 - Present",
      description: "Working on various data analysis projects to apply theoretical knowledge in practical scenarios.",
      achievements: [
        "Conducted sales sentiment analysis using NLP techniques and Python",
        "Developed churn prediction models using machine learning algorithms",
        "Created interactive dashboards using Power BI and Tableau"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Academic Background</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          My educational journey and practical experience in data analysis and artificial intelligence.
        </p>
        
        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" /> Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">{edu.degree}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <Briefcase className="mr-2 h-5 w-5" /> Project Experience
          </h2>
          
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">{job.title}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {job.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Key Projects:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Professional Summary</h2>
          <p className="text-slate-700">
            Results-driven Data Analyst with expertise in statistical analysis, data visualization, and machine learning. 
            Proficient in Python, SQL, and Power BI, with experience transforming complex data into actionable insights. 
            Passionate about leveraging data-driven solutions to optimize business strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
