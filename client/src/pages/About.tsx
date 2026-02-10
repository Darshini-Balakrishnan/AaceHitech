import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Globe, Target, Lightbulb } from "lucide-react";

const FACTORY_IMAGE = "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="relative bg-slate-900 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={FACTORY_IMAGE} 
              alt="Factory Background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display uppercase tracking-wide mb-6">About Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Precision Engineering, Quality Manufacturing, and Customer Commitment since 2012.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-6">A Leader in Precision Components</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Aace Hitech Engineering Private Limited is situated in Coimbatore, known as the "Manchester of South India" for its engineering prowess. 
                We are a dedicated manufacturer specializing in high-quality Clevises, Knuckle Eyes, Bolts, and other Machined Components. 
                Our products serve a wide range of industries including automotive, hydraulic, and general engineering sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 shadow-sm h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide superior quality engineering components that exceed customer expectations through continuous improvement, 
                  advanced technology, and rigorous quality management systems. We aim to be the preferred partner for precision 
                  components globally.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 shadow-sm h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To establish a global footprint in the precision engineering sector by leveraging innovation and sustainable 
                  manufacturing practices, while maintaining the highest standards of integrity and business ethics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Credentials */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-display">10+</div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-display">ISO</div>
                  <div className="text-sm uppercase tracking-wide text-white/80">9001:2015 Certified</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-display">100%</div>
                  <div className="text-sm uppercase tracking-wide text-white/80">On-Time Delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-display">Global</div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Client Base</div>
                </div>
             </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 font-display text-center mb-12">Why Choose Aace Hitech?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Award className="w-8 h-8 text-primary" />, 
                  title: "Quality Certified", 
                  desc: "ISO 9001:2015 certification by TUV SUD ensures every part meets stringent quality standards." 
                },
                { 
                  icon: <Users className="w-8 h-8 text-primary" />, 
                  title: "Expert Team", 
                  desc: "A skilled workforce of engineers and technicians dedicated to precision and efficiency." 
                },
                { 
                  icon: <Globe className="w-8 h-8 text-primary" />, 
                  title: "Advanced Tech", 
                  desc: "Equipped with modern CNC turning centers and machining capabilities for complex geometries." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white border-t border-slate-100">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Interested in working with us?</h2>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-sm">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
