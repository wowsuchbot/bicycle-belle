"use client";

import { ReactNode } from "react";

interface PitchSlideProps {
  title: string;
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

export default function PitchSlide({
  title,
  children,
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
}: PitchSlideProps) {
  return (
    <div className={`slide-container ${backgroundColor} ${textColor}`}>
      <div className="slide-content">
        <h1 className="text-5xl font-bold mb-8">{title}</h1>
        <div className="text-xl leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
