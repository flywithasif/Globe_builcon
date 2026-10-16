import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/services';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
    

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 bg-white ${isScrolled ? 'shadow-md py-2' : 'py-3 border-b border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-neutral-700">
            <Link to="/" className={`hover:text-brand-red transition-colors ${location.pathname === '/' ? 'text-brand-red font-semibold' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-brand-red transition-colors ${location.pathname === '/about' ? 'text-brand-red font-semibold' : ''}`}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group" 
                 onMouseEnter={() => setServicesDropdownOpen(true)}
                 onMouseLeave={() => setServicesDropdownOpen(false)}>
              <Link to="/services" className={`flex items-center gap-1 hover:text-brand-red transition-colors py-2 ${location.pathname.startsWith('/services') ? 'text-brand-red font-semibold' : ''}`}>
                Services <ChevronDown size={14} />
              </Link>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg border border-neutral-100 py-2 z-50">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-brand-red transition-colors border-b border-neutral-50 last:border-0"
                    >
                      <div className="font-semibold">{service.title}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" className={`hover:text-brand-red transition-colors ${location.pathname.startsWith('/projects') ? 'text-brand-red font-semibold' : ''}`}>
              Projects
            </Link>
            <Link to="/process" className={`hover:text-brand-red transition-colors ${location.pathname === '/process' ? 'text-brand-red font-semibold' : ''}`}>
              Our Process
            </Link>
            <Link to="/contact" className={`hover:text-brand-red transition-colors ${location.pathname === '/contact' ? 'text-brand-red font-semibold' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/request-quote"
              className="bg-brand-red hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded text-sm transition-all shadow-sm hover:shadow flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-brand-red transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-2xl py-6 px-6 flex flex-col gap-4">
            <Link to="/" className="text-base font-medium py-2 border-b border-neutral-100 hover:text-brand-red">
              Home
            </Link>
            <Link to="/about" className="text-base font-medium py-2 border-b border-neutral-100 hover:text-brand-red">
              About Us
            </Link>
            
            <div className="py-2 border-b border-neutral-100">
              <div className="text-base font-medium text-neutral-900 mb-2">Services</div>
              <div className="pl-4 flex flex-col gap-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="text-sm text-neutral-600 hover:text-brand-red py-1"
                  >
                    • {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/projects" className="text-base font-medium py-2 border-b border-neutral-100 hover:text-brand-red">
              Projects
            </Link>
            <Link to="/process" className="text-base font-medium py-2 border-b border-neutral-100 hover:text-brand-red">
              Our Process
            </Link>
            <Link to="/contact" className="text-base font-medium py-2 border-b border-neutral-100 hover:text-brand-red">
              Contact
            </Link>

            <Link
              to="/request-quote"
              className="mt-2 bg-brand-red text-white text-center py-3 rounded font-medium shadow"
            >
              Request a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}