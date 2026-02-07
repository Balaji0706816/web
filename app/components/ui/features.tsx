
import React from 'react';
import Container from './container';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    title: "Light Speed Performance",
    description: "Built on top of React 18 for blistering fast load times and interaction responses.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Enterprise Security",
    description: "Your data is protected with industry-standard encryption and security protocols.",
    icon: <Shield className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Mobile First Design",
    description: "Completely responsive out of the box. Looks amazing on iPhones, Androids, and tablets.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Global Infrastructure",
    description: "Deploy your web apps globally with our optimized edge network.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5">
              <div className={`${feature.bg} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
