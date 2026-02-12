"use client";

import { useState } from "react";
import PitchSlide from "@/components/PitchSlide";
import Link from "next/link";

const slides = [
  {
    id: 0,
    title: "Transform Instagram Traffic into Revenue",
    content: (
      <>
        <p className="text-3xl mb-6">A 3-Week Proof of Concept for Bicycle Belle</p>
        <p className="text-xl mb-4">Turn your Instagram followers into customers this winter</p>
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
            <span className="text-2xl mr-4">❄️</span>
            <span>Dead winter season, no online sales channel</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">📱</span>
            <span>Instagram followers see products but can't buy</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">🚲</span>
            <span>Expensive bikes sitting 3-6 months before purchase</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">🧤</span>
            <span>Missing winter accessory revenue (bar mitts, studded tires)</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">📊</span>
            <span>No data on what Instagram traffic wants</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "The Solution - Plan A: Instagram-to-Sales Bridge",
    content: (
      <>
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-700 mb-2">Timeline: 2-3 weeks</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-700 mb-2">Cost: Low ($3K-5K)</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-purple-700 mb-2">Risk: Minimal</div>
          </div>
          <p className="text-xl mt-6">Test the concept before major investment</p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Core Features (Plan A Specifics)",
    content: (
      <>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-2xl mr-4">1.</span>
            <div>
              <strong>Smart Accessory Store</strong> - Full checkout ONLY for items under $500 (bar mitts, studded tires, lights, locks, child seats)
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">2.</span>
            <div>
              <strong>Bike Showcase Pages</strong> - Beautiful galleries with pricing, "Request Test Ride" CTA (NOT checkout)
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">3.</span>
            <div>
              <strong>Instagram Integration</strong> - Embedded feed, "Shop This Bike" links, UTM tracking
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">4.</span>
            <div>
              <strong>Lead Capture</strong> - Calendly integration for test rides, email capture with follow-up
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Success Metrics",
    content: (
      <>
        <p className="text-xl mb-6">What we need to prove in 3 months:</p>
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-700 mb-2">10+ test ride requests</div>
            <div className="text-gray-700">Per Instagram post</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-700 mb-2">5% conversion rate</div>
            <div className="text-gray-700">On accessory pages</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-700 mb-2">20% reduction</div>
            <div className="text-gray-700">In "Do you sell X?" Instagram DMs</div>
          </div>
          <p className="text-lg mt-6 text-gray-600">Prove concept before investing in Plan B</p>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "The Path Forward",
    content: (
      <>
        <p className="text-2xl mb-8 font-bold text-green-700">
          "If we hit these metrics in 3 months, we scale to Plan B: Full Digital Showroom"
        </p>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold mb-2 text-xl">Plan B adds:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Interactive bike finder</li>
              <li>Educational content hub</li>
              <li>Full e-commerce for all bikes</li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="font-bold mb-2 text-xl">Plan C (future):</h3>
            <p>Multi-store franchise platform</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "See It In Action",
    content: (
      <>
        <p className="text-xl mb-8">
          Experience the Instagram-to-Sales Bridge with our interactive demo.
        </p>
        <div className="flex justify-center">
          <Link
            href="/demo"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-colors"
          >
            View Live Demo →
          </Link>
        </div>
      </>
    ),
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <PitchSlide
        slide={slides[currentSlide]}
        onNext={nextSlide}
        onPrev={prevSlide}
        isFirst={currentSlide === 0}
        isLast={currentSlide === slides.length - 1}
        slideNumber={currentSlide + 1}
        totalSlides={slides.length}
      />
    </div>
  );
}
