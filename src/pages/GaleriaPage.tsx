import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GaleriaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GaleriaPage;
