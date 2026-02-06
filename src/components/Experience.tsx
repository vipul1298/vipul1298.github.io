import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'GeekyAnts',
    role: 'Software Engineer - III',
    location: 'Bengaluru, IN (Remote)',
    period: 'Apr 2022 – Present',
    highlights: [
      'Built core features for chant, a football supporters platform: Event Check-in, Leaderboards, Match Predictions, Volunteers, Partners, Player of the Match',
      'Implemented multilingual support (English, Spanish, French) and match-day engagement modules on mobile and web',
      'Improved app performance by 20% via widget tree optimization, caching, and Flutter DevTools profiling',
      'Worked with Bloc & Provider for scalable state management; collaborated on CDN-backed media delivery and caching strategies',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer',
    location: 'Hyderabad (Remote)',
    period: 'May 2021 – Mar 2022',
    highlights: [
      'Supported enterprise systems by debugging and maintaining PL/SQL scripts and batch jobs',
    ],
  },
  {
    company: 'Slavefreetrade',
    role: 'Flutter Developer',
    location: 'Geneva, Switzerland (Remote)',
    period: 'Sept 2020 – Jan 2021',
    highlights: [
      'Developed an application primarily designed for conducting surveys, utilizing the Qualtrics API for dynamic question generation',
      'Designed the questions module from scratch and also did work on controllers for handling the same',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all ml-8 md:ml-0">
                <div className="absolute left-0 md:left-auto md:right-auto top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg transform md:translate-x-0"
                  style={{
                    left: index % 2 === 0 ? '-2.25rem' : 'auto',
                    right: index % 2 === 0 ? 'auto' : '-2.25rem',
                  }}
                ></div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span className="text-sm">{exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
