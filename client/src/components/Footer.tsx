import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-lg font-display">A</span>
              </div>
              <span className="font-bold text-lg text-white font-display uppercase">Aace Hitech</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Specialized manufacturers of High Precision Machined Components, Clevises, Rod Ends, and industrial fasteners. ISO 9001:2015 Certified Company.
            </p>
            <div className="pt-4 flex gap-4">
              <div className="w-24 h-12 bg-white/10 rounded flex items-center justify-center text-xs font-bold border border-white/20">
                ISO 9001:2015
              </div>
              <div className="w-24 h-12 bg-white/10 rounded flex items-center justify-center text-xs font-bold border border-white/20">
                TUV SUD
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors text-sm">About Company</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors text-sm">Our Products</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-display">Product Range</h3>
            <ul className="space-y-3">
              <li><Link href="/products?cat=clevises" className="hover:text-primary transition-colors text-sm">Clevises</Link></li>
              <li><Link href="/products?cat=knuckle-eyes" className="hover:text-primary transition-colors text-sm">Knuckle Eyes</Link></li>
              <li><Link href="/products?cat=bolts" className="hover:text-primary transition-colors text-sm">Bolts & Pins</Link></li>
              <li><Link href="/products?cat=rod-ends" className="hover:text-primary transition-colors text-sm">Rod Ends</Link></li>
              <li><Link href="/products?cat=accessories" className="hover:text-primary transition-colors text-sm">Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  SF.No: 399/1C Part, Pothiyampalayam, Naranapuram Village, 
                  Vadugapalayam Post, Sarcarsamakulam, Coimbatore – 641 107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <a href="tel:+919842201342" className="text-sm hover:text-white transition-colors">+91 98422 01342</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <a href="mailto:bala@aacehitech.co.in" className="text-sm hover:text-white transition-colors">bala@aacehitech.co.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aace Hitech Engineering Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
