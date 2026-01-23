'use client';

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "Working with Arsenios was a genuine pleasure, as he is an exceptional problem-solver. He exceeded all my expectations during his internship at the Digital Innovation Hub of Cyprus. He operated at the level of a seasoned developer—quickly understanding project needs, adapting seamlessly to the tech stack, and delivering a polished front-end solution far ahead of schedule. His adaptability across technologies, creativity, and strong delivery skills make him an outstanding developer.",
    author: 'Dr. Panayiota Katsamba',
    role: 'Lecturer, Department of Chemical Engineering, Cyprus University of Technology',
    avatar: '/testimonials/testimonial1.jpeg',
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      next();
    }, 10000); // Auto-advance every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, activeIdx]);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from <span className="font-serif italic font-normal text-white">amazing people.</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Carousel Container */}
            <div className="overflow-hidden pt-6">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIdx * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="min-w-full"
                  >
                    {/* Main Testimonial */}
                    <div className="glass p-8 rounded-3xl md:p-12 glow-border">
                      <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary-foreground" />
                      </div>

                      <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx ? 'w-8 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
