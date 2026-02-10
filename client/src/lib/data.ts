export interface Product {
  id: number;
  name: string;
  category: string;
  series: string | null;
  description: string;
  specifications: Record<string, any> | null;
  imageUrl: string | null;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Clevises - FK Series",
    category: "Clevises",
    series: "DIN71752 / DIN ISO8140 / CETOP",
    description: "Standard clevises suitable for various industrial applications. Compliant with DIN71752 standards.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Clevises with Rotating Shaft - FKR Series",
    category: "Clevises",
    series: "FKR Series",
    description: "Specialized clevises designed with a rotating shaft mechanism for enhanced flexibility.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1565439396657-3f9b88b22295?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Clevises with Male Thread - FT Series",
    category: "Clevises",
    series: "DIN71752 / DIN ISO8140 / CETOP",
    description: "Male threaded clevises offering robust connection points for pneumatic cylinders.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Clevises - FU Series",
    category: "Clevises",
    series: "FU Series",
    description: "Versatile clevises for general engineering applications.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Clevises - FC Series",
    category: "Clevises",
    series: "FC Series",
    description: "Heavy-duty clevises for demanding load environments.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Knuckle Eyes - FE Series",
    category: "Knuckle Eyes",
    series: "FE Series",
    description: "Precision-machined knuckle eyes for smooth articulation.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1616259079524-733d824d5598?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Knuckle Eyes - FKE Series",
    category: "Knuckle Eyes",
    series: "FKE Series",
    description: "High-performance knuckle eyes designed for durability.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1517056037233-87796d13d78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Folding Spring Bolts - CL Series",
    category: "Bolts",
    series: "CL Series",
    description: "Reliable folding spring bolts for quick assembly and disassembly.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1563294326-89d1b64319c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Bolts - PC Series",
    category: "Bolts",
    series: "PC Series",
    description: "Standard industrial bolts machined to precise tolerances.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1563294326-89d1b64319c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Washers PC-R Series / Clips PC - C Series",
    category: "Accessories",
    series: "PC-R / PC-C",
    description: "Essential accessories including washers and clips for secure assembly.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Circlips for Shafts - PM-E Series",
    category: "Accessories",
    series: "DIN471",
    description: "DIN471 compliant circlips for secure shaft retention.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Rod Ends SI..T/K (Maintenance-free)",
    category: "Rod Ends",
    series: "SI..T/K",
    description: "Maintenance-free rod ends with internal thread, suitable for high dynamic loads.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb6948d313a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Rod Ends SA..T/K (Maintenance-free)",
    category: "Rod Ends",
    series: "SA..T/K",
    description: "Maintenance-free rod ends with external thread, offering long service life.",
    specifications: null,
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb6948d313a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
