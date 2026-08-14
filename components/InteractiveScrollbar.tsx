"use client";

import { useEffect, useState, useRef } from "react";

export default function InteractiveScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const TRACK_HEIGHT = 160;
  const THUMB_HEIGHT = 36;
  const MAX_TRAVEL = TRACK_HEIGHT - THUMB_HEIGHT;

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const totalScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          const progress = Math.min(
            1,
            Math.max(0, window.scrollY / totalScroll)
          );
          setScrollProgress(progress);
          setIsVisible(window.scrollY > 80);
        } else {
          setIsVisible(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle Dragging
  const handleDrag = (clientY: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const relativeY = Math.min(
      MAX_TRAVEL,
      Math.max(0, clientY - rect.top - THUMB_HEIGHT / 2)
    );
    const progress = relativeY / MAX_TRAVEL;
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: progress * totalScroll,
      behavior: "auto",
    });
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleDrag(e.clientY);
      }
    };

    const onMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  const thumbY = scrollProgress * MAX_TRAVEL;
  const percentText = Math.round(scrollProgress * 100);

  return (
    <aside
      aria-label="Interactive scroll slider"
      className="fixed right-5 top-1/2 z-40 hidden md:flex flex-col items-center select-none"
      style={{
        transform: isVisible
          ? "translateY(-50%) translateX(0)"
          : "translateY(-50%) translateX(32px)",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition:
          "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !isDragging && setIsHovered(false)}
    >
      {/* Floating Dynamic Tooltip that travels with thumb */}
      <div
        className={`absolute right-6 px-2 py-0.5 text-[10px] font-mono font-medium text-white bg-[#1c1c1f]/90 border border-white/20 rounded-md backdrop-blur-xl shadow-lg pointer-events-none transition-all duration-200 ${
          isHovered || isDragging
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-90 translate-x-2"
        }`}
        style={{
          top: `${thumbY}px`,
          transform: "translateY(-2px)",
        }}
      >
        {percentText}%
      </div>

      {/* Liquid Glass Vertical Slider Track */}
      <div
        ref={trackRef}
        className={`relative w-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 backdrop-blur-xl cursor-pointer transition-all duration-200 ${
          isHovered || isDragging ? "w-2.5 bg-white/[0.14]" : ""
        }`}
        style={{ height: `${TRACK_HEIGHT}px` }}
        onClick={(e) => {
          handleDrag(e.clientY);
        }}
      >
        {/* Floating Apple Liquid Glass Capsule Thumb */}
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsDragging(true);
          }}
          className="absolute left-0 right-0 rounded-full cursor-grab active:cursor-grabbing transition-transform duration-75"
          style={{
            height: `${THUMB_HEIGHT}px`,
            transform: `translateY(${thumbY}px)`,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(41, 151, 255, 0.75) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow:
              "0 4px 16px rgba(41, 151, 255, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(12px)",
          }}
        />
      </div>
    </aside>
  );
}
