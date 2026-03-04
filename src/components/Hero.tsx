import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import mistyMountain from "@/assets/misty-mountain-blend.png";
import peacefulForest from "@/assets/peaceful-forest-blend.png";
import sunsetTrail from "@/assets/sunset-trail-blend.png";

const slides = [
  {
    image: mistyMountain,
    name: "Misty Mountain",
    subtitle: "New Arrival",
    description: "Crisp eucalyptus & pine from high-altitude trails",
    cta: "Shop Blends",
    link: "/products",
  },
  {
    image: peacefulForest,
    name: "Peaceful Forest",
    subtitle: "Best Seller",
    description: "Calming cedarwood & lavender for evening rituals",
    cta: "Explore Now",
    link: "/products",
  },
  {
    image: sunsetTrail,
    name: "Sunset Trail",
    subtitle: "Staff Pick",
    description: "Warm spice & citrus over a woody base",
    cta: "Discover More",
    link: "/products",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-card">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-transparent z-10" />

      {/* Product image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
        {slides.map((s, i) => (
          <img
            key={s.name}
            src={s.image}
            alt={`${s.name} essential oil blend`}
            className={`absolute w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl transition-all duration-700 ${
              i === current
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-8"
            }`}
          />
        ))}
      </div>

      {/* Text content — left side */}
      <div className="relative z-20 container mx-auto px-12 py-24">
        <div className="max-w-lg">
          <p className="eyebrow mb-4 transition-all duration-500">{slide.subtitle}</p>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-[1.05] mb-2">
            {slide.name.split(" ")[0]}
            <br />
            <em className="italic text-deep-sage">{slide.name.split(" ").slice(1).join(" ")}</em>
          </h1>
          <p className="font-body text-[15px] leading-[1.8] text-soft-ink mb-8 max-w-sm">
            {slide.description}
          </p>
          <Link
            to={slide.link}
            className="inline-block bg-foreground text-primary-foreground font-body text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-deep-sage transition-colors"
          >
            {slide.cta}
          </Link>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-deep-sage w-8" : "bg-sage/40 w-4"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
