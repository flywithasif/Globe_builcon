import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  return (
    <div className="w-full bg-white text-neutral-900">
      
      {/* Hero Banner */}
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">About Us</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Building Quality & Architectural Excellence</h1>
          <p className="text-neutral-300 max-w-2xl text-base">
            Learn more about Globe Buildcon's commitment to precision engineering, transparent construction, and contemporary design in Lucknow.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Transforming Visions into Built Reality
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base">
              Globe Buildcon is a dedicated construction and architectural planning firm based in Lucknow. We design and execute high-end residential homes, modern duplexes, luxury interior setups, and commercial structures.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base">
              Our core approach rests on clear engineering standards, transparent estimates, certified raw materials, and strict adherence to project timelines.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-brand-light p-4 rounded border border-neutral-200">
                <Target className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Our Mission</h4>
                  <p className="text-xs text-neutral-600 mt-1">Deliver durable, beautifully designed spaces with complete financial and structural transparency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-brand-light p-4 rounded border border-neutral-200">
                <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Quality Standard</h4>
                  <p className="text-xs text-neutral-600 mt-1">Multi-point quality checks covering concrete grade, masonry, waterproofing, and finishing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl border border-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
              alt="Globe Buildcon Headquarters Lucknow" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-brand-light p-8 sm:p-12 rounded-xl border border-neutral-200 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-neutral-900">Our Core Principles</h3>
            <p className="text-sm text-neutral-600">How we maintain trust and quality in every build.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Transparent BOQ", desc: "Detailed breakdown of material quantities and costs before work begins." },
              { title: "Certified Raw Materials", desc: "Using verified grade steel, aggregate, non-porous bricks, and cement." },
              { title: "On-Site Supervision", desc: "Qualified site supervisors and engineers guiding daily execution." },
              { title: "Vastu & Modern Planning", desc: "Blending modern spatial aesthetics with Vastu principles." },
              { title: "Safety Compliance", desc: "Prioritizing worker safety protocols and structured site practices." },
              { title: "Timely Handover", desc: "Clear milestone deadlines ensuring projects are completed on schedule." }
            ].map((principle, index) => (
              <div key={index} className="bg-white p-5 rounded border border-neutral-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-base">
                  <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                  <span>{principle.title}</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}