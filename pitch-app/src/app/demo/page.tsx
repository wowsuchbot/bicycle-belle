"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-600">Bicycle Belle - Plan A Demo</h1>
            <div className="flex gap-4 items-center">
              {cart.length > 0 && (
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  Cart: {cart.length} items (${getTotalPrice()})
                </div>
              )}
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Back to Pitch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Instagram-to-Sales Bridge</h2>
          <p className="text-xl text-gray-700 mb-6">
            See how we turn your Instagram followers into customers
          </p>
          <div className="flex gap-4 justify-center text-sm">
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <div className="font-bold text-green-600">Accessories</div>
              <div className="text-gray-600">Full checkout</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <div className="font-bold text-blue-600">Bikes</div>
              <div className="text-gray-600">Test ride requests</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <div className="font-bold text-purple-600">Instagram</div>
              <div className="text-gray-600">Direct links</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab("bikes")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "bikes"
                ? "text-blue-600 border-b-4 border-blue-600 -mb-0.5"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Bike Showcase
          </button>
          <button
            onClick={() => setActiveTab("accessories")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "accessories"
                ? "text-green-600 border-b-4 border-green-600 -mb-0.5"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Accessory Store
          </button>
          <button
            onClick={() => setActiveTab("instagram")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "instagram"
                ? "text-purple-600 border-b-4 border-purple-600 -mb-0.5"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Instagram Feed
          </button>
        </div>

        {/* Content Area */}
        <div className="py-8">
          {/* Bike Showcase Tab */}
          {activeTab === "bikes" && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Beautiful Bike Galleries</h3>
                <p className="text-gray-600">Pricing visible, Request Test Ride CTA (NO checkout)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bikes.map((bike) => (
                  <div key={bike.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Bike Image</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{bike.name}</h4>
                    <p className="text-gray-600 mb-4">{bike.description}</p>
                    <div className="text-2xl font-bold text-green-600 mb-4">${bike.price.toLocaleString()}</div>
                    <button
                      onClick={() => requestTestRide(bike)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Request Test Ride
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">No online checkout - test rides only</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accessory Store Tab */}
          {activeTab === "accessories" && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Smart Accessory Store</h3>
                <p className="text-gray-600">Full checkout ONLY for items under $500</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accessories.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Product Image</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{item.category}</div>
                    <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                    <div className="text-2xl font-bold text-green-600 mb-4">${item.price}</div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Add to Cart
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">Ships within 2-3 days</p>
                  </div>
                ))}
              </div>
              {cart.length > 0 && (
                <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Your Cart</h4>
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between mb-2">
                      <span>{item.name}</span>
                      <span className="font-bold">${item.price}</span>
                    </div>
                  ))}
                  <div className="border-t-2 border-green-300 mt-4 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total:</span>
                      <span>${getTotalPrice()}</span>
                    </div>
                    <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Instagram Feed Tab */}
          {activeTab === "instagram" && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Instagram Integration</h3>
                <p className="text-gray-600">Embedded feed with Shop This Bike links and UTM tracking</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-64 flex items-center justify-center">
                      <span className="text-gray-600">Instagram Post Image</span>
                    </div>
                    <div className="p-4">
                      <p className="mb-2">{post.caption}</p>
                      <p className="text-sm text-gray-500 mb-4">{post.likes} likes</p>
                      {post.bikeId && (
                        <button
                          onClick={() => setActiveTab("bikes")}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm"
                        >
                          Shop This Bike
                        </button>
                      )}
                      {post.accessoryId && (
                        <button
                          onClick={() => setActiveTab("accessories")}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm"
                        >
                          Shop This Item
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Test Ride Form Modal */}
      {showTestRideForm && selectedBike && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Request Test Ride</h3>
            <p className="text-gray-600 mb-6">Book a test ride for the {selectedBike.name}</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Date/Time</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="e.g., Saturday afternoon" />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-sm">
                <p className="font-semibold mb-1">Calendly Integration</p>
                <p className="text-gray-600">In production, this would link to your Calendly booking page</p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowTestRideForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
