interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
