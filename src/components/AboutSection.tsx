const AboutSection = () => {
  return (
    <section id="our-story" className="py-24 border-t border-border">
      <div className="container mx-auto px-12">
        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-14">
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-sage flex-shrink-0">
            02
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)]">
            Our <em className="italic text-deep-sage">Story</em>
          </h2>
          <div className="flex-1 h-px bg-border mb-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {/* Dark card */}
          <div className="bg-foreground text-primary-foreground p-10">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-primary-foreground/45 mb-4">
              Philosophy
            </p>
            <h3 className="font-display text-[22px] text-primary-foreground mb-3">
              Rooted in Place
            </h3>
            <p className="font-body text-[13px] leading-[1.85] text-primary-foreground/70">
              Every Nature's Trail blend begins with a place — a specific trail, 
              a forest, a mountainside. We source pure, single-origin botanicals 
              and craft small-batch blends that carry the quiet of where they came from.
            </p>
          </div>

          {/* Sage card */}
          <div className="bg-deep-sage text-primary-foreground p-10">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-primary-foreground/45 mb-4">
              Process
            </p>
            <h3 className="font-display text-[22px] text-primary-foreground mb-3">
              Small Batch, Always
            </h3>
            <p className="font-body text-[13px] leading-[1.85] text-primary-foreground/80">
              We never mass-produce. Each batch is hand-blended and tested for 
              purity. Our essential oils are 100% natural, therapeutic grade, and 
              free from synthetic fragrances or additives.
            </p>
          </div>

          {/* Parchment card wide */}
          <div className="bg-card p-10 md:col-span-2">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-deep-sage mb-4">
              For Your Ritual
            </p>
            <h3 className="font-display text-[22px] mb-3">
              Designed for Diffusers
            </h3>
            <p className="font-body text-[13px] leading-[1.85] text-soft-ink max-w-2xl">
              Our blends are optimised for ultrasonic and nebulising diffusers, 
              filling your space with a natural, enveloping scent. A few drops 
              in your diffuser transforms any room into a place of calm. We also 
              offer beautifully crafted ceramic diffusers designed to complement 
              the Nature's Trail collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
