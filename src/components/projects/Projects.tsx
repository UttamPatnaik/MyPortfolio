import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Portfolio
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-8">
            A collection of AI, Full Stack, FinTech and Machine Learning
            projects demonstrating practical software engineering,
            scalable backend development, cloud deployment and modern UI
            development.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;