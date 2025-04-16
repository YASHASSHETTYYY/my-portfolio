
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Background = () => {
  const workExperience = [
    {
      title: "Senior Data Scientist",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead data scientist for the company's AI initiatives. Developed predictive models that increased customer retention by 23% and optimized marketing spend by 15%.",
      achievements: [
        "Implemented NLP algorithms for customer feedback analysis",
        "Built and deployed a real-time recommendation engine",
        "Led a team of 5 junior data scientists on various projects"
      ]
    },
    {
      title: "Data Scientist",
      company: "DataDriven Solutions",
      period: "2020 - 2022",
      description: "Designed and implemented machine learning solutions for finance and retail clients. Specialized in anomaly detection and time series forecasting.",
      achievements: [
        "Created a fraud detection system with 98% accuracy",
        "Developed sales forecasting models with 92% accuracy",
        "Reduced data processing time by 40% through pipeline optimization"
      ]
    },
    {
      title: "Data Analyst",
      company: "Analytics First",
      period: "2018 - 2020",
      description: "Performed statistical analysis and created data visualizations to support business decision-making.",
      achievements: [
        "Built interactive dashboards using Tableau",
        "Conducted A/B tests to optimize website conversion",
        "Automated reporting processes using Python"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc in Data Science",
      institution: "University of Data Analytics",
      period: "2016 - 2018",
      description: "Specialized in machine learning algorithms and statistical modeling. Thesis: 'Advanced Techniques for Time Series Prediction in Financial Markets'."
    },
    {
      degree: "BSc in Computer Science",
      institution: "Tech University",
      period: "2012 - 2016",
      description: "Graduated with honors. Focused on algorithm design, data structures, and software engineering principles."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Professional Background</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          My journey in data science and machine learning, including work experience and educational background.
        </p>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <Briefcase className="mr-2 h-5 w-5" /> Work Experience
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
                    <h4 className="font-medium text-slate-700 mb-2">Key Achievements:</h4>
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
        
        {/* Education */}
        <div>
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
      </div>
    </div>
  );
};

export default Background;
