
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">My Projects</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          A selection of data science and machine learning projects I've worked on. Each demonstrates different skills and technologies I use to solve complex problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="hover-scale">
            <CardHeader className="bg-slate-100">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-slate-800">Predictive Analytics Dashboard</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Sales forecasting and customer segmentation
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 mb-4">
                Developed a machine learning model for sales forecasting with 92% accuracy, integrating customer segmentation algorithms to identify high-value customer groups.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">TensorFlow</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Tableau</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="text-slate-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Button variant="outline" size="sm" className="text-slate-700">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 2 */}
          <Card className="hover-scale">
            <CardHeader className="bg-slate-100">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-slate-800">Natural Language Processing System</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Advanced sentiment analysis platform
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 mb-4">
                Created an NLP system that analyzes customer feedback across multiple channels, providing real-time sentiment analysis and topic extraction with 87% accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">NLP</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">BERT</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Python</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="text-slate-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Case Study
              </Button>
              <Button variant="outline" size="sm" className="text-slate-700">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 3 */}
          <Card className="hover-scale">
            <CardHeader className="bg-slate-100">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-slate-800">Anomaly Detection System</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Real-time fraud detection platform
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 mb-4">
                Built a real-time anomaly detection system for financial transactions, reducing false positives by 35% while maintaining a 98.5% detection rate for fraudulent activity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Machine Learning</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Kafka</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Spark</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="text-slate-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                White Paper
              </Button>
              <Button variant="outline" size="sm" className="text-slate-700">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
