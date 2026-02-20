import { useRoute } from "wouter";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, FileText, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const id = params ? parseInt(params.id) : 0;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-8">The product you are looking for does not exist or has been removed.</p>
            <Button asChild>
              <Link href="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const image = product.imageUrl || "/logo.png";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      <div className="bg-white border-b border-border py-4">
        <div className="container mx-auto px-4 text-sm text-muted-foreground flex items-center">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="bg-white rounded-xl shadow-sm border border-border p-8">
          <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[4/3] group shadow-inner">
                <img 
                  src={image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                   <Badge className="bg-primary text-white hover:bg-primary/90 text-sm px-3 py-1 uppercase tracking-wide">
                    {product.category}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              {product.series && (
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
                  {product.series}
                </div>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display uppercase tracking-wide">
                {product.name}
              </h1>
              
              <div className="prose prose-slate max-w-none mb-8 text-slate-600">
                <p>{product.description}</p>
              </div>

              {product.specifications && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 font-display border-b pb-2">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {Object.entries(product.specifications as Record<string, string>).map(([key, value]) => (
                       <div key={key} className="flex justify-between border-b border-slate-100 py-2">
                         <span className="font-medium text-slate-700 capitalize">{key.replace(/_/g, ' ')}</span>
                         <span className="text-slate-500 font-mono">{String(value)}</span>
                       </div>
                     ))}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    Available for Custom Order
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This product can be manufactured to your specific dimensional requirements. Contact our engineering team for a quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider flex-1">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider flex-1">
                      <FileText className="w-4 h-4 mr-2" /> Download Spec Sheet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
