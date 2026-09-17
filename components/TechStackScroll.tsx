"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Java", role: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", role: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C / C++", role: "Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", role: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", role: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", role: "Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL / SQL", role: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Spring Boot", role: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Spring Data JPA", role: "ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
  { name: "FastAPI", role: "Async API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "React", role: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", role: "Fullstack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Docker", role: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", role: "VCS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

export function TechStackScroll() {
  return (
    <section id="stack" className="py-16 sm:py-20 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 mb-6 sm:mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted sm:pl-10">
          stack &amp; ecosystem
        </span>
        <h2
          className="my-2 font-display font-bold lowercase leading-[0.92] text-foreground sm:pl-10"
          style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
        >
          technologies
        </h2>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex select-none gap-3 sm:gap-4 py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex shrink-0 gap-3 sm:gap-4"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 sm:gap-3 rounded-full border border-border bg-surface px-4 py-2.5 sm:px-5 sm:py-3 backdrop-blur-md transition-colors hover:border-accent/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-display font-medium text-xs text-foreground">{skill.name}</span>
                <span className="font-mono text-[0.6rem] sm:text-[0.65rem] text-muted">{skill.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}