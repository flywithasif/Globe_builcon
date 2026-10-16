import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { servicesData } from '../data/services';
import { siteConfig } from '../data/siteConfig';

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">Service Overview</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">{service.title}</h1>
          <p className="text-neutral-300 max-w-2xl text-base">{service.shortDesc}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Comprehensive Solutions</h2>
            <p className="text-neutral-600 text-base leading-relaxed">{service.overview}</p>
            
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-neutral-900">Key Service Benefits</h3>
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                  <CheckCircle2 size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link to="/request-quote" className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded font-semibold text-sm hover:bg-red-700 transition-colors">
                <span>Request Quote for {service.title}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-80 object-cover" />
            </div>

            <div className="bg-brand-light p-6 rounded-lg border border-neutral-200 space-y-4">
              <h4 className="font-bold text-neutral-900">Have specific questions?</h4>
              <p className="text-xs text-neutral-600">Speak directly with our technical engineering team in Lucknow.</p>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 text-brand-red font-bold text-sm">
                <Phone size={16} />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}