import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Blends", to: "/products" },
    { label: "Our Story", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-12 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="font-display italic text-lg text-foreground tracking-wide">
        Nature's Trail
      </Link>
      <ul className="hidden md:flex gap-7 list-none">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-ink hover:text-deep-sage transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
