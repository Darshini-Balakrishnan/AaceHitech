import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm font-medium">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:bala@aacehitech.co.in" className="flex items-center hover:text-white/80 transition-colors">
              <Mail className="w-3 h-3 mr-2" />
              bala@aacehitech.co.in
            </a>
            <a href="tel:+919842201342" className="flex items-center hover:text-white/80 transition-colors hidden sm:flex">
              <Phone className="w-3 h-3 mr-2" />
              +91 98422 01342
            </a>
          </div>
          <span className="hidden md:inline text-white/80">ISO 9001:2015 Certified</span>
        </div>
      </div>

      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-sm overflow-hidden bg-white border border-border">
            <img
              src="/logo.png"
              alt="Aace Hitech Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight text-primary uppercase font-display">Aace Hitech</span>
            <span className="text-[0.65rem] text-muted-foreground uppercase tracking-widest font-medium">Engineering Pvt Ltd</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary relative py-2",
                location === link.href 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 rounded-sm font-bold uppercase tracking-wider text-xs">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 absolute w-full shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 border-b border-border/50",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919842201342" className="flex items-center text-sm font-medium text-primary py-2">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
