
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, MessageSquare, Users, TrendingUp } from 'lucide-react';
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
          A selection of data analysis and machine learning projects I've worked on. Each demonstrates different skills and technologies I use to solve real-world problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <Card className="hover-scale">
            <CardHeader className="bg-slate-100">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-slate-800">Sales Sentiment Analysis</CardTitle>
                <MessageSquare className="h-5 w-5 text-slate-600" />
              </div>
              <CardDescription className="text-slate-600">
                NLP-based customer sentiment analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 mb-4">
                Analyzed customer reviews and sales data to understand sentiment trends using NLP techniques with Python (NLTK, Vader) to classify sentiment scores.
              </p>
              <p className="text-slate-700 mb-4">
                Developed an interactive dashboard in Tableau for business insights, allowing stakeholders to visualize customer satisfaction trends.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">NLTK</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Tableau</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">NLP</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="text-slate-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
              <Button variant="outline" size="sm" className="text-slate-700">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 2 */}
          <Card className="hover-scale">
            <CardHeader className="bg-slate-100">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-slate-800">Churn Prediction Analysis</CardTitle>
                <TrendingUp className="h-5 w-5 text-slate-600" />
              </div>
              <CardDescription className="text-slate-600">
                Machine learning model for customer retention
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 mb-4">
                Built a machine learning model to predict customer churn using logistic regression and decision trees, with SQL for data extraction and preprocessing.
              </p>
              <p className="text-slate-700 mb-4">
                Created a Power BI dashboard to visualize churn patterns and risk factors, enabling proactive customer retention strategies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Machine Learning</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">SQL</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Power BI</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs rounded-full">Python</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="text-slate-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
              <Button variant="outline" size="sm" className="text-slate-700">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
