'use client';

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Fintech Dashboard',
    description: 'An intelligent report generation tool, helping analysts create better financial reports faster using AI.',
    tags: ['LLMs', 'FastAPI', 'Podman'],
    link: '#projects',
    github: '#projects',
    image: '/projects/project1.png',
  },
  {
    title: 'Chess Application',
    description:
      'A chess app that also allows users to play a computer engine. Coming soon... accounts, game history.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: 'https://arsenioshadjikyriacou.github.io/chess-project-react/',
    github: 'https://github.com/ArseniosHadjikyriacou/chess-project-react',
    image: '/projects/project2.png',
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Auto-advance every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to AI tools that solve real-world problems.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="min-w-full"
                >
                  <div className="group glass rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                      {/* Overlay Links */}
                      <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
                        <a
                          href={project.link}
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                        <a
                          href={project.github}
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Next project"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
