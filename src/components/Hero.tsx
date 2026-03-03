import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Misty forest trail at dawn with essential oil bottles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-12 pb-24 pt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div className="animate-fade-up">
            <p className="eyebrow mb-5">Botanical Essential Oil Blends</p>
            <h1 className="font-display text-[clamp(44px,7vw,72px)] leading-[1.05] mb-6">
              Where nature
              <br />
              <em className="italic text-deep-sage">meets calm</em>
            </h1>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              Handcrafted · Small Batch · Pure
            </p>
          </div>

          <div
            className="border-l border-border pl-12 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="font-body text-[15px] leading-[1.9] text-soft-ink mb-6">
              Each blend is drawn from a place — a trail walked, a
              forest at dusk, a mountain in mist. Nature's Trail captures
              these moments in pure essential oil blends for your daily
              aromatherapy ritual.
            </p>
            <a
              href="#blends"
              className="inline-block bg-foreground text-primary-foreground font-display italic text-xl px-6 py-3 tracking-wide hover:bg-deep-sage transition-colors"
            >
              Explore Blends
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
