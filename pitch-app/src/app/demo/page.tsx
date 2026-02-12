"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { mockProducts, Product } from "@/data/mockProducts";
import Link from "next/link";

export default function DemoPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredProducts(mockProducts);
      return;
    }

    setIsSearching(true);
    
    // Simulate AI search delay
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const filtered = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.description.toLowerCase().includes(lowerQuery) ||
          product.category.toLowerCase().includes(lowerQuery) ||
          product.shopName.toLowerCase().includes(lowerQuery)
      );
      
      setFilteredProducts(filtered);
      setIsSearching(false);
    }, 500);
  };

  const quickSearches = [
    "fitness bike under $1000",
    "hybrid bike for commuting",
    "bikes at Velocity Cyclery",
    "affordable urban bike",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-600">Bicycle Belle</h1>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Pitch
            </Link>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Find Your Perfect Bike</h2>
          <p className="text-center text-gray-700 mb-8">Ask me anything - I'll find bikes from local shops near you</p>
          
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder='Try "best commuter bike under $1000" or "hybrid bikes near me"'
              className="w-full px-6 py-4 text-lg rounded-lg shadow-lg border-2 border-green-200 focus:border-green-500 focus:outline-none"
            />
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin h-6 w-6 border-2 border-green-600 border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>

          {/* Quick Searches */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-600">Try:</span>
            {quickSearches.map((quick) => (
              <button
                key={quick}
                onClick={() => handleSearch(quick)}
                className="text-sm px-3 py-1 bg-white rounded-full hover:bg-green-100 transition-colors border border-gray-200"
              >
                {quick}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">
            {searchQuery ? `Results for "${searchQuery}"` : "Available Bikes"}
          </h3>
          <span className="text-gray-600">
            {filteredProducts.length} bike{filteredProducts.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No bikes found matching your search.</p>
            <button
              onClick={() => handleSearch("")}
              className="mt-4 text-green-600 hover:text-green-700 font-semibold"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                shopName={product.shopName}
                distance={product.distance}
              />
            ))}
          </div>
        )}
      </div>

      {/* Demo Info */}
      <div className="bg-green-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">This is a Demo</h3>
          <p className="mb-4">
            In production, this would connect to real Lightspeed POS data from local bike shops,
            providing live inventory, pricing, and availability.
          </p>
          <p className="text-green-100">
            The AI would understand complex queries like "lightweight bike for hilly commutes under $800"
            and match them to the perfect products.
          </p>
        </div>
      </div>
    </div>
  );
}
