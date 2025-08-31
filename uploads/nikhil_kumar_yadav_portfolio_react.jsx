import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck, LineChart, Code2, Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- DATA (edit here easily) ---
const profile = {
  name: "Nikhil Kumar Yadav",
  headline:
    "B.Tech CSE Student | Aspiring Data Analyst & Cybersecurity Enthusiast | Skilled in C, C++, OOPs, Data Analytics & Visualization | Microsoft & TCS Certified | Passionate About Problem-Solving & Innovation",
  uvp:
    "Aspiring Data Analyst & Cybersecurity Enthusiast skilled in C, C++, OOPs, and Data Analytics. Microsoft & TCS certified; I deliver secure, data‑driven solutions with strong problem‑solving.",
  location: "Kolkata Metropolitan Area, West Bengal, India",
  address: "North mill B-Block, Line No.9, Radhanagar, Bauria, Howrah – 711310",
  phone: "+91 62903 17368",
  email: "nikhilky1235@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikhil-kumar-yadav-b6a48a21b",
  instagram: "https://www.instagram.com/_world_of_nikhil_/",
  summary: `Hi, I’m Nikhil Kumar Yadav, a Computer Science and Engineering student at Durgapur Institute of Advanced Technology and Management with a strong interest in data analytics, cybersecurity, and software development.

I’ve built a solid technical foundation in C, C++, OOPs, cybersecurity fundamentals, and data analysis & visualization, supported by certifications from Microsoft and TCS. My focus is on applying analytical thinking and secure coding practices to solve complex problems and deliver meaningful solutions.

I’m passionate about exploring how data insights and cybersecurity can shape smarter, safer digital environments. Whether it’s analyzing datasets, building efficient programs, or identifying vulnerabilities, I thrive on solving challenges and continuously improving my skills.

Core Skills & Strengths:
• Cybersecurity Fundamentals & Threat Analysis
• Programming in C, C++ & OOPs
• Data Analysis & Visualization
• Problem-Solving & Critical Thinking
• Communication & Time Management

Currently, I’m expanding my knowledge in advanced analytics, programming paradigms, and security tools to grow into a well‑rounded data analyst and cybersecurity professional.

I’m actively seeking internships or entry‑level opportunities in Cybersecurity, Data Analytics, or Software Development, where I can apply my skills, gain hands‑on experience, and learn from innovative teams.`,
  skills: [
    "Object-Oriented Programming (OOP)",
    "C",
    "C++",
    "Data Analysis",
    "Data Visualization",
    "Spreadsheets",
    "Threat Analysis",
    "Cybersecurity Fundamentals",
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Time Management",
  ],
  certifications: [
    "Career Essentials in Data Analysis by Microsoft & LinkedIn",
    "Tata - Cybersecurity Analyst Job Simulation",
    "Deloitte Australia - Cyber Job Simulation",
    "Deloitte Australia - Data Analytics Job Simulation",
    "C Programming Basics",
  ],
  languages: [
    { name: "English", level: "Professional Working" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Bengali", level: "Professional Working" },
  ],
  education: [
    {
      school: "Durgapur Institute of Advanced Technology and Management (MAKAUT)",
      degree: "B.Tech, Computer Science & Engineering",
      dates: "Sep 2023 – Jul 2027",
    },
    {
      school: "NIOS — National Institute of Open Schooling",
      degree: "Engineering Science",
      dates: "Aug 2021 – Jun 2023",
    },
    {
      school: "Bharat Academy & Sciences",
      degree: "Schooling",
      dates: "2011 – 2021",
    },
  ],
};

// --- SMALL UI HELPERS ---
const Section = ({ id, title, icon, children }: any) => (
  <section id={id} className="scroll-mt-24 py-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4"
    >
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const Pill = ({ children }: any) => (
  <span className="text-sm rounded-full border px-3 py-1 shadow-sm">{children}</span>
);

// --- MAIN PAGE ---
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg">NKY<span className="text-slate-500">.portfolio</span></a>
          <div className="hidden md:flex gap-4">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#skills">Skills</a>
            <a className="hover:underline" href="#certs">Certifications</a>
            <a className="hover:underline" href="#education">Education</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="rounded-2xl">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
              </a>
            </Button>
            <Button asChild className="rounded-2xl">
              <a href="#contact">
                Contact <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(14,165,233,0.15),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-10"
        >
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {profile.name}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate-700">
                {profile.uvp}
              </p>
              <p className="mt-4 text-slate-600">
                {profile.headline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    View LinkedIn <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={profile.instagram} target="_blank" rel="noreferrer">
                    Instagram <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href="#about">
                    Learn more <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5">
              <Card className="rounded-2xl shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" /> Profile Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><LineChart className="h-4 w-4 mt-0.5"/>Data Analytics & Visualization</div>
                  <div className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5"/>Cybersecurity Fundamentals & Threat Analysis</div>
                  <div className="flex items-start gap-2"><Code2 className="h-4 w-4 mt-0.5"/>C, C++ & OOPs</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      <Section id="about" title="About" icon={<ArrowRight className="h-6 w-6" /> }>
        <Card className="rounded-2xl">
          <CardContent className="prose max-w-none py-6">
            {profile.summary.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed">{para}</p>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section id="skills" title="Skills" icon={<Code2 className="h-6 w-6" /> }>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Technical & Professional</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {profile.skills.map((s, i) => (
                <Pill key={i}>{s}</Pill>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {profile.languages.map((l, i) => (
                <Pill key={i}>{l.name} — {l.level}</Pill>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="certs" title="Certifications" icon={<ShieldCheck className="h-6 w-6" /> }>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.certifications.map((c, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">{c}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" icon={<LineChart className="h-6 w-6" /> }>
        <div className="grid md:grid-cols-3 gap-4">
          {profile.education.map((e, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{e.school}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-1">
                <div>{e.degree}</div>
                <div className="text-slate-500">{e.dates}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" icon={<Mail className="h-6 w-6" /> }>
        <Card className="rounded-2xl">
          <CardContent className="py-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {profile.address}</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="underline">{profile.phone}</a></div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>Connect on LinkedIn</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href={profile.instagram} target="_blank" rel="noreferrer"><Instagram className="h-4 w-4 mr-2"/>Follow on Instagram</a></Button>
              <Button asChild variant="secondary" className="rounded-2xl"><a href="#home"><ArrowRight className="h-4 w-4 mr-2 rotate-180"/>Back to top</a></Button>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with ❤️.
      </footer>
    </div>
  );
}
