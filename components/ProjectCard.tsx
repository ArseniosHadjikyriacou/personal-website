interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a 
          href={githubUrl}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
        <a 
          href={liveUrl}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo →
        </a>
      </div>
    </div>
  );
}
