import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Interiors"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">Portfolio</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Portfolio</h1>
          <p className="text-neutral-300 max-w-2xl text-base">
            Showcasing residential villas, commercial structures, and interior designs executed across Lucknow.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${filter === cat ? 'bg-brand-red text-white' : 'bg-brand-light text-neutral-700 hover:bg-neutral-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-neutral-900 text-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-brand-red text-xs font-bold uppercase">{project.category} • {project.location}</div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-neutral-400 text-xs">{project.description}</p>
                <div className="pt-2">
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-400">
                    <span>View Project Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}