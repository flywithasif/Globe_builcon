import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation & Concept Brief",
      desc: "We discuss your layout preferences, family requirements, plot orientation, budget targets, and timeline constraints."
    },
    {
      step: "02",
      title: "Site Assessment & Soil Testing",
      desc: "Our engineering team evaluates boundary measurements, soil load-capacity, setback compliance, and local authority guidelines."
    },
    {
      step: "03",
      title: "Architectural Design & 3D Planning",
      desc: "We generate 2D floor plans, elevation options, and photorealistic 3D renders so you can visualize every detail."
    },
    {
      step: "04",
      title: "BOQ Estimation & Approval",
      desc: "Transparent material specification breakdown (BOQ) with fixed milestone payment schedules before starting construction."
    },
    {
      step: "05",
      title: "Construction & Structural Execution",
      desc: "Foundation excavation, RCC column casting, brick masonry, plumbing, electrical conduit fitting, and plaster work."
    },
    {
      step: "06",
      title: "Finishing, Quality Audits & Handover",
      desc: "Tile installation, painting, false ceiling, sanitary fittings, multi-tier quality checks, and clean final handover."
    }
  ];

  return (
    <div className="w-full bg-white text-neutral-900">
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-8 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-brand-red font-bold text-xs tracking-widest uppercase">Workflow</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Construction Process</h1>
          <p className="text-neutral-300 max-w-2xl text-base">
            From initial sketch to final key handover, discover how we maintain quality and precision at every milestone.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
        <div className="space-y-8">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col md:flex-row gap-6 p-6 bg-brand-light rounded-lg border border-neutral-200">
              <div className="text-brand-red font-extrabold text-4xl shrink-0">
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-brand-red text-white p-8 rounded-lg space-y-4">
          <h3 className="text-2xl font-bold">Ready to start step 1 with our team?</h3>
          <p className="text-white/90 text-sm">Schedule an initial consultation at our Ansal Golf City office in Lucknow.</p>
          <div>
            <Link to="/request-quote" className="inline-block bg-brand-dark text-white px-6 py-3 rounded font-semibold text-sm hover:bg-black transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}