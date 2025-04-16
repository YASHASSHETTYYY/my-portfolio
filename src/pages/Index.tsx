
import { Link } from 'react-router-dom';
import Canvas3D from '@/components/Canvas3D';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Award, Code, User, Mail, Phone, Linkedin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas3D />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 animate-fade-in backdrop-blur-sm bg-white/30 p-4 rounded-lg">
            Yashas Shetty
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-8 animate-fade-in backdrop-blur-sm bg-white/30 p-4 rounded-lg" style={{ animationDelay: '0.2s' }}>
            Data Analyst & AI Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in mb-8" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects" className="w-full sm:w-auto">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                <Briefcase className="mr-2" />
                View Projects
              </Button>
            </Link>
            <Link to="/skills" className="w-full sm:w-auto">
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm text-slate-800 border-slate-300 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-white/80 w-full sm:w-auto">
                <Code className="mr-2" />
                Skills & Expertise
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in bg-white/30 backdrop-blur-sm p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
            <a href="mailto:shettyyyashas@gmail.com" className="flex items-center text-slate-700 hover:text-slate-900">
              <Mail className="mr-2 h-5 w-5" />
              shettyyyashas@gmail.com
            </a>
            <a href="tel:+919930558940" className="flex items-center text-slate-700 hover:text-slate-900">
              <Phone className="mr-2 h-5 w-5" />
              +91 9930558940
            </a>
            <a href="https://www.linkedin.com/in/yashas-shetty/" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-slate-900">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-md hover-scale">
              <Briefcase className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Professional Background</h3>
              <p className="text-slate-600 mb-4">Data Analyst with expertise in statistical analysis, data visualization, and machine learning.</p>
              <Link to="/background">
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 mt-2">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg shadow-md hover-scale">
              <Code className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Technical Skills</h3>
              <p className="text-slate-600 mb-4">Expertise in Python, SQL, Power BI, and various data visualization tools.</p>
              <Link to="/skills">
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 mt-2">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg shadow-md hover-scale">
              <Award className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Certifications</h3>
              <p className="text-slate-600 mb-4">Certified in data science, analytics, and cloud platforms.</p>
              <Link to="/certifications">
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 mt-2">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
