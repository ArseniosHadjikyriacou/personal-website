import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arsenios</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              Full Stack Developer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Passionate about building modern web applications with clean code.
            </p>
            <a 
              href="#about" 
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Learn More About Me
            </a>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                I'm a full stack developer with a passion for creating elegant solutions to complex problems. 
                I enjoy working with modern technologies and constantly learning new skills.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                My journey in web development started with a curiosity about how websites work, and has grown into 
                a deep appreciation for both frontend aesthetics and backend architecture.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 h-64 flex items-center justify-center">
              <p className="text-slate-400 dark:text-slate-500 text-center">Your photo or illustration here</p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" className="bg-white dark:bg-slate-800/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Frontend</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 & CSS3</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Backend</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Git & GitHub</li>
                <li>• Docker</li>
                <li>• REST APIs</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="E-Commerce Platform"
              description="A full-stack e-commerce application with user authentication, product management, and secure payment processing."
              technologies={['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe']}
              githubUrl="#"
              liveUrl="#"
            />
            
            <ProjectCard 
              title="Task Management App"
              description="A collaborative task management tool with real-time updates, team workspaces, and progress tracking."
              technologies={['React', 'Node.js', 'MongoDB', 'Socket.io']}
              githubUrl="#"
              liveUrl="#"
            />
            
            <ProjectCard 
              title="Weather Dashboard"
              description="A beautiful weather application that displays current conditions and forecasts with interactive maps."
              technologies={['React', 'TypeScript', 'API Integration', 'Tailwind']}
              githubUrl="#"
              liveUrl="#"
            />
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 mb-4">Get in touch</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">Email</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
            <p className="text-slate-500 text-sm">© 2026 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
