import React, { useState } from 'react';
import {
  Send,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToastMessage(
        `Thank you ${formData.name}! Your message has been received. I will reply to ${formData.email} soon.`
      );
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const socialItems = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: personalData.socials.github,
      handle: personalData.socialHandles.github,
      color: 'hover:text-white hover:border-slate-500'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: personalData.socials.linkedin,
      handle: personalData.socialHandles.linkedin,
      color: 'hover:text-sky-400 hover:border-sky-500/40'
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      href: personalData.socials.instagram,
      handle: personalData.socialHandles.instagram,
      color: 'hover:text-pink-400 hover:border-pink-500/40'
    },
    {
      name: 'Email',
      icon: Mail,
      href: personalData.socials.email,
      handle: personalData.socialHandles.email,
      color: 'hover:text-[#ff7a59] hover:border-orange-500/40'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#090d14]/90 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff7a59] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's <span className="coral-gradient-text">Connect</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Have a project, collaboration, or opportunity? Feel free to get in touch.
          </p>
          <div className="w-16 h-1 coral-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* Contact Grid: Form on Left/Right, Socials & Info on other side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#ff7a59]" />
                <span>Contact Channels</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you're interested in discussing computer networking, cloud setups, server administration, or prospective internships, I'm always open to talking tech.
              </p>

              {/* Status and Info Rows */}
              <div className="space-y-4 pt-2 border-t border-white/10 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-[#ff7a59]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-sans font-bold">Email Direct</div>
                    <a
                      href={personalData.socials.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-[#ff7a59] transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-sans font-bold">Response Time</div>
                    <div className="text-slate-200">Within 24 Hours (GMT+7)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-sans font-bold">Location</div>
                    <div className="text-slate-200">Indonesia (Open to Remote / On-Site)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Social Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 rounded-xl bg-slate-900/60 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-3 ${item.color}`}
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 text-slate-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-display">
                          {item.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300">
                          {item.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl shadow-black/40 relative">
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-display font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out the form below and I will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300">
                    Your Name <span className="text-[#ff7a59]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500/80 focus:ring-1 focus:ring-orange-500/80 transition-all duration-200"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300">
                    Your Email <span className="text-[#ff7a59]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500/80 focus:ring-1 focus:ring-orange-500/80 transition-all duration-200"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
                    Your Message <span className="text-[#ff7a59]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project, idea, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500/80 focus:ring-1 focus:ring-orange-500/80 transition-all duration-200 resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full font-bold text-sm uppercase tracking-wider text-white coral-gradient coral-gradient-hover glow-coral-sm hover:glow-coral transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2 shadow-xl shadow-orange-500/20 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Transmitting Packet...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </section>
  );
};

export default Contact;
