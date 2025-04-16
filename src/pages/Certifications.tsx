
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "Preparing for the Google Cloud Professional Data Engineer Exam",
      issuer: "Google Cloud",
      date: "2023",
      description: "Preparation for certification that validates expertise in leveraging Google Cloud services for designing, building, and maintaining data processing systems.",
      link: "https://courses.edx.org/certificates/42b27b46c4ab454d908d9155882f4cec"
    },
    {
      title: "Analyzing Data with Excel",
      issuer: "IBM",
      date: "2023",
      description: "Covers advanced Excel techniques for data analysis including PivotTables, data modeling, and visualization.",
      link: "https://courses.edx.org/certificates/278dd9e3a4184d1aa9486765f2751bc7"
    },
    {
      title: "Data Visualization and Building Dashboards with Excel and Cognos",
      issuer: "IBM",
      date: "2022",
      description: "Comprehensive training in creating effective data visualizations and interactive dashboards using Excel and IBM Cognos.",
      link: "https://courses.edx.org/certificates/732da61049b34fcf8f62acfad193efa6"
    },
    {
      title: "Data Warehousing and BI Analytics",
      issuer: "IBM",
      date: "2022",
      description: "Covers data warehousing concepts, dimensional modeling, and business intelligence analytics techniques.",
      link: "https://courses.edx.org/certificates/9eac35696aef459fbbdfd8921c2dd56f"
    },
    {
      title: "Django Application Development with SQL and Databases",
      issuer: "IBM",
      date: "2022",
      description: "Focused on developing web applications using Django framework with SQL databases.",
      link: "https://courses.edx.org/certificates/fa90114c61324dc5860dcd5782bdd3d5"
    },
    {
      title: "Data Analytics and Databases on AWS",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Training on using AWS services for data analytics and database management.",
      link: "https://courses.edx.org/certificates/483b85f759b8446d9eef47874522d6dd"
    },
    {
      title: "Cybersecurity Workshop",
      issuer: "GDSC",
      date: "2022",
      description: "Workshop covering cybersecurity fundamentals and best practices for securing data and applications.",
      link: "#"
    },
    {
      title: "Microsoft Azure Certifications",
      issuer: "RAIT ACM Student Chapter",
      date: "2022",
      description: "Introduction to Microsoft Azure cloud platform with focus on data services and analytics.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Certifications</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          Professional certificates and credentials that validate my expertise in data analysis, visualization, and related technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-slate-700 mr-2" />
                  <CardTitle className="text-xl font-bold text-slate-800">{cert.title}</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">{cert.description}</p>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Issued: {cert.date}
                </div>
              </CardContent>
              <CardFooter>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium">
                  View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
