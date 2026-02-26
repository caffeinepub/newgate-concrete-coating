import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-epoxy-background.dim_1920x1080.png"
          alt="Premium polyaspartic coating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-concrete-dark/90 via-concrete-dark/80 to-concrete-dark/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            NewGate Concrete Coating
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
            Premium Polyaspartic Coating Solutions for Patios, Driveways, Pool Decks & Garages
          </p>
          <p className="text-lg md:text-xl text-copper font-semibold mb-6">
            Affordable, Reasonable Prices, Great Quality From Start to Finish
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your concrete surfaces with durable, beautiful polyaspartic coatings that protect and enhance your property for years to come.
          </p>
          
          {/* Phone Number CTA */}
          <a
            href="tel:+18136082563"
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-copper hover:text-copper-light transition-colors mb-8"
          >
            <Phone size={28} className="animate-pulse" />
            +1 (813) 608-2563
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-copper hover:bg-copper-dark text-white text-lg px-8 py-6 h-auto"
            >
              Request Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-concrete-dark text-lg px-8 py-6 h-auto"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
