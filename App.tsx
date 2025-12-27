import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronDown, ExternalLink, Code2, Palette, Terminal } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SOCIAL_LINKS } from './constants';
import AIChat from './components/AIChat';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'mail': return <Mail size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">Momen</span>
            <span className="text-primary-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-all transform hover:scale-105">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]"></div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs font-semibold tracking-wider uppercase">
             Hello, I'm {PERSONAL_INFO.nickname}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
            {PERSONAL_INFO.role}
          </p>
          
          <div className="flex gap-4 justify-center">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-dark-800 border border-white/10 hover:border-primary-500 hover:bg-primary-500/10 hover:text-primary-400 transition-all"
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
               <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                 <img 
                   src="https://picsum.photos/600/600?grayscale" 
                   alt={PERSONAL_INFO.name} 
                   className="relative rounded-2xl border border-white/10 shadow-2xl w-full max-w-md mx-auto md:mx-0"
                 />
               </div>
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
                  {PERSONAL_INFO.about.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {PERSONAL_INFO.about.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERSONAL_INFO.about.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-dark-800 border border-white/5">
                    <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                      {idx % 2 === 0 ? <Code2 size={20} /> : <Palette size={20} />}
                    </div>
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{PERSONAL_INFO.nickname}'s Work</h2>
            <p className="text-slate-400">A selection of recent projects and designs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors">
                    View Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-white/5 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Ready to create something amazing?</h2>
          <div className="flex justify-center gap-6 mb-8">
             {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {getIcon(link.icon)}
                </a>
             ))}
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* AI Chat Widget */}
      <AIChat />
    </div>
  );
}

export default App;