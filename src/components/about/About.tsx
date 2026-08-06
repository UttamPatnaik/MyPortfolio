import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const stats = [
  {
    value: "4+",
    label: "Major Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "AI",
    label: "Engineering Focus",
  },
  {
    value: "Cloud",
    label: "Currently Learning",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Building AI-powered software
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-muted-foreground">
              {profile.about}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "FastAPI",
                "React",
                "TypeScript",
                "Python",
                "Machine Learning",
                "Prompt Engineering",
                "REST APIs",
                "Cloud Computing",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border p-8 text-center shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-4xl font-bold text-orange-500">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;