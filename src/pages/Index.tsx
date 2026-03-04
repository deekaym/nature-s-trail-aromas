import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import PromoBanners from "@/components/PromoBanners";
import FeaturedBlends from "@/components/FeaturedBlends";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryNav />
      <PromoBanners />
      <FeaturedBlends />
      <WhyUs />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
