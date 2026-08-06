import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl overflow-hidden border bg-card shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Project Image */}

      <div className="relative">

        <img
          src={`/projects/project-${project.id}.png`}
          alt={project.title}
          className="w-full h-60 object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/800x500?text=Project+Screenshot";
          }}
        />

        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            <Star size={15} fill="white" />
            Featured
          </div>
        )}
      </div>

      {/* Body */}

      <div className="p-7">

        <p className="text-orange-500 font-semibold mb-2">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-muted-foreground leading-7">
          {project.description}
        </p>

        {project.contribution && (
          <>
            <h4 className="font-semibold mt-6 mb-2">
              My Contribution
            </h4>

            <p className="text-muted-foreground leading-7">
              {project.contribution}
            </p>
          </>
        )}

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border hover:bg-muted transition"
          >
            <Github size={18} />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;