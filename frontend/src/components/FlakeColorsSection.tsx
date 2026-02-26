const flakeColors = [
  {
    name: "Tidal Wave",
    image: "/assets/IMG_2262.jpeg",
  },
  {
    name: "Gravel Blend",
    image: "/assets/IMG_2260.jpeg",
  },
  {
    name: "Coyote Blend",
    image: "/assets/IMG_2261.jpeg",
  },
  {
    name: "Wombat Blend",
    image: "/assets/IMG_2259.jpeg",
  },
  {
    name: "Stargazer Blend",
    image: "/assets/IMG_2263.jpeg",
  },
  {
    name: "Outback Blend",
    image: "/assets/IMG_2266.jpeg",
  },
  {
    name: "Orbit Blend",
    image: "/assets/IMG_2267.jpeg",
  },
  {
    name: "Safari Blend",
    image: "/assets/IMG_2265.jpeg",
  },
  {
    name: "Creekbed Blend",
    image: "/assets/IMG_2270.jpeg",
  },
  {
    name: "Nightfall",
    image: "/assets/IMG_2268.jpeg",
  },
  {
    name: "Glacier Blend",
    image: "/assets/IMG_2272.jpeg",
  },
  {
    name: "Stonewash Blend",
    image: "/assets/IMG_2273.jpeg",
  },
  {
    name: "Shoreline Blend",
    image: "/assets/IMG_2264.jpeg",
  },
  {
    name: "Domino Blend",
    image: "/assets/IMG_2269.jpeg",
  },
  {
    name: "Cabin Fever",
    image: "/assets/IMG_2275.jpeg",
  },
  {
    name: "Feather Gray Blend",
    image: "/assets/IMG_2274.jpeg",
  },
  {
    name: "Autumn Brown Blend",
    image: "/assets/IMG_2271.jpeg",
  },
];

interface FlakeColorCardProps {
  name: string;
  image: string;
}

function FlakeColorCard({ name, image }: FlakeColorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-concrete-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-concrete-100">
        <img
          src={image}
          alt={`${name} decorative chip flake`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-3 text-center">
        <p className="text-sm font-semibold text-concrete-800 leading-tight">{name}</p>
      </div>
    </div>
  );
}

export default function FlakeColorsSection() {
  return (
    <section id="flake-colors" className="py-20 bg-concrete-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-copper-600 mb-3">
            Customize Your Space
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-concrete-900 mb-4">
            Flake Colors
          </h2>
          <div className="w-16 h-1 bg-copper-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-concrete-600 max-w-2xl mx-auto">
            Choose from our wide selection of decorative chip flake blends to create a unique,
            beautiful finish for your polyaspartic coating. Each blend is designed to complement
            any style — from modern to rustic.
          </p>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {flakeColors.map((color) => (
            <FlakeColorCard
              key={color.name}
              name={color.name}
              image={color.image}
            />
          ))}
        </div>

        {/* CTA Note */}
        <div className="mt-12 text-center">
          <p className="text-concrete-500 text-sm">
            Not sure which blend is right for you?{" "}
            <a
              href="#contact"
              className="text-copper-600 font-semibold hover:text-copper-700 underline underline-offset-2 transition-colors"
            >
              Request a free consultation
            </a>{" "}
            and we'll help you choose the perfect color.
          </p>
        </div>
      </div>
    </section>
  );
}
