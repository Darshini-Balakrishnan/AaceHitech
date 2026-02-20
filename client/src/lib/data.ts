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
    imageUrl: "/Clevis.png"
  },
  {
    id: 2,
    name: "Clevises with Rotating Shaft - FKR Series",
    category: "Clevises",
    series: "FKR Series",
    description: "Specialized clevises designed with a rotating shaft mechanism for enhanced flexibility.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 3,
    name: "Clevises with Male Thread - FT Series",
    category: "Clevises",
    series: "DIN71752 / DIN ISO8140 / CETOP",
    description: "Male threaded clevises offering robust connection points for pneumatic cylinders.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 4,
    name: "Clevises - FU Series",
    category: "Clevises",
    series: "FU Series",
    description: "Versatile clevises for general engineering applications.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 5,
    name: "Clevises - FC Series",
    category: "Clevises",
    series: "FC Series",
    description: "Heavy-duty clevises for demanding load environments.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 6,
    name: "Knuckle Eyes - FE Series",
    category: "Knuckle Eyes",
    series: "FE Series",
    description: "Precision-machined knuckle eyes for smooth articulation.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 7,
    name: "Knuckle Eyes - FKE Series",
    category: "Knuckle Eyes",
    series: "FKE Series",
    description: "High-performance knuckle eyes designed for durability.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 8,
    name: "Folding Spring Bolts - CL Series",
    category: "Bolts",
    series: "CL Series",
    description: "Reliable folding spring bolts for quick assembly and disassembly.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 9,
    name: "Bolts - PC Series",
    category: "Bolts",
    series: "PC Series",
    description: "Standard industrial bolts machined to precise tolerances.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 10,
    name: "Washers PC-R Series / Clips PC - C Series",
    category: "Accessories",
    series: "PC-R / PC-C",
    description: "Essential accessories including washers and clips for secure assembly.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 11,
    name: "Circlips for Shafts - PM-E Series",
    category: "Accessories",
    series: "DIN471",
    description: "DIN471 compliant circlips for secure shaft retention.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 12,
    name: "Rod Ends SI..T/K (Maintenance-free)",
    category: "Rod Ends",
    series: "SI..T/K",
    description: "Maintenance-free rod ends with internal thread, suitable for high dynamic loads.",
    specifications: null,
    imageUrl: "/logo.png"
  },
  {
    id: 13,
    name: "Rod Ends SA..T/K (Maintenance-free)",
    category: "Rod Ends",
    series: "SA..T/K",
    description: "Maintenance-free rod ends with external thread, offering long service life.",
    specifications: null,
    imageUrl: "/logo.png"
  }
];
