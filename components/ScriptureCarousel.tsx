"use client";

import { useEffect, useRef, useState } from 'react';
import HorizontalScroll from './HorizontalScroll';
import { Circle, Square, Triangle } from './GeometricShapes';

// Sample scripture data
const scriptures = [
  { 
    id: 1, 
    text: "For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!", 
    reference: "Ecclesiastes 4:10",
    color: "bg-primary",
    shape: "circle"
  },
  { 
    id: 2, 
    text: "I appeal to you, brothers, by the name of our Lord Jesus Christ, that all of you agree, and that there be no divisions among you, but that you be united in the same mind and the same judgment.", 
    reference: "1 Corinthians 1:10",
    color: "bg-accent",
    shape: "square"
  },
  { 
    id: 3, 
    text: "Eager to maintain the unity of the Spirit through the bond of peace.", 
    reference: "Ephesians 4:3",
    color: "bg-primary-dark",
    shape: "triangle"
  },
  {
    id: 4,
    text: "Put on then, as God's chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience, bearing with one other and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.",
    reference: "Colossians 3:12-13",
    color: "bg-accent-light",
    shape: "circle"
  },
  {
    id: 5,
    text: "And above all these put on love, which binds everything together in perfect harmony.",
    reference: "Colossians 3:14",
    color: "bg-charcoal",
    shape: "square"
  },
  {
    id: 6,
    text: "Iron sharpens iron, and one man sharpens another.",
    reference: "Proverbs 27:17",
    color: "bg-primary-light",
    shape: "triangle"
  },
];

// Component for the scripture card with solid colors
const ScriptureCard = ({ scripture }: { scripture: any }) => {
  const ShapeElement = () => {
    switch (scripture.shape) {
      case 'circle':
        return <Circle size="w-20 h-20" top="10px" right="10px" color={scripture.color + "/30"} />;
      case 'square':
        return <Square size="w-20 h-20" top="10px" right="10px" color={scripture.color + "/30"} rotate="rotate-12" />;
      case 'triangle':
        return <Triangle size="w-0 h-0 border-[25px]" top="10px" right="10px" color="border-transparent border-b-white/20" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`flex-none w-[280px] md:w-[450px] p-8 rounded-lg ${scripture.color} text-white shadow-lg relative overflow-hidden`}
    >
      <ShapeElement />
      <div className="absolute w-12 h-12 -bottom-2 -left-2 rounded-full bg-white/10"></div>
      <p className="italic text-xl mb-4 min-h-[120px] relative z-10">"{scripture.text}"</p>
      <p className="font-bold text-right relative z-10">— {scripture.reference}</p>
    </div>
  );
};

export default function ScriptureCarousel() {
  return (
    <section className="py-16 bg-sand">
      <div className="container mx-auto relative">
        {/* Decorative shapes */}
        <Circle size="w-48 h-48" top="-20px" left="-5%" color="bg-primary" opacity="opacity-5" />
        <Square size="w-32 h-32" bottom="10%" right="5%" color="bg-accent" opacity="opacity-5" rotate="rotate-12" />
        
        <h2 className="text-3xl font-bold text-center mb-2">Guiding Scriptures</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        
        <HorizontalScroll>
          {scriptures.map((scripture) => (
            <ScriptureCard key={scripture.id} scripture={scripture} />
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
