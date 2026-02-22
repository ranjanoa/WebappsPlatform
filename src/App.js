import React, { useState, useEffect } from 'react';

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentToolIndex, setCurrentToolIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Web Apps Platform Data - Organized by Categories
  const platformData = {
    categories: {
      generic: {
        title: 'Generic Web Apps',
        description: 'Everyday productivity tools for everyone',
        icon: 'fas fa-tools',
        apps: [
          {
            id: 'generic1',
            title: 'Resume Creator',
            description: 'Create professional, ATS-friendly resumes with modern templates. Customize layouts, add your experience, and download in PDF format. Perfect for job seekers looking to make a great first impression.',
            thumbnail: 'https://placehold.co/600x400/1F2937/00ffff?text=Resume+Creator',
            liveLink: 'https://pro-resume-ranjanoas-projects.vercel.app/',
            techStack: 'React, PDF Generation, Templates, Form Validation',
            category: 'Productivity'
          },
          {
            id: 'generic2',
            title: 'PDF Toolkit',
            description: 'Comprehensive PDF management tool. Merge multiple PDFs, split large documents, compress file sizes, and convert between formats. All processing happens in your browser for maximum privacy.',
            thumbnail: 'https://placehold.co/600x400/1F2937/00ffff?text=PDF+Toolkit',
            liveLink: '#',
            techStack: 'PDF.js, File Processing, Client-side Processing',
            category: 'Utilities',
            status: 'Coming Soon'
          },
          {
            id: 'generic3',
            title: 'Image Compressor',
            description: 'Optimize images for web without losing quality. Batch compress JPG, PNG, and WebP files. Reduce file sizes by up to 80% while maintaining visual fidelity. Perfect for web developers and content creators.',
            thumbnail: 'https://placehold.co/600x400/1F2937/00ffff?text=Image+Compressor',
            liveLink: '#',
            techStack: 'Canvas API, Image Processing, WebP Conversion',
            category: 'Media',
            status: 'Coming Soon'
          },
          {
            id: 'generic4',
            title: 'URL Shortener',
            description: 'Create short, memorable links for easy sharing. Track click analytics, set expiration dates, and customize short URLs. Ideal for social media, marketing campaigns, and link management.',
            thumbnail: 'https://placehold.co/600x400/1F2937/00ffff?text=URL+Shortener',
            liveLink: '#',
            techStack: 'API Integration, Analytics, QR Code Generation',
            category: 'Utilities',
            status: 'Coming Soon'
          }
        ]
      },
      engineering: {
        title: 'Engineering Web Apps',
        description: 'Advanced industrial simulation and optimization tools',
        icon: 'fas fa-industry',
        apps: [
          {
            id: 'eng1',
            title: 'Industrial AI Control',
            description: 'A cutting-edge AI optimization digital twin solution for industrial processes. This provides real-time 3D simulation and optimization of industrial lime kiln. Leverage predictive simulation and immersive visualization for proactive maintenance and operational excellence in a truly futuristic environment.',
            thumbnail: 'https://drive.google.com/thumbnail?id=1B0tzzRBIFVgcv9pLjys80kZxFmKnXUx7&sz=w600',
            liveLink: 'https://drive.google.com/file/d/1rwm8u1ygODtuVTdPalIBN3e5NMldFYWt/view?usp=sharing',
            techStack: 'Digital Twins, Process Simulation, Predictive Control, Energy Optimization',
            category: 'AI & Optimization'
          },
          {
            id: 'eng2',
            title: 'AuraGrind: SAG Mill Digital Twin',
            description: 'Experience the future of mineral processing with our advanced SagMill Digital Twin. This 3D simulation provides real-time insights into mill performance, predicting wear, optimizing energy consumption, and enhancing throughput. Leverage predictive analytics and immersive visualization for proactive maintenance and operational excellence.',
            thumbnail: 'https://drive.google.com/thumbnail?id=1YFBNqwx-cMqBXe3LafvbDVFHOjP8ai_k&sz=w600',
            liveLink: 'https://drive.google.com/file/d/1DMqqk6ixXG2ofg0F3yCG7UWixL6SmSB8/view?usp=sharing',
            techStack: 'Digital Twins, 3D Simulation, Predictive Analytics, AI/ML, Process Optimization',
            category: 'Digital Twins'
          },
          {
            id: 'eng3',
            title: 'Digital Twin - 3D Stockpile Visualisation',
            description: 'This 3D material tracking and blending model empowers plant operators to control mill feed quality. It visually maps the stockpile\'s composition by ore hardness. Simulate different reclaim feeder rates to test blending scenarios and predict the resulting hardness sent to the mill. This tool transforms the stockpile into a predictable resource.',
            thumbnail: 'https://drive.google.com/thumbnail?id=1k8yi9HfNdzI6JR75DO60QxUUaYrJmFMq&sz=w600',
            liveLink: 'https://drive.google.com/file/d/1PWTRhFkOnbraC1TXvhCWMytkVSzzpp0K/view?usp=sharing',
            techStack: 'Python, Simulation Software, Data Analytics, Digital Twins',
            category: 'Visualization'
          },
          {
            id: 'eng4',
            title: 'P&ID Analyzer',
            description: 'This AI-powered desktop P&ID Analyzer lets you upload P&ID images or PDFs. Using Google\'s Gemini AI, it automatically extracts equipment, connections, and key simulation parameters, organizing them into clear tables for review. Requires a user-provided Google AI API key to run.',
            thumbnail: 'https://drive.google.com/thumbnail?id=1L-L0ivvqoZNc_BRZig7rOL5Az6cRkiux&sz=w600',
            liveLink: 'https://drive.google.com/file/d/1vk3KOxFIKRkxVFpOjcN3BogDN_mbAi4I/view?usp=sharing',
            techStack: 'AI, Document Analysis, Simulation Parameters',
            category: 'AI & Analysis'
          },
          {
            id: 'eng5',
            title: 'HydroSense Pipeline Monitor',
            description: 'HydroSense is a web-based application designed to simulate and monitor pipeline hydraulic behavior, with a focus on real-time leak detection and analysis. It utilizes the Method of Characteristics (MOC) to model transient flow conditions within the pipeline.',
            thumbnail: 'https://drive.google.com/thumbnail?id=1xqFWNVlDkJJwq8q7P_6FGlhqkCQ7TLCa&sz=w600',
            liveLink: 'https://drive.google.com/file/d/19qyQxT51OxxElUeBzp0Cp1mw9QkFaqyB/view?usp=sharing',
            techStack: 'Hydraulic Simulation, MOC, Real-time Monitoring, Leak Detection',
            category: 'Monitoring'
          },
          {
            id: 'eng6',
            title: 'Concentrator Value Modelling',
            description: 'This tool is designed to help metallurgists, plant managers, and engineers model the financial and environmental impact of potential process improvements in a mineral concentrator plant. By defining a baseline scenario and then selecting various technological solutions, users can quantify benefits in terms of increased revenue, cost savings, CO2 reduction, and overall project ROI.',
            thumbnail: 'https://drive.google.com/thumbnail?id=18ZbyUebl2r0uepCg9Kg73fqMlo9j8Hve&sz=w600',
            liveLink: 'https://drive.google.com/file/d/1wLJs3O4g09dP9NTURiosyg_elRer3WMa/view?usp=sharing',
            techStack: 'Financial Modeling, Environmental Impact, Process Improvement, ROI Analysis',
            category: 'Analytics'
          }
        ]
      }
    },
    contactEmail: 'ranjanoa@gmail.com'
  };

  // Get all apps for carousel
  const allApps = [
    ...platformData.categories.generic.apps,
    ...platformData.categories.engineering.apps
  ];

  // Get filtered apps based on active category
  const getFilteredApps = () => {
    if (activeCategory === 'all') {
      return allApps;
    }
    return platformData.categories[activeCategory].apps;
  };

  // Scroll tracking for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to handle initial scroll if a hash is present in the URL
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  // Effect for auto-playing tool carousel on homepage
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentToolIndex((prevIndex) =>
        (prevIndex + 1) % allApps.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [allApps.length]);

  return (
    <div className="font-sans text-gray-100 antialiased min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1); }
          50% { box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.2); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Enhanced background with animated gradient */
        body {
          background: linear-gradient(-45deg, #0a0a0a, #1a1a2e, #16213e, #0f3460);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
            linear-gradient(to right, rgba(0, 100, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 100, 255, 0.03) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 50px 50px, 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        /* Glassmorphism effect */
        .glass {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Tool showcase container with enhanced styling */
        .tool-showcase-container {
          position: relative;
          width: 90%;
          max-width: 1200px;
          min-height: 280px;
          overflow: hidden;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 255, 0.2);
          animation: glow 3s ease-in-out infinite;
        }

        .tool-showcase-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transition: opacity 1s ease-in-out, transform 0.8s ease;
          transform: translateY(20px);
        }

        .tool-showcase-card.active {
          opacity: 1;
          transform: translateY(0);
        }

        .tool-showcase-image-wrapper {
          flex: 0 0 auto;
          width: 200px;
          height: 200px;
          margin-right: 2rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.2);
          border: 2px solid rgba(0, 255, 255, 0.4);
          transition: transform 0.3s ease;
        }

        .tool-showcase-card.active .tool-showcase-image-wrapper {
          animation: float 3s ease-in-out infinite;
        }

        .tool-showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tool-showcase-content {
          flex: 1;
          color: #e5e7eb;
        }

        .tool-showcase-title {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00ffff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
        }

        .tool-showcase-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #8b5cf6;
          background: rgba(139, 92, 246, 0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          margin-bottom: 0.75rem;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .tool-showcase-description {
          font-size: 1rem;
          color: #d1d5db;
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }

        .tool-showcase-link {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 700;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(20, 184, 166, 0.4);
        }

        .tool-showcase-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(20, 184, 166, 0.6);
        }

        /* Tool card enhancements */
        .tool-card {
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .tool-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .tool-card:hover::before {
          left: 100%;
        }

        .tool-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(0, 255, 255, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 255, 255, 0.3);
        }

        .tool-card img {
          transition: transform 0.4s ease;
        }

        .tool-card:hover img {
          transform: scale(1.1);
        }

        /* Animated gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #00ffff 0%, #00d4ff 50%, #8b5cf6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
        }

        /* Fade in animation for sections */
        .fade-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        /* Category badge */
        .category-badge {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%);
          border: 1px solid rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
        }

        .category-badge:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%);
          transform: scale(1.05);
        }

        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Skip to content link */
        .skip-to-content {
          position: absolute;
          top: -40px;
          left: 0;
          background: #14b8a6;
          color: white;
          padding: 8px 16px;
          text-decoration: none;
          z-index: 100;
          border-radius: 0 0 4px 0;
        }

        .skip-to-content:focus {
          top: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .tool-showcase-card {
            flex-direction: column;
            padding: 1.5rem;
          }
          
          .tool-showcase-image-wrapper {
            margin-right: 0;
            margin-bottom: 1.5rem;
            width: 150px;
            height: 150px;
          }

          .tool-showcase-title {
            font-size: 1.5rem;
          }
        }
        `}
      </style>

      {/* Header/Navigation */}
      <header className="fixed w-full glass shadow-2xl z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#home"
            onClick={() => scrollToSection('home')}
            className="text-2xl md:text-3xl font-extrabold gradient-text hover:scale-105 transition-transform duration-300 p-2"
          >
            Web Apps Tools Platform
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="tools" label="Tools" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2 hover:text-teal-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <i className={`${isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-xl`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass shadow-lg py-2 border-t border-gray-700">
            <NavLink id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="tools" label="Tools" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} mobile />
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="pt-20 relative z-10">
        {/* Home/Hero Section */}
        <section id="home" className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-gray-100">
          <div className="flex flex-col items-center justify-center w-full mb-12 text-center fade-in">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                🚀 Next-Gen Industrial Tools
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Welcome to <br />
              <span className="gradient-text">Web Apps Tools Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Access powerful <span className="font-bold text-teal-300">web-based tools and applications</span> for
              <span className="font-bold text-purple-400"> industrial simulation</span>,
              <span className="font-bold text-cyan-400"> digital twins</span>,
              <span className="font-bold text-indigo-400"> process optimization</span>, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection('tools')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
              >
                <i className="fas fa-rocket mr-2"></i>Explore Tools
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-envelope mr-2"></i>Contact Us
              </button>
            </div>
          </div>

          {/* Featured Tool Showcase Section */}
          {allApps.length > 0 && (
            <div className="w-full flex items-center justify-center py-8 md:py-12 fade-in">
              <div className="tool-showcase-container">
                {allApps.map((tool, index) => (
                  <div
                    key={tool.id}
                    style={{ opacity: index === currentToolIndex ? 1 : 0, zIndex: index === currentToolIndex ? 10 : 1 }}
                    className={`tool-showcase-card ${index === currentToolIndex ? 'active' : ''}`}
                  >
                    <div className="tool-showcase-image-wrapper">
                      <img
                        src={tool.thumbnail}
                        alt={`${tool.title} - ${tool.category}`}
                        className="tool-showcase-image"
                        loading="lazy"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/1F2937/00ffff?text=Tool"; }}
                      />
                    </div>
                    <div className="tool-showcase-content">
                      <span className="tool-showcase-category">
                        <i className="fas fa-tag mr-1"></i>{tool.category}
                      </span>
                      <h3 className="tool-showcase-title">
                        {tool.title}
                      </h3>
                      <p className="tool-showcase-description">
                        {tool.description.length > 180 ? tool.description.substring(0, 180) + '...' : tool.description}
                      </p>
                      {tool.liveLink && (
                        <a
                          href={tool.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tool-showcase-link"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>Launch App
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <i className="fas fa-chevron-down text-3xl text-cyan-400 opacity-70"></i>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-5xl md:text-6xl font-extrabold gradient-text mb-4">
                Web Apps & Tools
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Explore our collection of powerful web applications
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'glass border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500'
                    }`}
                >
                  <i className="fas fa-th mr-2"></i>All Apps
                </button>
                <button
                  onClick={() => setActiveCategory('generic')}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${activeCategory === 'generic'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'glass border-2 border-purple-500/30 text-purple-400 hover:border-purple-500'
                    }`}
                >
                  <i className="fas fa-tools mr-2"></i>Generic Web Apps
                </button>
                <button
                  onClick={() => setActiveCategory('engineering')}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${activeCategory === 'engineering'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                    : 'glass border-2 border-indigo-500/30 text-indigo-400 hover:border-indigo-500'
                    }`}
                >
                  <i className="fas fa-industry mr-2"></i>Engineering Web Apps
                </button>
              </div>

              {/* Category Description */}
              {activeCategory !== 'all' && (
                <div className="max-w-2xl mx-auto glass p-6 rounded-xl border border-cyan-500/30 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <i className={`${platformData.categories[activeCategory].icon} text-3xl text-cyan-400`}></i>
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {platformData.categories[activeCategory].title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {platformData.categories[activeCategory].description}
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredApps().map((tool, index) => (
                <div
                  key={tool.id}
                  className="tool-card rounded-xl shadow-2xl overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={tool.thumbnail}
                      alt={`${tool.title} - ${tool.category} tool screenshot`}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1F2937/00ffff?text=Tool+Image"; }}
                    />
                  </div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="category-badge text-xs font-bold px-3 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3 hover:text-cyan-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {tool.description.length > 120 ? tool.description.substring(0, 120) + '...' : tool.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {tool.techStack.split(',').slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-800 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-teal-700">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-start">
                      {tool.status === 'Coming Soon' ? (
                        <span className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                          <i className="fas fa-clock mr-2"></i>Coming Soon
                        </span>
                      ) : tool.liveLink && (
                        <a
                          href={tool.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>Launch App
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-5xl md:text-6xl font-extrabold gradient-text mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you!
              </p>
            </div>
            <div className="max-w-3xl mx-auto glass p-10 rounded-2xl shadow-2xl text-center border border-cyan-500/30">
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                Have questions or feedback about our tools? Want to collaborate or suggest new features?
                <span className="font-bold text-cyan-400"> We'd love to hear from you!</span>
              </p>
              <div className="max-w-md mx-auto mb-10">
                <a
                  href={`mailto:${platformData.contactEmail}`}
                  className="glass p-6 rounded-xl hover:border-cyan-500 border border-transparent transition-all duration-300 hover:scale-105 group block"
                >
                  <i className="fas fa-envelope text-4xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform"></i>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-cyan-300 font-semibold">{platformData.contactEmail}</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-cyan-700/30 py-10 text-center relative z-10">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} <span className="font-bold text-cyan-400">Web Apps Tools Platform</span>. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with <i className="fas fa-heart text-red-500"></i> using React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

// NavLink Component with enhanced styling
const NavLink = ({ id, label, activeSection, onClick, mobile }) => {
  const baseClasses = "block transition-all duration-300 font-semibold";
  const desktopClasses = "px-4 py-2 rounded-lg text-base";
  const mobileClasses = "px-4 py-3 text-base";
  const activeColorClasses = "text-cyan-400 bg-cyan-500/10 font-bold";
  const inactiveColorClasses = "text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5";

  return (
    <a
      href={`#${id}`}
      onClick={() => onClick(id)}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${activeSection === id ? activeColorClasses : inactiveColorClasses}`}
    >
      {label}
    </a>
  );
};

export default App;
