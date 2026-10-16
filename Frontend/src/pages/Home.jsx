import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, 
  ChevronDown, Phone, Home as HomeIcon, Compass, Building, 
  Palette, Wrench, Factory, Star 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const processSteps = [
    { number: "01", title: "Initial Consultation", desc: "Understanding your requirement, spatial needs, and budget frame." },
    { number: "02", title: "Site Assessment", desc: "Detailed soil check, architectural boundary layout, and feasibility report." },
    { number: "03", title: "Design & Planning", desc: "Creating 2D architectural blueprints and photorealistic 3D elevations." },
    { number: "04", title: "Estimate & Approval", desc: "Transparent BOQ, material specifications, and regulatory approvals." },
    { number: "05", title: "Construction & Execution", desc: "High-grade structural building executed by certified civil engineers." },
    { number: "06", title: "Quality Checks & Handover", desc: "Multi-point quality audits followed by timely key handover." }
  ];

  const faqs = [
    {
      q: "What architectural services does Globe Buildcon provide in Lucknow?",
      a: "We offer end-to-end architectural design, including 2D floor planning, 3D photorealistic exterior and interior elevations, structural engineering drawings, and Vastu-compliant residential layouts."
    },
    {
      q: "How does Globe Buildcon ensure construction quality and material standards?",
      a: "We strictly use certified Grade 53 cement, branded steel, non-porous bricks, and conduct multi-tier quality checks at every construction stage from foundation to finishing."
    },
    {
      q: "Can I request a custom 3D design before starting actual home construction?",
      a: "Yes! Our Architectural Design & 3D Planning service allows you to view photorealistic renders and virtual walkthroughs before physical construction begins."
    },
    {
      q: "How can I request a detailed cost quotation for my residential project?",
      a: "You can click on the 'Request a Quote' button on our website, fill out your project details (area, location, budget, type), or visit our Lucknow office at Ansal Golf City for a consultation."
    }
  ];

  return (
    <div className="w-full bg-white text-neutral-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-dark text-white overflow-hidden py-20 px-4 sm:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" 
            alt="Globe Buildcon Luxury Villa Lucknow" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 rounded-full text-brand-red text-xs font-semibold uppercase tracking-widest">
              <span>Leading Construction & Architecture in Lucknow</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              {siteConfig.tagline}
            </h1>
            
            <p className="text-lg text-neutral-300 font-normal leading-relaxed">
              From thoughtful architectural planning to quality construction and beautiful interiors, we help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/request-quote"
                className="bg-brand-red hover:bg-red-700 text-white text-center font-semibold px-8 py-4 rounded transition-all shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-2 text-base"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="bg-neutral-800/80 hover:bg-neutral-800 text-white text-center font-semibold px-8 py-4 rounded border border-neutral-700 transition-all text-base"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-brand-red font-bold text-sm tracking-widest uppercase">
              About Globe Buildcon
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
              Your Vision. Our Expertise.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base">
              Globe Buildcon is a premier construction and architectural design studio based in Lucknow, Uttar Pradesh. Specializing in luxury residential construction, modern architectural planning, interior styling, and structural renovations, we blend engineering precision with contemporary aesthetics.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base">
              Located at Ansal Golf City, we serve clients across Lucknow with transparency, strict material standards, and dedicated project management.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-red text-white font-medium px-6 py-3 rounded transition-colors text-sm"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Architecture Lucknow" 
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 rounded-lg shadow-xl hidden sm:block max-w-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-red-200">Our Commitment</div>
              <div className="text-sm font-semibold mt-1">Quality construction, precise planning, and transparent communication.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 px-4 sm:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-brand-red font-bold text-sm tracking-widest uppercase">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Our Comprehensive Services
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              End-to-end architectural, construction, and interior solutions designed for elegance and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-neutral-200/80 transition-all flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-red-800 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-brand-red font-bold text-sm tracking-widest uppercase">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Featured Projects
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl">
              Explore our recent residential and commercial developments designed and built across Lucknow.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group relative rounded-lg overflow-hidden shadow-lg bg-neutral-900 text-white">
              <div className="h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6">
                <div className="text-brand-red text-xs font-bold uppercase tracking-wider mb-1">
                  {project.category} • {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-300 text-xs line-clamp-2 mb-4">{project.description}</p>
                
                <div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-white bg-brand-red hover:bg-red-700 text-xs font-semibold px-4 py-2 rounded transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section className="py-20 px-4 sm:px-8 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-brand-red font-bold text-sm tracking-widest uppercase">
              How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Our Step-by-Step Process
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              A structured roadmap ensuring transparency, precision engineering, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 space-y-4">
                <div className="text-brand-red font-extrabold text-3xl">{step.number}</div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US & QUALITY */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-brand-red font-bold text-sm tracking-widest uppercase">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Uncompromising Quality and Clear Execution
            </h2>
            
            <div className="space-y-4 pt-2">
              {[
                { title: "Quality-Focused Execution", desc: "Certified steel, aggregate, and masonry tested for structural strength." },
                { title: "Transparent Communication", desc: "Clear BOQs and scheduled progress updates at every milestone." },
                { title: "Careful Planning", desc: "3D visualization and precise architectural calculations before building." },
                { title: "Safety-Conscious Practices", desc: "Rigorous safety compliance for site engineers and workers." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-neutral-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-light p-8 rounded-xl border border-neutral-200 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={32} className="text-brand-red" />
              <h3 className="text-2xl font-bold text-neutral-900">Quality & Safety First</h3>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              At Globe Buildcon, we follow strict building standards in Lucknow. Our engineering team conducts multi-point quality audits across raw materials, brick masonry, structural casting, and final waterproofing.
            </p>
            <div className="border-t border-neutral-200 pt-4 text-xs text-neutral-500 font-medium">
              • ISO compliant material standards • Regular structural strength checks • On-time project coordination
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="py-20 px-4 sm:px-8 bg-brand-light">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="text-brand-red font-bold text-sm tracking-widest uppercase">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 font-bold text-neutral-900 flex justify-between items-center gap-4 hover:text-brand-red"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-brand-red' : 'text-neutral-400'}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-neutral-600 border-t border-neutral-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 px-4 sm:px-8 bg-brand-red text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            Let’s Build Something Beautiful Together.
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to plan your modern home, commercial structure, or luxury interior in Lucknow? Get in touch with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/request-quote"
              className="w-full sm:w-auto bg-brand-dark hover:bg-black text-white font-semibold px-8 py-4 rounded shadow-lg transition-colors text-base"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-brand-red font-semibold px-8 py-4 rounded transition-colors text-base flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>Call Our Team</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}