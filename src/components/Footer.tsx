const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display italic text-2xl mb-3">Nature's Trail</p>
            <p className="font-body text-[13px] leading-[1.85] text-soft-ink">
              Botanical essential oil blends,
              <br />
              drawn from nature's quietest places.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2">
              {["Blends", "Diffusers", "Our Story", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="font-body text-[13px] text-soft-ink hover:text-deep-sage transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-4">Get in Touch</p>
            <p className="font-body text-[13px] text-soft-ink leading-[1.85]">
              hello@naturestrail.com
            </p>
            <p className="font-body text-[10px] tracking-[0.1em] text-muted-foreground mt-4">
              Handcrafted · Small Batch · Pure
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 Nature's Trail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
