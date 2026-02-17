import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Photo from "@/components/Photo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechBanner />
        <Experience />
        <Education />
        {/* <Blog /> */}
        {/* <Photo /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
