import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FlakeColorsSection from "./components/FlakeColorsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FlakeColorsSection />
        <ContactSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
