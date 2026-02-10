import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PRODUCTS } from "@/lib/data";

const PRODUCTS_HERO = "https://images.unsplash.com/photo-1612690669206-ebae5f0c3df4?q=80&w=2070&auto=format&fit=crop";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["All", "Clevises", "Knuckle Eyes", "Bolts", "Pins", "Accessories", "Rod Ends"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.series?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      <div className="relative h-64 md:h-80 bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={PRODUCTS_HERO} alt="Products Header" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display uppercase tracking-wide mb-4">Our Products</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive range of high-precision industrial components
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-display uppercase border-b pb-2">Filter By</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                      activeCategory === cat 
                        ? "bg-primary text-white shadow-md transform scale-105" 
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg shadow-lg text-white hidden lg:block">
              <h3 className="font-bold text-xl mb-3 font-display">Need Custom Parts?</h3>
              <p className="text-sm text-slate-300 mb-4">We specialize in manufacturing components according to customer drawings and specifications.</p>
              <Button asChild className="w-full bg-white text-slate-900 hover:bg-primary hover:text-white font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-display text-slate-800">
                {activeCategory} Components
                <span className="text-sm font-sans font-normal text-muted-foreground ml-3">
                  ({filteredProducts.length} items)
                </span>
              </h2>
              
              <div className="relative w-full max-w-xs hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-9 bg-white border-slate-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="relative w-full mb-6 sm:hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-9 bg-white border-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-dashed border-slate-300 p-12 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                  className="text-primary mt-2 underline"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
