import { Button } from '@/components/Button';
import { Mail, ChevronDown, FileSymlink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import Image from 'next/image';

const skillsRow1 = [
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Java', logo: '/logos/java.svg' },
  { name: 'C#', logo: '/logos/csharp.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Next.js', logo: '/logos/next.svg' },
  { name: 'Tailwind', logo: '/logos/tailwind.svg' },
];

const skillsRow2 = [
  { name: 'FastAPI', logo: '/logos/fastapi.svg' },
  { name: 'Spring', logo: '/logos/spring.png' },
  { name: '.NET', logo: '/logos/dotnet.png' },
  { name: 'PostgreSQL', logo: '/logos/postgres.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Podman', logo: '/logos/podman.svg' },
  { name: 'Kubernetes', logo: '/logos/kubernetes.png' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: '#20B2A6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • AI and React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Arsenios Hadjikyriacou — a full stack developer specializing in AI, LLMs, React and REST APIs.
                I build scalable, performant web applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  <span className="text-xl font-semibold">Contact Me</span>
                  <Mail className="w-8 h-8" />
                </Button>
              </a>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <FileSymlink className="w-8 h-8" /> 
                  <span className="text-xl font-semibold"> View CV</span>
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: 'https://github.com/ArseniosHadjikyriacou' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/arsenios-hadjikyriacou-0404bb161' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <Image
                  src="/profile-photo.jpg"
                  alt="Profile photo"
                  width={500}
                  height={625}
                  className="w-full aspect-4/5 rounded-2xl object-cover"
                  priority
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for development</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">Software</div>
                  <div className="text-xs text-muted-foreground">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden max-w-3xl lg:max-w-4xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
            
            {/* Row 1 */}
            <div className="flex w-max animate-marquee">
              {[...skillsRow1, ...skillsRow1].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-4 sm:px-6 md:px-8 py-2 md:py-4 flex items-center justify-center">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="h-8 sm:h-9 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                    title={skill.name}
                  />
                </div>
              ))}
            </div>

            {/* Row 2 - animates in reverse */}
            <div className="flex w-max animate-marquee-reverse">
              {[...skillsRow2, ...skillsRow2].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-4 sm:px-6 md:px-8 py-2 md:py-4 flex items-center justify-center">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="h-8 sm:h-9 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                    title={skill.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

    </section>
  );
};