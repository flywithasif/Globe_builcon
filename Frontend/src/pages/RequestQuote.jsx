import React, { useState } from 'react';
import { contactService } from '../services/api';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', projectType: 'Complete Construction', location: 'Lucknow', propertyType: 'Residential', area: '', budget: '', description: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await contactService.submitQuoteForm(formData);
      setStatus({ type: 'success', msg: res.message });
      setFormData({ name: '', phone: '', email: '', projectType: 'Complete Construction', location: 'Lucknow', propertyType: 'Residential', area: '', budget: '', description: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Submission failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">Quotation</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Request a Quote</h1>
          <p className="text-neutral-300 max-w-2xl text-base">
            Fill out your building specifications below and our structural team will formulate a preliminary proposal.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-3xl mx-auto">
        <div className="bg-brand-light p-8 rounded-xl border border-neutral-200">
          
          {status && (
            <div className={`p-4 rounded text-xs font-semibold mb-6 ${status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Full Name *</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Phone *</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Email *</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Project Type</label>
                <select value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none">
                  <option>Complete Construction</option>
                  <option>Home Designing & 3D</option>
                  <option>Interior Design</option>
                  <option>Renovation & Remodeling</option>
                  <option>Commercial Building</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Approx Plot Area (sq.ft)</label>
                <input type="text" placeholder="e.g. 1800 sq ft" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Budget Range</label>
                <input type="text" placeholder="e.g. 40 - 50 Lakhs" value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Project Details</label>
              <textarea rows="4" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Mention plot location in Lucknow, floors required, timeline..." className="w-full p-3 text-sm border border-neutral-300 rounded focus:border-brand-red focus:outline-none"></textarea>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-brand-red text-white py-3 rounded font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors">
              {loading ? 'Submitting Quote Request...' : 'Submit Quote Request'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}