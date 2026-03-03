import Navbar from "@/components/Navbar";
import FeaturedBlends from "@/components/FeaturedBlends";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <FeaturedBlends />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
