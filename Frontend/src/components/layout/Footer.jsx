import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/services';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: About */}
          <div className="flex flex-col gap-4">
             {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/Logo/Buildconlogo.png" 
              alt="Globe Buildcon Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-brand-dark leading-tight tracking-tight group-hover:text-brand-red transition-colors">
                Globe Buildcon
              </span>
              <span className="text-[10px] text-brand-gray tracking-widest uppercase font-semibold">
                Building Tomorrow, Today.
              </span>
            </div>
          </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {siteConfig.tagline} {siteConfig.subTagline} Premier architectural planning, turnkey construction, and luxury interior design in Lucknow.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-brand-red text-white p-2.5 rounded transition-colors inline-flex items-center justify-center"
                aria-label="Instagram"
              >
                {/* Inline SVG for Instagram to avoid icon dependency issues */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-2 border-l-2 border-brand-red pl-3">
              Quick Links
            </h3>
            <Link to="/about" className="text-neutral-400 hover:text-white text-sm transition-colors">About Us</Link>
            <Link to="/services" className="text-neutral-400 hover:text-white text-sm transition-colors">Our Services</Link>
            <Link to="/projects" className="text-neutral-400 hover:text-white text-sm transition-colors">Project Portfolio</Link>
            <Link to="/process" className="text-neutral-400 hover:text-white text-sm transition-colors">Our Process</Link>
            <Link to="/contact" className="text-neutral-400 hover:text-white text-sm transition-colors">Contact Us</Link>
            <Link to="/request-quote" className="text-neutral-400 hover:text-white text-sm transition-colors">Request a Quote</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-2 border-l-2 border-brand-red pl-3">
              Expert Services
            </h3>
            {servicesData.slice(0, 5).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="text-neutral-400 hover:text-white text-sm transition-colors truncate"
              >
                {service.title}
              </Link>
            ))}
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-2 border-l-2 border-brand-red pl-3">
              Headquarters
            </h3>
            <div className="flex items-start gap-3 text-neutral-400 text-sm">
              <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400 text-sm">
              <Phone size={18} className="text-brand-red shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-neutral-400 text-sm">
              <Mail size={18} className="text-brand-red shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </div>
            <div className="flex items-center gap-3 text-neutral-400 text-sm pt-2">
              <Clock size={18} className="text-brand-red shrink-0" />
              <span>{siteConfig.workingHours}</span>
            </div>
          </div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Globe Buildcon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-neutral-300 transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}