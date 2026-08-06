import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: .5,
              }}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-xl transition bg-background"
            >

              <h3 className="text-2xl font-semibold mb-6 text-orange-500">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;