import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Experience
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Internship & Training
          </h2>

          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-8">
            Hands-on industry experience building production-oriented software,
            backend services and AI-powered solutions.
          </p>
        </motion.div>

        <div className="space-y-8">

          {experience.map((item, index) => (

            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="rounded-3xl border bg-card p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                <div className="flex-1">

                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <div className="flex flex-wrap gap-5 mt-3 text-muted-foreground">

                    <span className="flex items-center gap-2">
                      <Briefcase size={18} />
                      {item.company}
                    </span>

                    <span className="flex items-center gap-2">
                      <Calendar size={18} />
                      {item.duration}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={18} />
                      {item.location}
                    </span>

                  </div>

                  <p className="mt-6 leading-8 text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />

                        <span>{point}</span>

                      </li>
                    ))}

                  </ul>

                </div>

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;