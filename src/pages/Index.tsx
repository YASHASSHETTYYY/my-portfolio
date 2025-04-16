
import Canvas3D from '@/components/Canvas3D';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas3D />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-900 animate-fade-in backdrop-blur-sm bg-white/30 p-4 rounded-lg">
            Data Analyst & AI Specialist
          </h1>
          <p className="text-xl md:text-2xl text-indigo-700 max-w-2xl mx-auto mb-8 animate-fade-in backdrop-blur-sm bg-white/30 p-4 rounded-lg" style={{ animationDelay: '0.2s' }}>
            Creating loveable AI experiences through data-driven insights
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Explore My Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
