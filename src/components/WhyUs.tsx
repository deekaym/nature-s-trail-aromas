import { ShieldCheck, Leaf, Beaker, Heart } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Purity Tested",
    desc: "Every batch is third-party tested for quality and authenticity.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No synthetics, no fillers — only pure botanical essential oils.",
  },
  {
    icon: Beaker,
    title: "Small Batch",
    desc: "Hand-blended in small quantities for freshness and consistency.",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    desc: "Never tested on animals. Vegan and sustainably sourced.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-12">
        <div className="text-center mb-14">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-primary-foreground/40 mb-4">
            Our Promise
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)]">
            Why <em className="italic">Nature's Trail?</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-primary-foreground/20 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary-foreground/60" />
              </div>
              <h3 className="font-display text-[18px] mb-2">{p.title}</h3>
              <p className="font-body text-[12px] leading-[1.7] text-primary-foreground/55">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
