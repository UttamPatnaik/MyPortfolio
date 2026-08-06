import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="border-t py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-bold">
              {profile.name}
            </h3>

            <p className="text-muted-foreground mt-2">
              {profile.title}
            </p>
          </div>

          <div className="flex gap-5">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition"
            >
              <Github size={24} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="hover:text-orange-500 transition"
            >
              <Mail size={24} />
            </a>

          </div>

        </div>

        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">

          <p className="flex justify-center items-center gap-2">

            Built with

            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />

            using React, TypeScript, Tailwind CSS & Framer Motion

          </p>

          <p className="mt-3">

            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.

          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;