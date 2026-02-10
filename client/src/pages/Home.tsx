import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cog, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data";

const HERO_IMAGE = "https://images.unsplash.com/photo-1565439398534-71289df71d15?q=80&w=2070&auto=format&fit=crop"; 
const ABOUT_IMAGE = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src={HERO_IMAGE} 
              alt="CNC Machining Facility" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-4 py-1 mb-6 border border-primary/50 bg-primary/20 rounded-full backdrop-blur-sm">
                <span className="text-primary-foreground font-semibold text-sm tracking-wider uppercase">ISO 9001:2015 Certified Manufacturer</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                Precision Engineering <br />
                <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Specializing in high-quality Machined Components, clevises, and industrial fasteners. 
                Delivering reliability through advanced CNC technology and rigorous quality control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider rounded-sm">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-bold uppercase tracking-wider rounded-sm">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Cog className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase text-white">CNC Precision</h3>
                <p className="text-white/80 max-w-xs">State-of-the-art machinery delivering micron-level accuracy.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase text-white">Quality Assured</h3>
                <p className="text-white/80 max-w-xs">ISO 9001:2015 certified processes and strict inspection.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Ruler className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase text-white">Custom Solutions</h3>
                <p className="text-white/80 max-w-xs">Tailored components built exactly to your specifications.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl -z-10" />
                <img 
                  src={ABOUT_IMAGE} 
                  alt="Industrial Engineering" 
                  className="rounded-lg shadow-2xl border border-slate-100 w-full"
                />
              </div>
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Company Profile</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display">Engineering The Future Of Manufacturing</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Aace Hitech Engineering Private Limited is a premier manufacturer located in Coimbatore, the engineering hub of South India. 
                  We specialize in Clevises, Knuckle Eyes, Bolts, and high-precision Machined Components for diverse industrial applications.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Over 10 years of industry excellence",
                    "Advanced CNC turning and machining centers",
                    "Dedicated quality control department",
                    "Global export capabilities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-slate-900 text-white hover:bg-primary rounded-sm uppercase tracking-wide px-8">
                  <Link href="/about">Read More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Products</span>
                <h2 className="text-4xl font-bold text-slate-900 font-display">Industrial Components</h2>
              </div>
              <Link href="/products" className="hidden md:flex items-center font-bold text-primary hover:text-slate-900 transition-colors">
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <Link href="/products" className="inline-flex items-center font-bold text-primary hover:text-slate-900 transition-colors">
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Partner with Aace Hitech for components that meet the highest international standards of precision and durability.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-white hover:text-primary text-white font-bold px-10 py-6 text-lg rounded-sm uppercase tracking-wider transition-all">
              <Link href="/contact">Get A Quote Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
