import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Blog from "@/components/Blog";

import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechBanner />
        <Experience />
        <Education />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
