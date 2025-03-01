import { Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Nirvana Elite Research Solutions</h3>
          <p className="text-gray-400">
            Empowering scholars and researchers with premium academic assistance services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "About Us", "FAQs", "Contact"].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().split(" ")[0]}`} className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@nirvaanaelite.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Academic Avenue, Research City</li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-center space-x-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
           className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
          <Instagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
           className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/ashutosh017/Nirvaan-Elite-Reasearch-Solutions" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
           className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
          <Github size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Nirvaana Elite Research Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
