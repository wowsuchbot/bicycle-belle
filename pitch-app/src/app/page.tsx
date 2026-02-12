"use client";

import { useState } from "react";
import PitchSlide from "@/components/PitchSlide";
import Link from "next/link";

const slides = [
  {
    id: 0,
    title: "Bicycle Belle",
    content: (
      <>
        <p className="text-3xl mb-6">AI-Powered Local Bike Shop Discovery</p>
        <p className="mb-4">Finding the perfect bike shouldn't mean endless website searches.</p>
        <p className="mb-4">Bicycle Belle connects you with local bike shops and their inventory through intelligent AI recommendations.</p>
        <div className="mt-8 text-gray-600">Press → to continue</div>
      </>
    ),
  },
  {
    id: 1,
    title: "The Problem",
    content: (
      <>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-2xl mr-4">🔍</span>
            <span>Customers struggle to find bikes at local shops - most inventory isn't online</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">🏪</span>
            <span>Local bike shops lose sales to online retailers due to poor discoverability</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">📊</span>
            <span>70% of bike shops use POS systems like Lightspeed but lack consumer-facing search</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Our Solution",
    content: (
      <>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-2xl mr-4">🤖</span>
            <span><strong>AI-Powered Search:</strong> Natural language queries like "best commuter bike under $1000"</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">🔌</span>
            <span><strong>Seamless Integration:</strong> Connects with Lightspeed and other POS systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">📍</span>
            <span><strong>Local First:</strong> Shows real-time inventory from shops near you</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">💰</span>
            <span><strong>Free for Shops:</strong> Revenue from customer referrals, not shop fees</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "How It Works",
    content: (
      <>
        <div className="space-y-6">
          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="font-bold mb-2">1. Customer Search</h3>
            <p>User describes what they need in natural language</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="font-bold mb-2">2. AI Matching</h3>
            <p>Our AI analyzes inventory from local shops and finds the best matches</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="font-bold mb-2">3. Real-Time Results</h3>
            <p>Display bikes with pricing, availability, and shop details</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="font-bold mb-2">4. Local Purchase</h3>
            <p>Customer visits shop, gets expert service, and supports local business</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Market Opportunity",
    content: (
      <>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-green-600">$6B</div>
            <div className="mt-2">US Bicycle Market</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-green-600">4,000+</div>
            <div className="mt-2">Independent Bike Shops</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-green-600">45%</div>
            <div className="mt-2">Growth in E-Bike Sales</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-green-600">70%</div>
            <div className="mt-2">Shops Use Lightspeed/Similar</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "See It In Action",
    content: (
      <>
        <p className="mb-8">Ready to see how Bicycle Belle works?</p>
        <Link 
          href="/demo" 
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
        >
          View Interactive Demo →
        </Link>
        <p className="mt-8 text-gray-600">Experience our AI-powered search with real product data</p>
      </>
    ),
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  return (
    <div 
      className="min-h-screen"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <PitchSlide
        title={slides[currentSlide].title}
        backgroundColor={currentSlide === 0 ? "bg-gradient-to-br from-green-50 to-green-100" : "bg-white"}
      >
        {slides[currentSlide].content}
      </PitchSlide>
      
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
        >
          ← Previous
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
