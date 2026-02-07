import { ExternalLink, Package, Smartphone, Globe } from 'lucide-react';

interface Project {
  title: string;
  type: string;
  icon: 'package' | 'smartphone' | 'globe';
  description: string;
  highlights: string[];
  links: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: 'Flutter Multi Scroll Table',
    type: 'Flutter Package',
    icon: 'package',
    description:
      'A comprehensive solution for displaying scrollable tables in both vertical and horizontal directions, ideal for large datasets with fixed columns for row indexing.',
    highlights: [
      'Implemented end-to-end logic for the package',
      'Published on pub.dev with production-ready features',
      'Supports complex table layouts with fixed columns',
    ],
    links: [{ label: 'pub.dev', url: 'https://pub.dev/packages/flutter_multi_scroll_table' }],
  },
  {
    title: 'CarVaidya Partner',
    type: 'Flutter App',
    icon: 'smartphone',
    description:
      'A comprehensive car inspection app that simplifies vehicle inspections for individuals and businesses.',
    highlights: [
      'Developed end-to-end workflow with image/video capture',
      'Implemented inspection questions and seamless data upload',
      'Generates detailed reports for vehicle condition tracking',
    ],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.cv.partner' }],
  },
  {
    title: 'Resume Analyzer',
    type: 'Full-Stack App',
    icon: 'globe',
    description:
      'An AI-powered resume analyzer that provides ATS-style scores and feedback using Google Gemini.',
    highlights: [
      'Built with React/Vite frontend and Express backend',
      'Implemented JWT authentication and file parsing (PDF/DOCX)',
      'Persisted data in PostgreSQL using Prisma with protected API endpoints',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/vipul1298/Resume-Analyzer' }],
  },
];

const iconMap = {
  package: Package,
  smartphone: Smartphone,
  globe: Globe,
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-auto">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold hover:underline"
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
