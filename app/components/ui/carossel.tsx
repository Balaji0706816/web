
import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define Slide type locally if ../types is missing
type Slide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  tags: string[];
};

export default function Carousel() {
  const slides: Slide[] = useMemo(
    () => [
      { 
        id: 1, 
        title: "Nexus Prime", 
        subtitle: "Infrastructure • Predictive Scaling",
        description: "Autonomous server infrastructure that predicts traffic spikes and scales resources before the load hits.",
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        tags: ["Kubernetes", "Time-series", "Rust"]
      },
      { 
        id: 2, 
        title: "Lumina Intelligence", 
        subtitle: "Manufacturing • Edge Vision",
        description: "Real-time defect detection for high-speed production lines using edge-deployed computer vision models.",
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        tags: ["PyTorch", "OpenCV", "NVIDIA Jetson"]
      },
      { 
        id: 3, 
        title: "Aether Chat", 
        subtitle: "Customer Experience • NLP",
        description: "Enterprise-grade conversational agent that integrates with legacy CRMs to automate 70% of support queries.",
        src: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200",
        tags: ["Transformers", "PostgreSQL", "Next.js"]
      },
      { 
        id: 4, 
        title: "Quantith Data Lake", 
        subtitle: "Analytics • Knowledge Graph",
        description: "Mapping billion-point relationships across disparate data sources to surface hidden market opportunities.",
        src: "https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=1200",
        tags: ["Neo4j", "Apache Spark", "Python"]
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div className="w-full max-w-xl mx-auto glass-card rounded-3xl shadow-2xl overflow-hidden relative group border border-slate-800/50">
      {/* Simulation Bar */}
      <div className="h-12 border-b border-slate-800/60 bg-slate-900/40 flex items-center px-6 gap-2 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
        </div>
        <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
          System Status: Optimal • {slides[index].title}
        </div>
        <div className="w-12"></div>
      </div>

      {/* Main Viewport */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-slate-950 overflow-hidden">
        <div
          className="h-full w-full flex transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.id} className="relative w-full shrink-0 h-full">
              <img
                src={s.src}
                alt={s.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
              />
              {/* Intelligent Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
              
              {/* Information Layer */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-cyan-500"></span>
                    <span className="text-cyan-400 text-xs font-black tracking-[0.2em] uppercase">
                      {s.subtitle}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {s.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Overlays */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-white/10 text-white translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-white/10 text-white -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dynamic Progress Indicator */}
        <div className="absolute bottom-8 left-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`group/dot h-2 rounded-full transition-all duration-500 overflow-hidden ${
                i === index ? "w-12 bg-white/20" : "w-2 bg-white/10 hover:bg-white/30"
              }`}
            >
              {i === index && (
                <div className="h-full bg-cyan-500 animate-[progress_6s_linear]" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
