import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full min-h-[60vh] bg-white flex flex-col items-center justify-center text-center p-8 space-y-4">
      <div className="text-brand-red font-extrabold text-6xl">404</div>
      <h1 className="text-2xl font-bold text-neutral-900">Page Not Found</h1>
      <p className="text-neutral-600 text-sm max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" className="bg-brand-red text-white px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors">
        Return to Home
      </Link>
    </div>
  );
}