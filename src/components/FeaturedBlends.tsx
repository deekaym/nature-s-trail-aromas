import mistyMountain from "@/assets/misty-mountain-blend.png";
import peacefulForest from "@/assets/peaceful-forest-blend.png";
import sunsetTrail from "@/assets/sunset-trail-blend.png";

const blends = [
  {
    name: "Misty Mountain",
    image: mistyMountain,
    category: "Essential Oil Blend",
    notes: "Crisp · Eucalyptus · Pine",
    description:
      "Drawn from high-altitude trails where mist meets mountain air. Invigorating and clear.",
    size: "15 mL",
  },
  {
    name: "Peaceful Forest",
    image: peacefulForest,
    category: "Essential Oil Blend",
    notes: "Calming · Grounding",
    description:
      "The quiet of an old-growth forest at dusk. Cedarwood and lavender in perfect balance.",
    size: "15 mL",
  },
  {
    name: "Sunset Trail",
    image: sunsetTrail,
    category: "Essential Oil Blend",
    notes: "Woody · Warm Spice · Citrus",
    description:
      "Golden hour on a winding trail. Warm cinnamon and orange peel over a cedarwood base.",
    size: "15 mL",
  },
];

const FeaturedBlends = () => {
  return (
    <section id="blends" className="py-24 border-t border-border">
      <div className="container mx-auto px-12">
        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-14">
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-sage flex-shrink-0">
            01
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)]">
            Our <em className="italic text-deep-sage">Blends</em>
          </h2>
          <div className="flex-1 h-px bg-border mb-1" />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {blends.map((blend, i) => (
            <div
              key={blend.name}
              className="bg-card p-8 group cursor-pointer transition-colors hover:bg-secondary"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="aspect-square mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={blend.image}
                  alt={`${blend.name} essential oil blend`}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="eyebrow mb-3">{blend.category}</p>
              <h3 className="font-display text-[22px] mb-2">{blend.name}</h3>
              <p className="font-body text-[13px] leading-[1.85] text-soft-ink mb-3">
                {blend.description}
              </p>
              <p className="font-body text-[10px] tracking-[0.1em] text-muted-foreground">
                {blend.notes}
              </p>
              <p className="font-body text-[10px] text-muted-foreground mt-3">
                {blend.size}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlends;
