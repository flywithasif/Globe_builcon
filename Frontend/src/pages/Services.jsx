import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">Expertise</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Specialized Services</h1>
          <p className="text-neutral-300 max-w-2xl text-base">
            Comprehensive architectural planning, residential home construction, interior design, and structural remodeling in Lucknow.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-600 text-sm">{service.shortDesc}</p>
                </div>
                <Link to={`/services/${service.id}`} className="inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:underline pt-2">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}