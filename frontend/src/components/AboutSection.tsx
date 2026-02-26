import { Shield, Sparkles, Clock, Award, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Unmatched Durability',
    description: 'Our polyaspartic coatings are engineered to withstand heavy traffic, impacts, and harsh conditions for decades.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Aesthetics',
    description: 'Choose from a wide range of colors and finishes to create stunning surfaces that complement your property.',
  },
  {
    icon: Clock,
    title: 'Long-lasting Protection',
    description: 'Protect your concrete investment from moisture, chemicals, stains, and UV damage with our premium coatings.',
  },
  {
    icon: Award,
    title: 'Expert Installation',
    description: 'Our certified technicians ensure flawless application using industry-leading techniques and materials.',
  },
];

const serviceAreas = ['Orlando, FL', 'Tampa, FL', 'Plant City, FL'];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose NewGate Concrete Coating?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At NewGate Concrete Coating, we specialize in transforming ordinary concrete surfaces into extraordinary spaces. Our premium polyaspartic coating solutions combine cutting-edge technology with expert craftsmanship to deliver results that exceed expectations.
          </p>
        </div>

        {/* Service Areas */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="text-copper" size={24} />
              <h3 className="text-xl font-bold text-foreground">Service Areas</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Proudly serving the following areas with premium polyaspartic coating solutions:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-copper/10 text-copper font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-copper transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center">
                    <Icon className="text-copper" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-concrete-dark text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">The NewGate Difference</h3>
            <p className="text-lg text-white/90 mb-6">
              We don't just apply coatings—we create lasting solutions. Every project begins with thorough surface preparation, followed by precise application of premium materials, and ends with a finish that transforms your space. Our commitment to quality means your investment is protected for years to come.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-copper mb-2">7+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-copper mb-2">1000+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-copper mb-2">100%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
