import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
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
            Achievements
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Certifications & Achievements
          </h2>

          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-8">
            Certifications, hackathons, open-source contributions and technical
            achievements throughout my engineering journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((achievement, index) => (

            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-2xl border bg-card p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <Trophy className="text-orange-500" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold">
                    {achievement.title}
                  </h3>

                  <p className="text-orange-500 mt-1">
                    {achievement.organization}
                  </p>

                  <p className="mt-3 text-muted-foreground leading-7">
                    {achievement.description}
                  </p>

                </div>

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;