import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Fallback image if product.imageUrl is null
  const image = product.imageUrl || "/logo.png";

  return (
    <Card className="group overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white">
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 border-b">
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
        {/* Descriptive alt text for accessibility */}
        <img 
          src={image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-primary/90 text-white hover:bg-primary font-semibold uppercase tracking-wider text-[10px] rounded-sm shadow-sm">
            {product.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex-grow">
        {product.series && (
          <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{product.series}</p>
        )}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors font-display line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <Button asChild className="w-full bg-slate-100 text-slate-900 hover:bg-primary hover:text-white transition-all font-semibold rounded-sm group/btn">
          <Link href={`/products/${product.id}`}>
            View Specifications 
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
