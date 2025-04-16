
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-indigo-900">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <div className="text-indigo-500 text-6xl">📊</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-900">AI Sentiment Analysis Dashboard</h3>
              <p className="text-indigo-700 mb-4">A real-time dashboard for analyzing customer sentiment using NLP and machine learning algorithms.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">TensorFlow</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">React</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                View Details
              </button>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <div className="text-purple-500 text-6xl">🤖</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-900">Lovable Chatbot Experience</h3>
              <p className="text-indigo-700 mb-4">A chatbot with personality designed to provide empathetic customer support interactions.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">NLP</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">GPT-4</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Node.js</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                View Details
              </button>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <div className="text-blue-500 text-6xl">📈</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-900">Data-Driven UX Optimization</h3>
              <p className="text-indigo-700 mb-4">Analytics platform that identifies friction points in user experience and suggests improvements.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">R</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">D3.js</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">SQL</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
