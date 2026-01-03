import React, { useState } from 'react';
import { companyInfo, team, projects } from './data';

// Import local video files
import localVideo from './assets/CODE.mp4';

const detailedServices = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "We build high-performance, SEO-optimized corporate websites and complex web applications using modern frameworks. Our focus is on scalability, security, and delivering a seamless user experience.",
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Create native and cross-platform mobile applications for iOS and Android. We ensure smooth performance and intuitive gestures using the latest technologies like Flutter and React Native.",
    tags: ["iOS", "Android", "Flutter"]
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Design isn't just about looks. We craft user-centric interfaces through deep research, wireframing, and prototyping to ensure your product is both beautiful and easy to use.",
    tags: ["Figma", "Prototyping", "Research"]
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure design and migration services. We help businesses leverage AWS or Azure for secure hosting, automated backups, and continuous integration.",
    tags: ["AWS", "Docker", "DevOps"]
  },
  {
    icon: "📊",
    title: "Data Visualization",
    desc: "Transform complex raw data into interactive, easy-to-understand dashboards. We help stakeholders make informed business decisions through real-time data insights.",
    tags: ["Big Data", "Dashboards", "Analytics"]
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Empower your business with intelligent algorithms. From customer service chatbots to predictive analytics, we integrate AI models to automate workflows and reduce costs.",
    tags: ["ML", "NLP", "Automation"]
  }
];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will contact you soon.`);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary">
      {/* 1. Navigation Bar */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.001c-1.226 1.037-2.685 1.844-4.282 2.373-2.11.699-4.48.678-6.635-.135-.266-.102-.462-.338-.518-.618l-.764-3.835a.75.75 0 00-.735-.603l-3.835-.764a.75.75 0 01-.618-.518c-.814-2.155-.834-4.525-.135-6.635.53-1.597 1.336-3.056 2.373-4.282V7.584zm-1.743 4.673a.75.75 0 00.735.603l3.835.764a.75.75 0 01.618.518c.814 2.155.834 4.525.135 6.635-.53 1.597-1.336 3.056-2.373 4.282v-.001c-2.88-3.702-7.38-6.085-12.435-6.085a.75.75 0 01-.75-.75c0-5.056 2.383-9.555 6.084-12.436h-.001c1.226-1.037 2.685-1.844 4.282-2.373 2.11-.699 4.48-.678 6.635.135.266.102.462.338.518.618l.764 3.835z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              {companyInfo.name}
            </h1>
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold">
            <a href="#services" className="hover:text-indigo-400 transition">Services</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Work</a>
            <a href="#video" className="hover:text-indigo-400 transition">Video</a>
            <a href="#team" className="hover:text-indigo-400 transition">Team</a>
            <a href="#contact" className="px-5 py-2.5 bg-indigo-600 rounded-full hover:bg-indigo-500 transition text-white shadow-lg shadow-indigo-500/30">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* 2. Home */}
      <header id="home" className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:w-3/5 space-y-8">
          <div className="inline-block px-4 py-1.5 text-xs font-bold border border-indigo-500/50 rounded-full text-indigo-300 bg-indigo-500/10 uppercase tracking-wider">
            🚀 Software Engineering Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
            {companyInfo.name}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            Crafting the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">intelligent code</span>.
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            To deliver scalable software that solves real-world business problems. We transform complex business challenges into elegant, scalable digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-indigo-500/25 text-center">
              Explore Projects
            </a>
            <a href="#contact" className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition text-center">
              Book Consultation
            </a>
          </div>

          <div className="pt-8 border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-[#1e293b] border border-white/5 text-center group hover:border-indigo-500/30 transition shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">8+</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">Systems</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#1e293b] border border-white/5 text-center group hover:border-indigo-500/30 transition shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">12+</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">Projects</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#1e293b] border border-white/5 text-center group hover:border-indigo-500/30 transition shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">100%</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">Responsive</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#1e293b] border border-white/5 text-center group hover:border-indigo-500/30 transition shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">1-2w</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">Delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
              alt="Software Code Screen" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/60 via-transparent to-indigo-500/10 pointer-events-none"></div>
          </div>
        </div>
      </header>

      {/* 3. Service Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide end-to-end digital solutions, combining strategic design with technical engineering to help modern businesses grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((s, i) => (
              <div 
                key={i} 
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/80 hover:bg-white/[0.05] hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300 shadow-inner">
                  {s.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                  {s.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                  {s.desc}
                </p>
                
                {/* Tab Bar */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {s.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Project Showcase */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-indigo-500 pl-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-[#0f172a]">
              <div className="h-72 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-bold border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">View Case</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{p.category}</span>
                <h3 className="text-2xl font-bold mt-3 mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Video Module */}
      <section id="video" className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Future in Motion</h2>
            <p className="text-gray-400">Visualizing the flow of global information networks.</p>
          </div>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/30 border border-white/10 group">
            
            <video 
              className="w-full aspect-video object-cover shadow-2xl"
              controls      
              loop          
              playsInline   
            >
              <source src={localVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-indigo-900/5 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 6. Team */}
      <section id="team" className="relative py-32 overflow-hidden bg-[#0f172a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-16">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">The Core Team</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 text-white">Meet the Builders</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((m) => (
              <div key={m.id} className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 transition duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
                <div className="relative p-8 bg-[#0b1120] rounded-[calc(1.5rem-1px)] h-full flex flex-col items-center text-center z-10">
                  <div className="relative w-36 h-36 mb-5 group-hover:scale-105 transition duration-500 shrink-0">
                    <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full group-hover:opacity-50 animate-pulse-slow transition"></div>
                    <img src={m.img} alt={m.name} className="relative w-full h-full rounded-full object-cover border-4 border-[#0f172a] ring-1 ring-white/10 group-hover:ring-indigo-400 transition" style={{ filter: 'contrast(1.1) brightness(0.9)' }} />
                  </div>
                  <div className="h-10 flex items-center justify-center w-full mb-2">
                    <h4 className="font-black text-2xl text-white tracking-tight uppercase">{m.name}</h4>
                  </div>
                  <div className="h-16 w-full flex items-start justify-center mb-5">
                    <div className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-flex items-center justify-center min-h-[34px]">
                      <p className="text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-300 leading-tight">
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 shrink-0"></div>
                  <div className="text-gray-400 text-sm leading-7 px-2 flex-grow">
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Form */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="flex-1 p-10 md:p-12 bg-indigo-900/20 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between backdrop-blur-sm">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Let's Talk</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Send us a message or contact us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/10 text-indigo-400">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Email</h3>
                      <p className="text-gray-400 text-sm">yiang5646@student.usm.my</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/10 text-indigo-400">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Office</h3>
                      <p className="text-gray-400 text-sm">Penang, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/10 text-indigo-400">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Phone</h3>
                      <p className="text-gray-400 text-sm">+60 1125945294</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-indigo-400 font-bold text-sm">Working Hours: 9 AM - 6 PM</p>
              </div>
            </div>

            <div className="flex-1 p-10 md:p-12 bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-white md:hidden">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="text-sm font-bold text-gray-400 ml-1 mb-1 block">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-indigo-500 outline-none transition text-white" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-gray-400 ml-1 mb-1 block">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your Email Address" 
                    required 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-indigo-500 outline-none transition text-white" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-400 ml-1 mb-1 block">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?" 
                    required 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-indigo-500 outline-none transition text-white resize-none" 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-lg font-bold text-white transition shadow-lg mt-2 transform hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/10 bg-[#0f172a]">
        <p>© 2025 ApexSoft Studio.</p>
      </footer>
    </div>
  );
}

export default App;