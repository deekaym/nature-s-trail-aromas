import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import mistyMountain from "@/assets/misty-mountain-blend.png";
import peacefulForest from "@/assets/peaceful-forest-blend.png";
import sunsetTrail from "@/assets/sunset-trail-blend.png";

const slides = [
  {
    image: mistyMountain,
    name: "Misty Mountain",
    notes: "Crisp · Eucalyptus · Pine",
  },
  {
    image: peacefulForest,
    name: "Peaceful Forest",
    notes: "Calming · Grounding",
  },
  {
    image: sunsetTrail,
    name: "Sunset Trail",
    notes: "Woody · Warm Spice · Citrus",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-card pt-14">
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-60" />

      <div className="relative z-10 container mx-auto px-12 py-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="eyebrow mb-6 animate-fade-up">Botanical Essential Oil Blends</p>

        {/* Headline */}
        <h1 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.05] mb-4 animate-fade-up">
          Where nature
          <br />
          <em className="italic text-deep-sage">meets calm</em>
        </h1>

        <p className="font-body text-[15px] leading-[1.9] text-soft-ink mb-10 max-w-md animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Each blend is drawn from a place — a trail walked, a forest at dusk, a mountain in mist.
        </p>

        {/* Product carousel */}
        <div className="relative w-full max-w-3xl mb-10">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {slides.map((slide, i) => {
              const isActive = i === current;
              const offset = i - current;
              return (
                <button
                  key={slide.name}
                  onClick={() => setCurrent(i)}
                  className={`flex-shrink-0 transition-all duration-700 ease-out cursor-pointer ${
                    isActive
                      ? "scale-100 opacity-100 z-10"
                      : "scale-75 opacity-40 z-0"
                  }`}
                  style={{
                    transform: `translateX(${offset * -20}px) scale(${isActive ? 1 : 0.75})`,
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`${slide.name} essential oil blend`}
                    className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-lg"
                  />
                </button>
              );
            })}
          </div>

          {/* Active product name */}
          <div className="mt-8 transition-all duration-500">
            <h3 className="font-display text-2xl mb-1">{slides[current].name}</h3>
            <p className="font-body text-[11px] tracking-[0.15em] text-muted-foreground">
              {slides[current].notes}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-deep-sage w-6" : "bg-sage/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <Link
          to="/products"
          className="inline-block bg-foreground text-primary-foreground font-display italic text-lg px-8 py-3 tracking-wide hover:bg-deep-sage transition-colors"
        >
          Explore All Blends
        </Link>
      </div>
    </section>
  );
};

export default Hero;
