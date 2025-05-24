import React from 'react';
import { CAPABILITIES } from '../constants';
import { Brain, BookOpen, Users, BarChart3, Beaker } from 'lucide-react';

const Capabilities: React.FC = () => {
  // Function to get the correct icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-12 h-12 text-primary-600" />;
      case 'BookOpen':
        return <BookOpen className="w-12 h-12 text-primary-600" />;
      case 'Users':
        return <Users className="w-12 h-12 text-primary-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-12 h-12 text-primary-600" />;
      case 'Beaker':
        return <Beaker className="w-12 h-12 text-primary-600" />;
      default:
        return <Brain className="w-12 h-12 text-primary-600" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our innovative platform offers a comprehensive suite of AI-powered tools designed specifically for healthcare education.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 p-3 bg-primary-50 rounded-full w-fit">
                {getIcon(capability.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {capability.description}
              </p>
              <a href="#" className="text-primary-600 font-medium flex items-center mt-6 hover:text-primary-700 transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;