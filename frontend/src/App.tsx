import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FlakeColorsSection from "./components/FlakeColorsSection";
import ContactSection from "./components/ContactSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
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
