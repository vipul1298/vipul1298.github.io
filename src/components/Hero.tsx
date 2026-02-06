import { Github, Linkedin, Mail, Phone, ChevronDown, Moon, Sun } from 'lucide-react';
import { UseTheme } from '../hooks/UseTheme.ts';

export default function Hero() {
  const { isDark, toggleTheme } = UseTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="absolute top-8 right-8 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun size={24} className="text-yellow-500" />
        ) : (
          <Moon size={24} className="text-slate-700" />
        )}
      </button>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Vipul Chaurasia
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-light mb-8">
            Flutter & Full-Stack Developer
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            4+ years of expertise in mobile and web development. Building scalable apps
            and contributing to open-source libraries with passion and precision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          <a
            href="mailto:chaurasiavipul007@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href="https://github.com/vipul1298"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vipul-chaurasia-5a950a161/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+917978729788"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <Phone size={20} />
            <span>+91 7978729788</span>
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="text-slate-600 dark:text-slate-400" />
      </button>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}
