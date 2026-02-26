import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const serviceAreas = ['Orlando, FL', 'Tampa, FL', 'Plant City, FL'];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'newgate-concrete-coating';

  return (
    <footer className="bg-concrete-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-copper mb-4">NewGate Concrete Coating</h3>
            <p className="text-white/80 mb-4">
              Premium polyaspartic coating solutions for residential and commercial properties.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-copper transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-copper transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-copper transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-copper transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-copper transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-copper transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info & Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-white/80 hover:text-copper transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+18136082563" className="hover:underline">
                  +1 (813) 608-2563
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 hover:text-copper transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:Newgatecoatings@icloud.com" className="hover:underline break-all">
                  Newgatecoatings@icloud.com
                </a>
              </li>
            </ul>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-copper flex-shrink-0" />
                <h5 className="font-semibold text-white">Service Areas</h5>
              </div>
              <ul className="space-y-1 text-white/80">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-sm">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p className="mb-2">
            © {currentYear} NewGate Concrete Coating. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1 text-sm">
            Built with <Heart className="text-copper" size={16} fill="currentColor" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
