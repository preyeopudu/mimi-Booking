"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import TrendingComponent from "../components/trendingDestination/TrendingComponent";

const TrendingDestination = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 100;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 100;
    }
  };

  const handleIndicatorClick = (index) => {
    setActiveSection(index);
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = index * sliderRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const sectionWidth = sliderRef.current.offsetWidth;
        const activeSection = Math.round(scrollPosition / sectionWidth);
        setActiveSection(activeSection);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="my-12 mt-14">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Trending destinations</p>
        <div className="flex gap-x-3">
          <button
            onClick={slideLeft}
            className="rounded-lg py-2 hover:bg-slate-600 active:bg-slate-600 active:text-white hover:text-white border px-3 border-slate-700"
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={slideRight}
            className="rounded-lg py-2 hover:bg-slate-600 active:bg-slate-600 active:text-white hover:text-white border px-3 border-slate-700"
          >
            <GoChevronRight />
          </button>
        </div>
      </div>

      <div
        id="slider"
        className="mt-10 flex-shrink-0 w-full overflow-x-scroll flex gap-x-7 whitespace-nowrap"
        ref={sliderRef}
      >
        <TrendingComponent />
        <TrendingComponent />
        <TrendingComponent />
        <TrendingComponent />
      </div>

      <div className="flex justify-center mt-6">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              activeSection === index ? "bg-slate-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestination;
