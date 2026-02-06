import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-950 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 dark:bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-500 transition-colors">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:chaurasiavipul007@gmail.com"
                className="flex items-center gap-3 text-slate-300 dark:text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-700 dark:bg-slate-600 rounded-lg group-hover:bg-slate-600 dark:group-hover:bg-slate-500 transition-colors">
                  <Mail size={20} />
                </div>
                <span>chaurasiavipul007@gmail.com</span>
              </a>
              <a
                href="tel:+917978729788"
                className="flex items-center gap-3 text-slate-300 dark:text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-700 dark:bg-slate-600 rounded-lg group-hover:bg-slate-600 dark:group-hover:bg-slate-500 transition-colors">
                  <Phone size={20} />
                </div>
                <span>+91 7978729788</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 dark:bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-500 transition-colors">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/vipul1298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 dark:text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-700 dark:bg-slate-600 rounded-lg group-hover:bg-slate-600 dark:group-hover:bg-slate-500 transition-colors">
                  <Github size={20} />
                </div>
                <span>github.com/vipul1298</span>
              </a>
              <a
                href="https://linkedin.com/in/vipul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 dark:text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-700 dark:bg-slate-600 rounded-lg group-hover:bg-slate-600 dark:group-hover:bg-slate-500 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span>linkedin.com/in/vipul</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 dark:text-slate-400 mb-4">
            Open to opportunities and collaborations
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-blue-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 dark:border-slate-600 text-center text-slate-400 dark:text-slate-400 text-sm">
          <p>© 2024 Vipul Chaurasia. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
