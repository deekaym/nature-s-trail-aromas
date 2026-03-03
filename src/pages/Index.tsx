import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBlends from "@/components/FeaturedBlends";
import AboutSection from "@/components/AboutSection";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedBlends />
      <AboutSection />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
