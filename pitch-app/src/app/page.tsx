"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Transform Instagram Traffic into Revenue",
    subtitle: "A 3-Week Proof of Concept for Bicycle Belle",
  },
  {
    title: "The Problem",
    bullets: [
      "Dead winter season, no online sales channel",
      "Instagram followers see products but can't buy",
      "Expensive bikes sitting 3-6 months before purchase",
      "Missing winter accessory revenue (bar mitts, studded tires)",
      "No data on what Instagram traffic wants"
    ]
  },
  {
    title: "The Solution",
    subtitle: "Plan A: Instagram-to-Sales Bridge",
    details: ["Timeline: 2-3 weeks", "Cost: $3K-5K", "Risk: Minimal"]
  },
  {
    title: "Core Features",
    features: [
      { name: "Smart Accessory Store", desc: "Full checkout for items under $500" },
      { name: "Bike Showcase Pages", desc: '"Request Test Ride" CTA only' },
      { name: "Instagram Integration", desc: "Feed embed, shop links, UTM tracking" },
      { name: "Lead Capture", desc: "Calendly for test rides, email follow-up" }
    ]
  },
  {
    title: "Success Metrics",
    metrics: [
      "10+ test ride requests per post",
      "5% conversion rate on accessory pages",
      "20% reduction in 'Do you sell X?' DMs",
      "Prove concept before investing in Plan B"
    ]
  },
  {
    title: "The Path Forward",
    content: "If we hit these metrics in 3 months, we scale to Plan B",
    preview: ["Interactive bike finder", "Educational content hub", "Full e-commerce for all bikes"],
    future: "Plan C: Multi-store franchise platform"
  },
  {
    title: "See It In Action",
    isDemo: true
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="max-w-4xl w-full">
        {/* Slide content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4" style={{ color: 'var(--brand-primary)' }}>
            {slide.title}
          </h1>
          {'subtitle' in slide && slide.subtitle && (
            <p className="text-2xl text-text-secondary">{slide.subtitle}</p>
          )}
        </div>

        <div className="space-y-8">
          {'bullets' in slide && slide.bullets && (
            <ul className="space-y-4 text-xl">
              {slide.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-4 mt-1" style={{ color: 'var(--brand-accent)' }}>•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {'details' in slide && slide.details && (
            <div className="grid grid-cols-3 gap-6">
              {slide.details.map((detail, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded text-center">
                  <p className="text-lg font-semibold">{detail}</p>
                </div>
              ))}
            </div>
          )}

          {'features' in slide && slide.features && (
            <div className="grid grid-cols-2 gap-6">
              {slide.features.map((feature, i) => (
                <div key={i} className="border border-border-light p-6 rounded">
                  <h3 className="text-xl font-heading font-bold mb-2" style={{ color: 'var(--brand-primary)' }}>
                    {feature.name}
                  </h3>
                  <p className="text-text-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          )}

          {'metrics' in slide && slide.metrics && (
            <ul className="space-y-4 text-xl">
              {slide.metrics.map((metric, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-4 text-2xl" style={{ color: 'var(--brand-primary)' }}>✓</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          )}

          {'content' in slide && slide.content && (
            <>
              <p className="text-2xl font-semibold text-center mb-6">{slide.content}</p>
              {'preview' in slide && slide.preview && (
                <div className="bg-gray-50 p-8 rounded">
                  <p className="text-xl font-bold mb-4" style={{ color: 'var(--brand-primary)' }}>Plan B Preview:</p>
                  <ul className="space-y-2">
                    {slide.preview.map((item, i) => (
                      <li key={i} className="text-lg">• {item}</li>
                    ))}
                  </ul>
                  {'future' in slide && slide.future && (
                    <p className="text-lg mt-6 text-text-secondary italic">{slide.future}</p>
                  )}
                </div>
              )}
            </>
          )}

          {'isDemo' in slide && slide.isDemo && (
            <div className="text-center space-y-8">
              <Link href="/demo" className="btn-primary inline-block text-xl px-12 py-4">
                View Live Demo
              </Link>
              <div className="pt-8 border-t border-border-light">
                <p className="text-lg font-semibold mb-2">Bicycle Belle</p>
                <p className="text-text-secondary">368 Beacon St, Somerville MA • (617) 661-0969</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="px-6 py-2 rounded disabled:opacity-30"
            style={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}
          >
            ← Previous
          </button>
          <span className="text-text-secondary">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
            className="px-6 py-2 rounded disabled:opacity-30"
            style={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}