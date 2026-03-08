import { Mail, Phone } from "lucide-react";

function ComingSoonPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.13 0.01 240)" }}
    >
      {/* Atmospheric background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 10%, oklch(0.62 0.19 38 / 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 80%, oklch(0.62 0.19 38 / 0.07) 0%, transparent 55%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.62 0.19 38 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.19 38 / 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl w-full">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/assets/uploads/IMG_2290-1-1.jpeg"
            alt="NewGate Concrete Coating"
            className="w-40 h-40 object-contain mx-auto drop-shadow-2xl"
            data-ocid="coming-soon.logo"
          />
        </div>

        {/* Company name */}
        <p
          className="text-sm font-semibold tracking-[0.25em] uppercase mb-3"
          style={{ color: "oklch(0.62 0.19 38)" }}
        >
          NewGate Concrete Coating
        </p>

        {/* Coming Soon headline */}
        <h1
          className="text-5xl sm:text-6xl font-bold mb-4 leading-tight"
          style={{ color: "oklch(0.97 0.004 240)" }}
          data-ocid="coming-soon.section"
        >
          Coming Soon
        </h1>

        {/* Divider */}
        <div
          className="w-16 h-1 rounded-full mb-6"
          style={{ backgroundColor: "oklch(0.62 0.19 38)" }}
        />

        {/* Message */}
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: "oklch(0.65 0.008 240)" }}
        >
          We&rsquo;re working on something great.
          <br />
          Check back soon!
        </p>

        {/* Contact info */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          data-ocid="coming-soon.card"
        >
          <a
            href="tel:+18136082563"
            className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.62 0.19 38 / 0.12)",
              border: "1px solid oklch(0.62 0.19 38 / 0.3)",
              color: "oklch(0.97 0.004 240)",
            }}
            data-ocid="coming-soon.phone.link"
          >
            <Phone
              className="w-4 h-4 flex-shrink-0"
              style={{ color: "oklch(0.62 0.19 38)" }}
            />
            <span className="text-sm font-medium">+1 (813) 608-2563</span>
          </a>

          <a
            href="mailto:Newgatecoatings@icloud.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.62 0.19 38 / 0.12)",
              border: "1px solid oklch(0.62 0.19 38 / 0.3)",
              color: "oklch(0.97 0.004 240)",
            }}
            data-ocid="coming-soon.email.link"
          >
            <Mail
              className="w-4 h-4 flex-shrink-0"
              style={{ color: "oklch(0.62 0.19 38)" }}
            />
            <span className="text-sm font-medium">
              Newgatecoatings@icloud.com
            </span>
          </a>
        </div>

        {/* Footer attribution */}
        <p className="mt-12 text-xs" style={{ color: "oklch(0.42 0.008 240)" }}>
          © {new Date().getFullYear()} NewGate Concrete Coating. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

function App() {
  return <ComingSoonPage />;
}

export default App;
