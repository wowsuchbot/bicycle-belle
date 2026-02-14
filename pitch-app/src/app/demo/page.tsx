"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

// Mock data for Plan A demo
const accessories = [
  { id: 1, name: "Bar Mitts", price: 45, image: "/placeholder.jpg", category: "Winter Gear" },
  { id: 2, name: "Studded Tires (pair)", price: 120, image: "/placeholder.jpg", category: "Winter Gear" },
  { id: 3, name: "Front & Rear Lights Set", price: 65, image: "/placeholder.jpg", category: "Safety" },
  { id: 4, name: "U-Lock Heavy Duty", price: 85, image: "/placeholder.jpg", category: "Security" },
  { id: 5, name: "Child Seat", price: 180, image: "/placeholder.jpg", category: "Family" },
];

const bikes = [
  { id: 1, name: "Tern GSD", price: 5999, description: "Electric cargo bike perfect for families", image: "/placeholder.jpg" },
  { id: 2, name: "Surly Long Haul Trucker", price: 1850, description: "Classic touring bike built to last", image: "/placeholder.jpg" },
  { id: 3, name: "Kona Dew", price: 899, description: "Versatile hybrid for commuting", image: "/placeholder.jpg" },
];

const instagramPosts = [
  { id: 1, caption: "New arrival! Tern GSD in stock", likes: 45, bikeId: 1 },
  { id: 2, caption: "Winter riding essentials - bar mitts back in stock!", likes: 32, accessoryId: 1 },
  { id: 3, caption: "Family bike adventures with the Tern GSD", likes: 58, bikeId: 1 },
];

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<"accessories" | "bikes" | "instagram">("bikes");
  const [cart, setCart] = useState<{id: number, name: string, price: number}[]>([]);
  const [showTestRideForm, setShowTestRideForm] = useState(false);
  const [selectedBike, setSelectedBike] = useState<typeof bikes[0] | null>(null);

  const addToCart = (item: {id: number, name: string, price: number}) => {
    setCart([...cart, item]);
  };

  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price, 0);

  const requestTestRide = (bike: typeof bikes[0]) => {
    setSelectedBike(bike);
    setShowTestRideForm(true);
  };

  return (
    <div className="min-h-screen bg-bg-secondary">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-heading font-bold" style={{ color: 'var(--brand-primary)' }}>
              Bicycle Belle - Plan A Demo
            </h1>
            <div className="flex gap-4 items-center">
              {cart.length > 0 && (
                <div className="bg-surface-light px-4 py-2 rounded-lg" style={{ color: 'var(--brand-primary)' }}>
                  Cart: {cart.length} items (${getTotalPrice()})
                </div>
              )}
              <Link 
                href="/" 
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                Back to Pitch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-12" style={{ background: 'linear-gradient(to bottom right, var(--surface-light), var(--bg-secondary))' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">Instagram to Sales - Live Demo</h2>
          <p className="text-xl text-text-secondary">Browse bikes, shop accessories, or discover what your followers see on Instagram</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 border-b border-border-light mb-8">
          <button
            onClick={() => setActiveTab("bikes")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "bikes" 
                ? "border-b-2 text-current" 
                : "text-text-secondary hover:text-text-primary"
            }`}
            style={activeTab === "bikes" ? { borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' } : {}}
          >
            Bikes (Showcase Only)
          </button>
          <button
            onClick={() => setActiveTab("accessories")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "accessories" 
                ? "border-b-2 text-current" 
                : "text-text-secondary hover:text-text-primary"
            }`}
            style={activeTab === "accessories" ? { borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' } : {}}
          >
            Accessories (Full Checkout)
          </button>
          <button
            onClick={() => setActiveTab("instagram")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "instagram" 
                ? "border-b-2 text-current" 
                : "text-text-secondary hover:text-text-primary"
            }`}
            style={activeTab === "instagram" ? { borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' } : {}}
          >
            Instagram Feed
          </button>
        </div>

        {/* Bikes Tab */}
        {activeTab === "bikes" && (
          <div>
            <div className="bg-surface-light border-l-4 p-4 mb-6" style={{ borderColor: 'var(--brand-accent)' }}>
              <p className="font-semibold">Plan A Strategy: Bikes are showcase only</p>
              <p className="text-sm text-text-secondary">High-value items get "Request Test Ride" CTA - no direct checkout</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {bikes.map(bike => (
                <ProductCard
                  key={bike.id}
                  name={bike.name}
                  price={bike.price}
                  description={bike.description}
                  image={bike.image}
                  onAction={() => requestTestRide(bike)}
                  actionLabel="Request Test Ride"
                />
              ))}
            </div>
          </div>
        )}

        {/* Accessories Tab */}
        {activeTab === "accessories" && (
          <div>
            <div className="bg-surface-light border-l-4 p-4 mb-6" style={{ borderColor: 'var(--brand-primary)' }}>
              <p className="font-semibold">Plan A Strategy: Full checkout for items under $500</p>
              <p className="text-sm text-text-secondary">Capture winter accessory revenue immediately</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {accessories.map(accessory => (
                <ProductCard
                  key={accessory.id}
                  name={accessory.name}
                  price={accessory.price}
                  category={accessory.category}
                  image={accessory.image}
                  onAction={() => addToCart(accessory)}
                  actionLabel="Add to Cart"
                />
              ))}
            </div>
          </div>
        )}

        {/* Instagram Tab */}
        {activeTab === "instagram" && (
          <div>
            <div className="bg-surface-light border-l-4 p-4 mb-6" style={{ borderColor: 'var(--brand-accent)' }}>
              <p className="font-semibold">Plan A Strategy: Make Instagram shoppable</p>
              <p className="text-sm text-text-secondary">Each post links to relevant product pages with UTM tracking</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {instagramPosts.map(post => {
                const linkedBike = bikes.find(b => b.id === post.bikeId);
                const linkedAccessory = accessories.find(a => a.id === post.accessoryId);
                
                return (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm border border-border-light p-6">
                    <div className="h-64 bg-surface-light rounded mb-4 flex items-center justify-center">
                      <span className="text-text-secondary">Instagram Post</span>
                    </div>
                    <p className="mb-2">{post.caption}</p>
                    <p className="text-sm text-text-secondary mb-4">❤️ {post.likes} likes</p>
                    {linkedBike && (
                      <button
                        onClick={() => {
                          setActiveTab("bikes");
                          setTimeout(() => requestTestRide(linkedBike), 100);
                        }}
                        className="btn-secondary w-full"
                      >
                        View {linkedBike.name} →
                      </button>
                    )}
                    {linkedAccessory && (
                      <button
                        onClick={() => {
                          setActiveTab("accessories");
                          addToCart(linkedAccessory);
                        }}
                        className="btn-primary w-full"
                      >
                        Shop {linkedAccessory.name} →
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Test Ride Modal */}
      {showTestRideForm && selectedBike && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-heading font-bold mb-4">Request Test Ride: {selectedBike.name}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full border border-border-light rounded px-4 py-2 focus:outline-none focus:ring-2" style={{ '--tw-ring-color': 'var(--brand-primary)' } as React.CSSProperties} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full border border-border-light rounded px-4 py-2 focus:outline-none focus:ring-2" style={{ '--tw-ring-color': 'var(--brand-primary)' } as React.CSSProperties} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input type="tel" className="w-full border border-border-light rounded px-4 py-2 focus:outline-none focus:ring-2" style={{ '--tw-ring-color': 'var(--brand-primary)' } as React.CSSProperties} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Time</label>
                <select className="w-full border border-border-light rounded px-4 py-2 focus:outline-none focus:ring-2" style={{ '--tw-ring-color': 'var(--brand-primary)' } as React.CSSProperties}>
                  <option>Morning (9am-12pm)</option>
                  <option>Afternoon (12pm-5pm)</option>
                  <option>Evening (5pm-7pm)</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Schedule Test Ride
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowTestRideForm(false);
                    setSelectedBike(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
            <p className="text-sm text-text-secondary mt-4">
              💡 In production, this would integrate with Calendly or your scheduling system
            </p>
          </div>
        </div>
      )}

      {/* Analytics Footer */}
      <div className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-heading font-bold mb-4">Plan A Success Metrics (Mock Data)</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-3xl font-bold" style={{ color: 'var(--brand-accent)' }}>23</div>
              <div className="text-sm text-gray-300">Test Ride Requests</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-3xl font-bold" style={{ color: 'var(--brand-accent)' }}>8.2%</div>
              <div className="text-sm text-gray-300">Accessory Conversion Rate</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-3xl font-bold" style={{ color: 'var(--brand-accent)' }}>$2,340</div>
              <div className="text-sm text-gray-300">Accessory Revenue (3 weeks)</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-3xl font-bold" style={{ color: 'var(--brand-accent)' }}>-35%</div>
              <div className="text-sm text-gray-300">Reduction in "Do you sell X?" DMs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}