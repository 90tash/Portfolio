"use client";

import { useState } from "react";
import { GraduationCap, Award, ExternalLink, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
  {
    institution: "C.V. Raman Global University",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Bhubaneswar, Odisha",
    period: "2023 – 2027 (Active)",
    score: "CGPA: 8.19 / 10",
    coursework: "Data Structures & Algorithms, OOP, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.",
  },
  {
    institution: "Bridgewell Global School",
    degree: "Intermediate (PCM – Physics, Chemistry, Mathematics)",
    location: "Bhubaneswar, Odisha",
    period: "2021 – 2023",
    score: "70%",
    coursework: "CBSE Curriculum with strong foundations in calculus, physics, and analytical problem solving.",
  },
  {
    institution: "Nalanda Public School",
    degree: "High School Matriculation (Class X)",
    location: "Cuttack, Odisha",
    period: "2020 – 2021",
    score: "86%",
    coursework: "CBSE Board with distinction in mathematics, science, and computer foundations.",
  },
];

const certificationsData = [
  {
    title: "Introduction to Cloud 101",
    issuer: "AWS Educate",
    desc: "Cloud architecture foundations, compute infrastructure, security models, and cloud storage paradigms.",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera · Google",
    desc: "Automated scripting, operating system interfaces, version control with Git, and system troubleshooting.",
  },
  {
    title: "Building Intelligent Agents",
    issuer: "OpenAI",
    desc: "Autonomous agent workflows, function calling, tool augmentation, and orchestration patterns.",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    desc: "Core AI algorithms, neural network fundamentals, predictive modeling, and applied machine learning.",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    desc: "Network defense mechanisms, security threats, cryptographic concepts, and secure software hygiene.",
  },
  {
    title: "Generative AI & Prompt Engineering",
    issuer: "Cognizant SkillSpring",
    desc: "Prompt structuring, LLM attention mechanisms, in-context learning, and enterprise generative AI solutions.",
  },
];

const profilesData = [
  {
    name: "Codolio",
    handle: "@ashorwott",
    url: "https://codolio.com/profile/ashorwott",
    highlight: "Unified CP Track",
    desc: "Centralized CP tracker aggregating global ratings, contest analytics & streaks.",
  },
  {
    name: "LeetCode",
    handle: "@90tash",
    url: "https://leetcode.com/90tash",
    highlight: "1471 Rating · Top 4.8k",
    desc: "Consistent daily problem solving in dynamic programming, graphs, and greedy algorithms.",
  },
  {
    name: "Codeforces",
    handle: "@ashorwott",
    url: "https://codeforces.com/profile/ashorwott",
    highlight: "Contest Sparring",
    desc: "Active participation in Div. 2 & Div. 3 timed algorithmic competitive rounds.",
  },
  {
    name: "CodeChef",
    handle: "@ashorwott",
    url: "https://www.codechef.com/users/ashorwott",
    highlight: "Rated Division",
    desc: "Monthly Cook-Offs and Starters competitions focusing on math and optimization.",
  },
  {
    name: "HackerRank",
    handle: "@hazardous_ash",
    url: "https://www.hackerrank.com/profile/hazardous_ash",
    highlight: "Gold Badges",
    desc: "Gold stars earned in Core Java, Problem Solving, and Algorithms foundations.",
  },
];

type TabType = "education" | "certs" | "profiles";
const TABS: TabType[] = ["education", "certs", "profiles"];

export function CredentialsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("education");
  const [direction, setDirection] = useState<number>(0);

  const handleTabChange = (newTab: TabType) => {
    const currentIndex = TABS.indexOf(activeTab);
    const newIndex = TABS.indexOf(newTab);
    if (currentIndex !== newIndex) {
      setDirection(newIndex > currentIndex ? 1 : -1);
      setActiveTab(newTab);
    }
  };

  return (
    <section id="credentials" className="px-5 py-16 sm:px-10 sm:py-20 sm:pb-24 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted sm:pl-10">
              academic &amp; verified background
            </span>
            <h2
              className="my-2 font-display font-bold lowercase leading-[0.92] text-foreground sm:pl-10"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              credentials &amp; footprints
            </h2>
          </div>

          {/* Segmented Tab Controls - Fully responsive with sliding pill */}
          <div className="glass inline-flex shrink-0 items-center gap-1 rounded-full p-1.5 sm:p-2 overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => handleTabChange("education")}
              className={`relative flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 text-[0.72rem] sm:text-xs font-mono transition-colors ${
                activeTab === "education"
                  ? "text-white font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeCredentialsTab"
                  className="glass-accent absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <GraduationCap className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10 whitespace-nowrap">education</span>
            </button>

            <button
              onClick={() => handleTabChange("certs")}
              className={`relative flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 text-[0.72rem] sm:text-xs font-mono transition-colors ${
                activeTab === "certs"
                  ? "text-white font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {activeTab === "certs" && (
                <motion.div
                  layoutId="activeCredentialsTab"
                  className="glass-accent absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Award className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10 whitespace-nowrap">certifications</span>
            </button>

            <button
              onClick={() => handleTabChange("profiles")}
              className={`relative flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 text-[0.72rem] sm:text-xs font-mono transition-colors ${
                activeTab === "profiles"
                  ? "text-white font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {activeTab === "profiles" && (
                <motion.div
                  layoutId="activeCredentialsTab"
                  className="glass-accent absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Code2 className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10 whitespace-nowrap">cp footprints</span>
            </button>
          </div>
        </div>

        {/* Animated Tab Content with Adaptable Height and Horizontal Slide */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeTab === "education" && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                  {educationData.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8 flex flex-col justify-between transition-colors"
                    >
                      <div>
                        <span className="font-mono text-xs text-accent">{item.period}</span>
                        <h3 className="mt-2 font-display text-lg sm:text-xl font-bold lowercase text-foreground">
                          {item.institution}
                        </h3>
                        <p className="mt-1 text-xs text-muted font-medium">{item.degree}</p>
                        <p className="my-3 font-mono text-xs font-medium text-accent">
                          {item.score}
                        </p>
                        <p className="text-xs text-muted leading-relaxed">{item.coursework}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-border text-[0.7rem] font-mono text-muted">
                        📍 {item.location}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certs" && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                  {certificationsData.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-accent/40"
                    >
                      <div>
                        <span className="rounded bg-accent/15 px-2 py-0.5 font-mono text-[0.7rem] text-accent">
                          {item.issuer}
                        </span>
                        <h3 className="mt-3 font-display text-base sm:text-lg font-bold lowercase text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "profiles" && (
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
                  {profilesData.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[1.8rem] border border-border bg-surface p-5 sm:p-6 transition-all hover:border-accent/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[0.7rem] text-accent">{item.handle}</span>
                          <ExternalLink className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h3 className="mt-3 font-display text-lg sm:text-xl font-bold lowercase text-foreground">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-xs text-muted leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="mt-4 sm:mt-6 font-mono text-xs text-accent">
                        {item.highlight}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}