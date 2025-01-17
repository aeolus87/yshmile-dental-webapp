import { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import type { NavigationLink } from "../types";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigationLinks: NavigationLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#F3F1F6] shadow-md relative">
      {/* Top Info Bar */}
      <div className="bg-[#6A5B7B] border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white">
              <a
                href="tel:5551234567"
                className="flex items-center gap-2 hover:text-[#DAC5E7] transition-colors"
              >
                <Phone size={16} className="text-white" />
                <span className="text-white">Call: (555) 123-4567</span>
              </a>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-white" />
                <span className="text-white">123 Smile Street</span>
              </div>
            </div>

            <div className="hidden sm:block text-sm">
              <span className="text-white font-medium">Emergency? Call: </span>
              <a
                href="tel:911"
                className="text-white hover:text-[#DAC5E7] font-semibold"
              >
                911
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-[#6A5B7B] flex items-center gap-2"
          >
            Veniegas Dental Care
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-[#6A5B7B] transition-colors flex items-center gap-1 py-4"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              className="bg-[#6A5B7B] text-white px-6 py-2.5 rounded-full hover:bg-[#8B7DA7] transition-colors text-sm font-medium"
              onClick={() => (window.location.href = "/book")}
            >
              Book Appointment
            </button>
          </div>

          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 text-gray-600 hover:text-[#6A5B7B]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="container mx-auto px-4 py-4">
              {navigationLinks.map((link) => (
                <div key={link.name} className="py-2">
                  <Link
                    to={link.path}
                    className="block text-gray-700 hover:text-[#6A5B7B] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t">
                <button
                  className="w-full bg-[#6A5B7B] text-white px-6 py-2.5 rounded-full hover:bg-[#8B7DA7] transition-colors text-sm font-medium"
                  onClick={() => (window.location.href = "/book")}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
