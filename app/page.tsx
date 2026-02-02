"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Database, Layout, Sun, Moon, Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// --- PROJECT DATA ---
const PROJECTS = [
  {
    title: "Okiro Arise",
    description: "Mobile fitness application designed to help users track workouts, set goals, and maintain healthy habits. Built with modern mobile development practices for optimal performance.",
    tags: ["Mobile Dev", "Fitness", "React Native", "UI/UX"],
    image: "/images/okiro-arise.png",
    gradient: "from-green-500 to-emerald-600",
    links: { 
      github: "https://github.com/fhdMd/okiro-arise", 
      live: "https://my-portfolio-8rwbay129-fhdmds-projects.vercel.app/" 
    }
  },
  {
    title: "The Foodies Hub",
    description: "Next.js recreation of Figma designs with Express.js backend. Features unique restaurant menus and multi-address cart management. Dockerized for deployment.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Docker", "Node.js"],
    image: "/images/foodies-hub-logo.png",
    gradient: "from-white to-slate-200",
    links: { 
      github: "https://github.com/fhdMd/The-Foodies-Hub", 
      live: "https://the-foodies-hub.vercel.app/" 
    }
  },
  {
    title: "Soul Notes",
    description: "Freelance static webpage featuring creative UI with image card trains and subtle fade-in animations implemented in React.",
    tags: ["React", "TypeScript", "Figma", "CSS"],
    image: "/images/soul-notes-logo.png",
    gradient: "from-black to-zinc-900",
    links: { 
      github: "https://github.com/fhdMd/soul-Notes", 
      live: "https://soul-notes-og.vercel.app/" 
    }
  },
  {
    title: "SpinDash",
    description: "Robust e-commerce platform for video games using Spring Boot. Manages inventory, authentication, and secure checkout via JDBC/MySQL.",
    tags: ["Spring Boot", "Java", "MySQL", "JSP", "JDBC"],
    image: "/images/sonic-head-removebg-preview.png",
    gradient: "from-red-600 to-red-800",
    links: { 
      github: "https://github.com/fhdMd/SpinDash", 
      live: null 
    }
  }
];

// --- TECHNICAL SKILLS ---
const SKILLS = [
  "Java (Core/Advanced)", "Spring Boot", "Hibernate", "Python", 
  "React JS", "Next.js", "TypeScript", "MySQL", "MongoDB", "Docker"
];

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0a0a0f]' : 'bg-slate-50'} font-sans overflow-x-hidden`}>
      
      {/* Cursor Glow Effect */}
      {isDark && (
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
          }}
        />
      )}

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-opacity-80 border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-black tracking-tighter text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            FM<span className="text-indigo-500">.</span>
          </motion.span>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-xl transition-all duration-300 ${isDark ? 'bg-slate-800/50 text-yellow-400 hover:bg-slate-700' : 'bg-white text-slate-600 shadow-lg border border-slate-200 hover:shadow-xl'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold"
            >
              <Terminal size={16} className="animate-pulse" /> 
              <span>Available for Relocation</span>
            </motion.div>
            
            <h1 className={`text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Fahad<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
                Mohammed.
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl max-w-3xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Computer Science Graduate specializing in building{' '}
              <span className="text-indigo-400 font-semibold">scalable</span>,{' '}
              <span className="text-purple-400 font-semibold">user-centric</span>{' '}
              software solutions using Java, Spring Boot, and modern web stacks.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fahdmhd1707@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-500/30 flex items-center gap-3"
              >
                <Mail size={20} /> 
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <div className="flex gap-3">
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://github.com/fhdMd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border transition-all ${isDark ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-slate-300' : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-lg'}`}
                >
                  <Github size={22} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="https://www.linkedin.com/in/fahad-mohammed-6650b4250/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border transition-all ${isDark ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-slate-300' : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-lg'}`}
                >
                  <Linkedin size={22} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-5xl font-black mb-16 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Featured Work
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((proj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-3xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10' 
                    : 'bg-white border-slate-200 hover:border-indigo-400 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Gradient Accent */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon Container */}
                    <div className={`${proj.title === "Soul Notes" ? 'p-1.5' : 'p-4'} ${proj.title === "Okiro Arise" ? 'bg-black' : `bg-gradient-to-br ${proj.gradient}`} rounded-2xl shadow-lg overflow-hidden w-16 h-16 flex items-center justify-center`}>
                      <img 
                        src={proj.image} 
                        alt={`${proj.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      {proj.links.github && (
                        <motion.a 
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          href={proj.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {proj.links.live && (
                        <motion.a 
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          href={proj.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {proj.title}
                  </h3>
                  
                  <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {proj.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                          isDark 
                            ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="flex gap-12 animate-scroll">
          {[...SKILLS, ...SKILLS].map((skill, i) => (
            <span 
              key={i} 
              className="text-white/95 font-black whitespace-nowrap text-3xl md:text-4xl tracking-tighter"
            >
              {skill} <span className="text-white/40">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`py-24 px-6 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className={`text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Interests: Swimming • Gaming • Philosophy
          </p>
          <div className={`flex flex-wrap justify-center gap-8 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <span>© {new Date().getFullYear()} Fahad Mohammed</span>
            <span>Thrissur, Kerala</span>
            <a href="tel:+918590288874" className="hover:text-indigo-500 transition-colors">+91 8590288874</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;