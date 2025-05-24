import React from 'react';
import { AUDIENCE_ITEMS } from '../constants';
import { BookOpen, BarChart3, Users } from 'lucide-react';

const Audience: React.FC = () => {
  // Function to get the correct icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-12 h-12 text-primary-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-12 h-12 text-primary-600" />;
      case 'Users':
        return <Users className="w-12 h-12 text-primary-600" />;
      default:
        return <Users className="w-12 h-12 text-primary-600" />;
    }
  };

  return (
    <section id="audience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Is It For?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Orfiq caters to the diverse needs of the healthcare education ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {AUDIENCE_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 p-3 bg-primary-50 rounded-full">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;