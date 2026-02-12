export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shopName: string;
  shopId: string;
  distance: string;
  category: string;
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Trek FX 3 Disc",
    price: 899.99,
    description: "Versatile fitness bike with disc brakes, perfect for commuting and weekend rides",
    shopName: "Velocity Cyclery",
    shopId: "shop-001",
    distance: "0.8 mi",
    category: "Fitness",
    inStock: true,
  },
  {
    id: "2",
    name: "Specialized Sirrus X 4.0",
    price: 1200.00,
    description: "Premium hybrid bike with future shock suspension for ultimate comfort",
    shopName: "The Bike Hub",
    shopId: "shop-002",
    distance: "1.2 mi",
    category: "Hybrid",
    inStock: true,
  },
  {
    id: "3",
    name: "Giant Escape 3",
    price: 550.00,
    description: "Affordable and reliable hybrid bike for city commuting",
    shopName: "Velocity Cyclery",
    shopId: "shop-001",
    distance: "0.8 mi",
    category: "Hybrid",
    inStock: true,
  },
  {
    id: "4",
    name: "Cannondale Quick CX 3",
    price: 950.00,
    description: "Fast and nimble fitness bike with wider tires for mixed terrain",
    shopName: "Pedal Power",
    shopId: "shop-003",
    distance: "2.5 mi",
    category: "Fitness",
    inStock: false,
  },
  {
    id: "5",
    name: "Raleigh Cadent 2",
    price: 675.00,
    description: "Comfortable urban bike with upright geometry and rack mounts",
    shopName: "The Bike Hub",
    shopId: "shop-002",
    distance: "1.2 mi",
    category: "Urban",
    inStock: true,
  },
  {
    id: "6",
    name: "Marin Fairfax 2",
    price: 725.00,
    description: "Versatile commuter with quality components and great value",
    shopName: "Cycle Solutions",
    shopId: "shop-004",
    distance: "3.1 mi",
    category: "Urban",
    inStock: true,
  },
];
