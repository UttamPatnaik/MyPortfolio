import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

import { profile } from "@/data/profile";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-500 font-semibold tracking-wide uppercase mb-3">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            {profile.name}
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mt-4">
            {profile.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-xl">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "React",
              "TypeScript",
              "FastAPI",
              "Python",
              "LLMs",
              "Cloud",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold flex items-center gap-2 hover:bg-orange-600 transition"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              className="px-6 py-3 rounded-xl border font-semibold flex items-center gap-2 hover:bg-muted transition"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          <div className="flex gap-5 mt-10">

            <a href={profile.github} target="_blank">
              <Github className="w-7 h-7 hover:text-orange-500 transition" />
            </a>

            <a href={profile.linkedin} target="_blank">
              <Linkedin className="w-7 h-7 hover:text-orange-500 transition" />
            </a>

            <a href={`mailto:${profile.email}`}>
              <Mail className="w-7 h-7 hover:text-orange-500 transition" />
            </a>

          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full blur-3xl bg-orange-300 opacity-30"></div>

            <img
              src="/profile.jpeg"
              alt="Uttam Patnaik"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white dark:border-zinc-900 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;