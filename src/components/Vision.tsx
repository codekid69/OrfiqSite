import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 -z-10"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Vision</h2>
        <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
          "Orfiq envisions a world where healthcare professionals learn smarter, faster, and more meaningfully through the seamless integration of AI and human expertise."
        </p>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="#audience"
            className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-md transition-colors"
          >
            Discover how
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vision;