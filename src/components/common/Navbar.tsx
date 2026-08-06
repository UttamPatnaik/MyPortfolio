import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-background/70 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <a href="#hero" className="font-bold text-2xl">
          {profile.name}
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex gap-8 items-center">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-orange-500 transition"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile */}

        <div className="flex lg:hidden items-center gap-3">

          <button onClick={toggleTheme}>
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="flex flex-col p-5 gap-5">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;