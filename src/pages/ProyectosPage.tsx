import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProyectosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProyectosPage;
