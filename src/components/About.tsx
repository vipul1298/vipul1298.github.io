import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Introduction</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              Experienced Flutter and Full-Stack Developer with 4+ years of expertise in mobile
              and web development. Proficient in Flutter, Dart, Kotlin, and cloud services like
              Firebase. Strong track record of delivering scalable apps and contributing to
              open-source libraries.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl text-white hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4">
              <GraduationCap size={40} className="flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-xl font-semibold mb-1">IIIT Bhubaneswar</p>
                <p className="text-blue-100 mb-2">Odisha, India</p>
                <p className="text-blue-50">
                  Bachelor of Technology in Computer Science & Engineering
                </p>
                <p className="text-blue-100 mt-2">Aug 2016 – Aug 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
