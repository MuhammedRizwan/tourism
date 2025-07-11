"use client";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "Private Estates",
    desc: "The finest houses in Italy’s Chianti wine region to take over for a dolce vita summer escape.",
    image: "/images/discover/disc-1.jpg",
  },
  {
    title: "Villas",
    desc: "Beautiful houses to rent in the dreamiest destinations in Europe and the Caribbean.",
    image: "/images/discover/disc-2.webp",
  },
  {
    title: "Safari Lodges",
    desc: "The smartest, calmest safari lodges in the most show-stopping locations across Africa.",
    image: "/images/discover/disc-3.jpg",
  },
  {
    title: "Beachfront Escapes",
    desc: "Soak in luxury by the ocean, where every sunrise begins a new story.",
    image: "/images/discover/disc-4.jpg",
  },
  {
    title: "Countryside Retreats",
    desc: "Breathe deeply, surrounded by tranquil nature and timeless views.",
    image: "/images/discover/disc-5.jpg",
  },
  {
    title: "Island Hideaways",
    desc: "Secluded luxury on pristine islands, designed for pure escape.",
    image: "/images/discover/disc-6.webp",
  },
];

export default function DiscoverSection() {
  const cardWidth = 330;
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const scrollLeft = () => {
    setScrollX((prev) => Math.max(prev - cardWidth, 0));
  };

  const scrollRight = () => {
    const maxScroll = (data.length - 1) * cardWidth;
    setScrollX((prev) => {
      const next = prev + cardWidth;
      return next >= maxScroll ? 0 : next;
    });
  };

  return (
    <section className="bg-[#f8f1e6] py-16 px-4 md:px-6 text-center font-sans">
      <h2 className="text-2xl md:text-4xl font-serif text-gray-800 mb-4">
        Discover our remarkable <br /> moments and places
      </h2>

      <div className="relative mt-10">
        <div className="flex items-center justify-end gap-3 mb-6 pr-4">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-black hover:bg-gray-300"
          >
            <ChevronLeft size={18} className="text-black" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-black hover:bg-gray-300"
          >
            <ChevronRight size={18} className="text-black" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${scrollX}px)` }}
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                className="relative w-xs md:w-md flex-shrink-0 rounded overflow-hidden shadow-md bg-white group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-76 md:h-[32rem] w-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                  <h3 className="text-white font-serif text-lg">{item.title}</h3>
                  <p className="text-white text-xs mt-1 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
