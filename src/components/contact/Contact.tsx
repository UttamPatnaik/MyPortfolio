import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MapPin,
  Download,
} from "lucide-react";

import { profile } from "@/data/profile";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
`Name: ${name}

Email: ${email}

Message:

${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Let's Build Something Together
          </h2>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-8">
            I'm actively looking for Software Engineering, AI Engineering,
            Full Stack Development and Backend opportunities.
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}

          <div className="rounded-3xl border bg-card p-8 shadow-lg">

            <h3 className="text-2xl font-bold mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border bg-card p-8 shadow-lg flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-bold">
                Connect With Me
              </h3>

              <div className="space-y-6 mt-8">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-orange-500 transition"
                >
                  <Github />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-orange-500 transition"
                >
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>

                <div className="flex items-center gap-4">
                  <MapPin />
                  <span>{profile.location}</span>
                </div>

              </div>

            </div>

            <div className="mt-12">

              <h3 className="text-2xl font-bold">
                Resume
              </h3>

              <p className="text-muted-foreground mt-4 leading-8">
                Download my latest resume containing projects,
                internship experience, technical skills and certifications.
              </p>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 font-semibold transition"
              >
                <Download size={20} />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;