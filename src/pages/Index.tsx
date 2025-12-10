import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Home, User, Lightbulb, Code, CheckCircle, Mail, Menu, X, Sun, Moon,
  Download, Monitor, BarChart3, ClipboardList, Zap, Puzzle, Shield, Database,
  ArrowUp, Linkedin, Github
} from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation items
const navItems = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#interests", label: "Interests", icon: Lightbulb },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: CheckCircle },
  { href: "#contact", label: "Contact", icon: Mail },
];

// Data
const interests = [
  { icon: Monitor, text: "Crafting interactive web applications" },
  { icon: Lightbulb, text: "Hackathons and open-source contributions" },
  { icon: Code, text: "Exploring new languages and frameworks" },
  { icon: Puzzle, text: "Algorithm optimization" },
  { icon: BarChart3, text: "Data analytics and visualization" },
];

const skills = [
  { name: "Java", level: 85, icon: Code },
  { name: "Python", level: 80, icon: Shield },
  { name: "SQL", level: 75, icon: Database },
  { name: "Front-end", level: 90, icon: Monitor },
  { name: "Algorithms", level: 85, icon: Puzzle },
];

const projects = [
  { title: "Portfolio Website", description: "A professional portfolio showcasing my skills and projects with a clean cream and peach theme.", tags: ["HTML", "CSS", "JavaScript"], icon: Monitor },
  { title: "Interactive Dashboard", description: "A dynamic analytics dashboard with real-time data visualizations.", tags: ["Python", "SQL", "React"], icon: BarChart3 },
  { title: "To-Do App", description: "A task manager with persistent storage and intuitive UI.", tags: ["Java", "SQL", "Android"], icon: ClipboardList },
  { title: "Load Balancing Simulator", description: "A simulator for testing greedy load balancing algorithms.", tags: ["Python", "Algorithms"], icon: Zap },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/yourlinkedinprofile", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/yourgithubusername", icon: Github, label: "GitHub" },
  { href: "mailto:youremail@example.com", icon: Mail, label: "Email" },
];

// Fade animation config - soft, no bounce
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

// Section wrapper with soft fade
const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDark, setIsDark] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });

  // Parallax setup
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, -80]);
  const decorParallax1 = useTransform(scrollY, [0, 1000], [0, -120]);
  const decorParallax2 = useTransform(scrollY, [0, 1000], [0, -60]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(item.href.slice(1));
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent successfully!");
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Parallax Background Decorations */}
      <motion.div 
        style={{ y: decorParallax1 }}
        className="fixed top-20 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-peach/20 blur-3xl pointer-events-none parallax-slow"
      />
      <motion.div 
        style={{ y: decorParallax2 }}
        className="fixed top-1/2 left-5 w-48 h-48 md:w-72 md:h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none parallax-medium"
      />
      <motion.div 
        style={{ y: decorParallax1 }}
        className="fixed bottom-20 right-1/4 w-40 h-40 md:w-56 md:h-56 rounded-full bg-secondary/25 blur-3xl pointer-events-none parallax-slow"
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 w-full z-50 glass-card rounded-none border-x-0 border-t-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
          <div className="text-fluid-lg font-bold text-primary">Uttam Patnaik</div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-400 ease-smooth",
                    activeSection === item.href.slice(1) 
                      ? "bg-primary text-primary-foreground shadow-soft" 
                      : "hover:bg-secondary/60"
                  )}
                >
                  <Icon className="w-4 h-4" />{item.label}
                </a>
              );
            })}
            <button 
              onClick={toggleTheme} 
              className="ml-4 p-2.5 rounded-xl hover:bg-secondary/60 transition-all duration-400 ease-smooth"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-secondary/60 transition-all duration-400">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 rounded-xl hover:bg-secondary/60 transition-all duration-400">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden pb-4 px-4 overflow-hidden"
            >
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-400",
                      activeSection === item.href.slice(1) 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-secondary/60"
                    )}
                  >
                    <Icon className="w-4 h-4" />{item.label}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16">
          <motion.div 
            style={{ y: heroParallax }}
            className="parallax-slow"
          >
            <motion.div 
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-36 h-36 xs:w-40 xs:h-40 md:w-48 md:h-48 rounded-full border-2 border-accent/30 bg-secondary/50 flex items-center justify-center mb-8 shadow-glow glass-card"
            >
              <User className="w-16 h-16 xs:w-20 xs:h-20 text-primary/40" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-4xl font-bold text-primary mb-4"
          >
            Uttam Patnaik
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fluid-lg text-muted-foreground max-w-2xl mb-8 px-4"
          >
            2nd-year Computer Science student passionate about crafting seamless, innovative solutions with Java, Python, SQL, and front-end expertise.
          </motion.p>
          
          <motion.a 
            href="/UttamPatnaik_Resume.pdf" 
            download 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-primary/80 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-400 ease-smooth shadow-soft"
          >
            <Download className="w-5 h-5" />Download Resume
          </motion.a>
        </section>

        {/* About */}
        <Section id="about" className="py-12 md:py-16">
          <div className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-medium">
            <h2 className="text-fluid-3xl font-bold text-primary text-center mb-6">About Me</h2>
            <p className="text-muted-foreground text-center text-fluid-base leading-relaxed">
              I'm a driven Computer Science student with a knack for building efficient and visually appealing applications. Skilled in Java, Python, SQL, and front-end development, I thrive on solving complex problems and delivering user-focused solutions.
            </p>
          </div>
        </Section>

        {/* Interests */}
        <Section id="interests" className="py-12 md:py-16">
          <div className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-medium">
            <h2 className="text-fluid-3xl font-bold text-primary text-center mb-8">My Interests</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li 
                    key={i} 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 border border-border/50 hover:bg-card/80 transition-all duration-400 ease-smooth shadow-soft"
                  >
                    <div className="p-2 rounded-xl bg-accent/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-fluid-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" className="py-12 md:py-16">
          <div ref={skillsRef} className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-medium">
            <h2 className="text-fluid-3xl font-bold text-primary text-center mb-8">Skills</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="bg-card/60 border border-border/50 rounded-2xl p-5 md:p-6 text-center hover:bg-card/80 transition-all duration-400 ease-smooth shadow-soft"
                  >
                    <div className="p-3 rounded-2xl bg-accent/20 w-fit mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-fluid-base font-semibold mb-3">{skill.name}</h3>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={skillsInView ? { width: `${skill.level}%` } : {}} 
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }} 
                        className="h-full bg-primary rounded-full" 
                      />
                    </div>
                    <span className="text-fluid-xs text-muted-foreground mt-2 inline-block">{skill.level}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" className="py-12 md:py-16">
          <div className="glass-card p-6 sm:p-8 md:p-12 max-w-6xl mx-auto shadow-medium">
            <h2 className="text-fluid-3xl font-bold text-primary text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div 
                    key={project.title} 
                    className="bg-card/60 border border-border/50 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-400 ease-smooth shadow-soft"
                  >
                    <div className="h-32 sm:h-40 bg-secondary/40 flex items-center justify-center">
                      <div className="p-4 rounded-2xl bg-accent/20">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary/60" />
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-fluid-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-fluid-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 text-fluid-xs font-medium rounded-full bg-primary text-primary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button 
                          disabled 
                          className="flex-1 px-4 py-2.5 rounded-xl bg-primary/40 text-primary-foreground text-fluid-sm opacity-50 cursor-not-allowed"
                        >
                          Live Demo
                        </button>
                        <button 
                          disabled 
                          className="flex-1 px-4 py-2.5 rounded-xl border border-primary/40 text-primary text-fluid-sm opacity-50 cursor-not-allowed"
                        >
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="py-12 md:py-16">
          <div className="glass-card p-6 sm:p-8 md:p-12 max-w-2xl mx-auto shadow-medium">
            <h2 className="text-fluid-3xl font-bold text-primary text-center mb-8">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-card/60 border border-border/50 focus:ring-2 focus:ring-accent/50 outline-none transition-all duration-400 text-fluid-sm" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-card/60 border border-border/50 focus:ring-2 focus:ring-accent/50 outline-none transition-all duration-400 text-fluid-sm" 
              />
              <textarea 
                name="message" 
                rows={5} 
                placeholder="Your Message" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-card/60 border border-border/50 focus:ring-2 focus:ring-accent/50 outline-none resize-none transition-all duration-400 text-fluid-sm" 
              />
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-400 ease-smooth disabled:opacity-50 shadow-soft text-fluid-sm"
              >
                <Mail className="w-5 h-5" />{isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="glass-card border-x-0 border-b-0 rounded-none py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4 flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-primary transition-all duration-400 ease-smooth text-fluid-sm"
                >
                  <Icon className="w-5 h-5" /><span className="hidden sm:inline">{link.label}</span>
                </a>
              );
            })}
          </div>
          <p className="text-muted-foreground text-fluid-xs">© 2025 Uttam Patnaik. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-medium hover:opacity-90 transition-all duration-400 ease-smooth z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
