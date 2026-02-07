"use client";
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-heading font-bold">Message Received!</h1>
          <p className="text-slate-400">Our team will reach out to you within 24 business hours to schedule a discovery call.</p>
          <button 
            onClick={() => setFormStatus('idle')}
            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Header */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-heading font-bold">Let's build <br /> something.</h1>
                <p className="text-slate-400 text-lg max-w-lg">
                  Ready to transform your business with AI? Fill out the form or reach out directly to start the conversation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-indigo-600/10 border border-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Email us</h4>
                    <p className="text-lg font-bold text-white">hello@webaigen.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-purple-600/10 border border-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Live Chat</h4>
                    <p className="text-lg font-bold text-white">m.me/webaigen</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Our Studio</h4>
                    <p className="text-lg font-bold text-white">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Service Required</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                      <option className="bg-slate-900">AI Native Development</option>
                      <option className="bg-slate-900">Digital Transformation</option>
                      <option className="bg-slate-900">AI Strategy Consulting</option>
                      <option className="bg-slate-900">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Project Details</label>
                    <textarea 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors h-32 resize-none"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
