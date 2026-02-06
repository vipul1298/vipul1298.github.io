import { Code, Server, Wrench, Wallet } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Kotlin', 'Golang', 'Dart', 'Bash', 'JavaScript', 'HTML/CSS'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Backend & Cloud',
    icon: Server,
    skills: ['REST APIs', 'SQL', 'Firebase', 'Supabase', 'MVC Architecture', 'Postgres'],
    color: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Code,
    skills: ['React', 'Node', 'Flutter', 'Android'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'GitLab', 'CI/CD (GitHub Actions)', 'Postman', 'Crashlytics', 'TDD'],
    color: 'from-slate-600 to-slate-800',
  },
  {
    title: 'Payments & Analytics',
    icon: Wallet,
    skills: ['Razorpay', 'Stripe', 'Firebase Analytics', 'Remote Config', 'A/B Testing'],
    color: 'from-violet-600 to-pink-600',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
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
