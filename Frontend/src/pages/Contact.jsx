import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { contactService } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await contactService.submitContactForm(formData);
      setStatus({ type: 'success', msg: res.message });
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">Contact</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Get in Touch</h1>
          <p className="text-neutral-300 max-w-2xl text-base">
            Visit our office at Ansal Golf City or drop us a message for architectural and construction inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-neutral-900">Head Office Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-brand-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900">Office Address</h4>
                  <p className="text-neutral-600 text-sm mt-1">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={22} className="text-brand-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900">Phone Contact</h4>
                  <a href={`tel:${siteConfig.phone}`} className="text-neutral-600 text-sm mt-1 block hover:text-brand-red">{siteConfig.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={22} className="text-brand-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900">Email Address</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-neutral-600 text-sm mt-1 block hover:text-brand-red">{siteConfig.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-light p-8 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Send Us a Message</h3>
            
            {status && (
              <div className={`p-4 rounded text-xs font-semibold mb-6 ${status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Full Name *</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Phone Number *</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Email *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Subject</label>
                <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Message *</label>
                <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none"></textarea>
              </div>

              <button disabled={loading} type="submit" className="w-full bg-brand-red text-white py-3 rounded font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}