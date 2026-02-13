// components/HorizontalScrollSection.js
"use client";
import { useRef, useEffect, useState } from "react";

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  const items = Array.from({ length: 3 }, (_, i) => i + 1);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = scrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Total height = screen height + horizontal scroll width
    setSectionHeight(scrollWidth - viewportWidth + window.innerHeight);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;

    const offsetTop = container.offsetTop;
    const scrollY = window.scrollY;

    // When the section is in viewport
    if (scrollY >= offsetTop && scrollY <= offsetTop + sectionHeight) {
      scrollContainer.style.transform = `translateX(-${scrollY - offsetTop}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionHeight]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: sectionHeight }}
    >
      <div
        ref={scrollRef}
        className="flex w-full h-[30vw] sticky top-0"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-full bg-blue-500 text-white flex items-center justify-center text-4xl"
          >
            Item {item}
          </div>
        ))}
      </div>
    </section>
  );
}
