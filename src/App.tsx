import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Capabilities from './components/Capabilities';
import Audience from './components/Audience';
import RequestDemo from './components/RequestDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Vision Statement */}
        <Vision />
        
        {/* Who Is It For */}
        <Audience />
        
        {/* Key Capabilities */}
        <Capabilities />
        
        {/* Request Demo */}
        <RequestDemo />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;