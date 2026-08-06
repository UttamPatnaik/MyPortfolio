import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) => {
  return (
    <motion.div
      className="mb-14 text-center"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {badge && (
        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-7">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;