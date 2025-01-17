import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Patient Forms", path: "/forms" },
    { name: "Insurance", path: "/insurance" },
    { name: "Appointments", path: "/appointments" },
    { name: "Blog", path: "/blog" },
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      text: "(555) 123-4567",
      href: "tel:5551234567",
    },
    {
      icon: <Mail size={20} />,
      text: "veniegasdentalcare@gmail.com",
      href: "mailto:veniegasdentalcare@gmail.com",
    },
    {
      icon: <MapPin size={20} />,
      text: "123 Smile Street, Dental City, DC 12345",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      name: "Facebook",
      href: "#",
      hoverColor: "hover:text-[#6A5B7B]",
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      href: "#",
      hoverColor: "hover:text-[#6A5B7B]",
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      href: "#",
      hoverColor: "hover:text-[#6A5B7B]",
    },
  ];

  return (
    <footer className="bg-[#F3F1F6] text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#6A5B7B] mb-6">
              Veniegas Dental Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Providing quality dental care with a gentle touch since 1975. Your
              smile is our top priority, and we're committed to delivering
              excellence in every treatment.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.hoverColor} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#6A5B7B] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#8B7DA7] transition-colors flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#6A5B7B] mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#8B7DA7] transition-colors duration-300"
                >
                  <span className="text-[#8B7DA7]">{info.icon}</span>
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#6A5B7B] mb-6">
              Office Hours
            </h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full bg-[#8B7DA7] hover:bg-[#6A5B7B] text-white py-3 px-6 rounded-lg transition-colors duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Veniegas Dental Care. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link
                to="/privacy"
                className="hover:text-[#8B7DA7] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#8B7DA7] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
