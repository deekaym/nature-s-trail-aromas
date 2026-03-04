import { Link } from "react-router-dom";
import mistyMountain from "@/assets/misty-mountain-blend.png";
import sunsetTrail from "@/assets/sunset-trail-blend.png";

const PromoBanners = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left banner */}
          <Link
            to="/products"
            className="relative overflow-hidden bg-deep-sage group block"
          >
            <div className="flex items-center p-10 min-h-[280px]">
              <div className="relative z-10">
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-3">
                  New Collection
                </p>
                <h3 className="font-display text-[clamp(24px,3vw,36px)] text-primary-foreground mb-2 leading-[1.1]">
                  Signature
                  <br />
                  <em className="italic">Blends</em>
                </h3>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70 border-b border-primary-foreground/30 pb-0.5 group-hover:border-primary-foreground/60 transition-colors">
                  Shop Now
                </span>
              </div>
              <img
                src={mistyMountain}
                alt="Signature blends"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 object-contain opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>

          {/* Right banner */}
          <Link
            to="/products"
            className="relative overflow-hidden bg-foreground group block"
          >
            <div className="flex items-center p-10 min-h-[280px]">
              <div className="relative z-10">
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-3">
                  Shop
                </p>
                <h3 className="font-display text-[clamp(24px,3vw,36px)] text-primary-foreground mb-2 leading-[1.1]">
                  By
                  <br />
                  <em className="italic">Aroma</em>
                </h3>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70 border-b border-primary-foreground/30 pb-0.5 group-hover:border-primary-foreground/60 transition-colors">
                  Explore
                </span>
              </div>
              <img
                src={sunsetTrail}
                alt="Shop by aroma"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 object-contain opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
