import { Link } from "react-router-dom";
import { Droplets, Wind, Gift, Leaf } from "lucide-react";

const categories = [
  { name: "Blends", icon: Droplets, link: "/products" },
  { name: "Diffusers", icon: Wind, link: "/products" },
  { name: "Gift Sets", icon: Gift, link: "/products" },
  { name: "Singles", icon: Leaf, link: "/products" },
];

const CategoryNav = () => {
  return (
    <section className="py-10 border-t border-border">
      <div className="container mx-auto px-12">
        <div className="flex items-center justify-center gap-12 md:gap-20">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:border-deep-sage group-hover:bg-secondary transition-all duration-300">
                <cat.icon className="w-5 h-5 text-sage group-hover:text-deep-sage transition-colors" />
              </div>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-soft-ink group-hover:text-deep-sage transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
