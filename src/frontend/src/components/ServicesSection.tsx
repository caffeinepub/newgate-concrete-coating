import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Patio Polyaspartic Coating",
    description:
      "Create stunning outdoor living spaces with weather-resistant polyaspartic coatings that withstand the elements while maintaining their beauty.",
    image: "/assets/generated/patio-residential.dim_800x600.png",
    features: ["UV Resistant", "Slip Resistant", "Easy to Clean"],
  },
  {
    title: "Driveway Polyaspartic Coating",
    description:
      "Protect your driveway from oil stains and wear with industrial-strength polyaspartic that enhances curb appeal.",
    image: "/assets/generated/driveway-residential.dim_800x600.png",
    features: [
      "High Traffic Durability",
      "Chemical Resistant",
      "Long-lasting Finish",
    ],
  },
  {
    title: "Pool Deck Coating",
    description:
      "Transform pool areas with waterproof polyaspartic coatings designed for wet environments, providing safety and style.",
    image: "/assets/generated/pool-residential.dim_800x600.png",
    features: ["Waterproof", "Non-Slip Surface", "Chlorine Resistant"],
  },
  {
    title: "Garage Floor Coating",
    description:
      "Upgrade your garage with professional-grade polyaspartic flooring that resists stains, impacts, and heavy loads.",
    image: "/assets/generated/garage-residential.dim_800x600.png",
    features: ["Impact Resistant", "Stain Proof", "Professional Finish"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "oklch(0.96 0.005 240)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional polyaspartic coating solutions tailored to your
            specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-copper group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.3 0.01 240 / 0.8), transparent)",
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-copper">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-copper/10 text-copper text-sm font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
