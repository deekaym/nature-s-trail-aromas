import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-14 px-12 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-10">
        {/* Left links */}
        <div className="hidden md:flex gap-7">
          <Link
            to="/products"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-ink hover:text-deep-sage transition-colors"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-ink hover:text-deep-sage transition-colors"
          >
            About
          </Link>
        </div>

        {/* Brand center */}
        <Link to="/" className="font-display italic text-lg text-foreground tracking-wide">
          Nature's Trail
        </Link>

        {/* Right links */}
        <div className="hidden md:flex gap-7">
          <Link
            to="/contact"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-ink hover:text-deep-sage transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
