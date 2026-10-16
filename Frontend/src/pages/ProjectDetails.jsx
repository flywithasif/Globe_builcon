import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Calendar, Layers, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">{project.category}</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">{project.title}</h1>
          <p className="text-neutral-300 max-w-2xl text-base">{project.location}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-neutral-900">Project Overview</h2>
              <p className="text-neutral-600 leading-relaxed text-base">{project.description}</p>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-neutral-900">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, idx) => (
                    <img key={idx} src={imgUrl} alt={`${project.title} gallery ${idx + 1}`} className="rounded border border-neutral-200 h-48 w-full object-cover" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-brand-light p-6 rounded-lg border border-neutral-200 space-y-4">
              <h3 className="font-bold text-neutral-900 text-lg border-b border-neutral-200 pb-2">Project Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-neutral-700">
                  <MapPin size={16} className="text-brand-red shrink-0" />
                  <span><strong>Location:</strong> {project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <Layers size={16} className="text-brand-red shrink-0" />
                  <span><strong>Built Area:</strong> {project.area}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <Calendar size={16} className="text-brand-red shrink-0" />
                  <span><strong>Completion:</strong> {project.completion}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/request-quote" className="w-full text-center bg-brand-red text-white py-3 rounded font-semibold text-xs uppercase tracking-wider block hover:bg-red-700 transition-colors">
                  Build Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}