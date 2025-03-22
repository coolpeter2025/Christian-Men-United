"use client";

import { ReactNode, useRef, useState, useEffect } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  title?: string;
  className?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  itemWidth?: number; // Width in percentage (20 = 20%)
}

export default function HorizontalScroll({ 
  children, 
  title, 
  className = "",
  showControls = true,
  showIndicators = true,
  itemWidth = 80, // Default to 80% of container width for mobile
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate the scroll metrics when the component mounts or resizes
  useEffect(() => {
    const updateScrollMetrics = () => {
      if (!scrollRef.current) return;
      
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      const maxScrollValue = scrollWidth - clientWidth;
      
      setMaxScroll(maxScrollValue);
      setScrollPosition(scrollLeft);
      
      // Calculate number of visible items based on container and item width
      const containerWidth = clientWidth;
      const visibleItemCount = Math.floor(containerWidth / (containerWidth * (itemWidth / 100)));
      setVisibleItems(visibleItemCount);
      
      // Count total items (direct children of the scroll container)
      if (scrollRef.current.children.length) {
        setTotalItems(scrollRef.current.children.length);
      }
      
      // Calculate active index based on scroll position
      const newIndex = Math.round(scrollLeft / (maxScrollValue / (totalItems - 1)));
      setActiveIndex(Math.max(0, Math.min(newIndex, totalItems - 1)));
    };

    updateScrollMetrics();
    window.addEventListener('resize', updateScrollMetrics);
    
    return () => {
      window.removeEventListener('resize', updateScrollMetrics);
    };
  }, [itemWidth, totalItems]);

  // Handle scroll event to update indicators
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft } = scrollRef.current;
    setScrollPosition(scrollLeft);
    
    // Update active index based on scroll position
    if (maxScroll > 0) {
      const newIndex = Math.round(scrollLeft / (maxScroll / (totalItems - 1)));
      setActiveIndex(Math.max(0, Math.min(newIndex, totalItems - 1)));
    }
  };

  // Mouse/touch drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
    scrollRef.current!.style.cursor = 'grabbing';
    scrollRef.current!.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current!.style.cursor = 'grab';
    scrollRef.current!.style.removeProperty('user-select');
  };

  // Navigation functions
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current || totalItems <= 0) return;
    
    const targetIndex = Math.max(0, Math.min(index, totalItems - 1));
    const scrollValue = targetIndex * (maxScroll / (totalItems - 1));
    
    scrollRef.current.scrollTo({
      left: scrollValue,
      behavior: 'smooth'
    });
    
    setActiveIndex(targetIndex);
  };

  const scrollNext = () => {
    scrollToIndex(activeIndex + 1);
  };

  const scrollPrev = () => {
    scrollToIndex(activeIndex - 1);
  };

  return (
    <div className={`relative w-full my-8 ${className}`}>
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      
      {/* Visual scroll indicator */}
      <div className="flex items-center mb-4">
        <div className="h-0.5 flex-grow bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-500 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Scroll
        </span>
        <div className="h-0.5 flex-grow bg-gray-200"></div>
      </div>
      
      {/* Navigation arrows */}
      {showControls && totalItems > visibleItems && (
        <>
          <button 
            className={`absolute left-2 top-1/2 z-10 bg-white/80 text-primary rounded-full p-2 shadow-md transform -translate-y-1/2 transition-opacity ${scrollPosition <= 10 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={scrollPrev}
            aria-label="Previous items"
            disabled={scrollPosition <= 10}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className={`absolute right-2 top-1/2 z-10 bg-white/80 text-primary rounded-full p-2 shadow-md transform -translate-y-1/2 transition-opacity ${scrollPosition >= maxScroll - 10 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={scrollNext}
            aria-label="Next items"
            disabled={scrollPosition >= maxScroll - 10}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Horizontal scroll container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-6 px-4 scrollbar-hide"
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: 'grab' }}
      >
        {children}
      </div>
      
      {/* Scroll indicators */}
      {showIndicators && totalItems > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalItems }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-4' : 'bg-gray-300'}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
