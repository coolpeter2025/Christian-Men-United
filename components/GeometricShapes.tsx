"use client";

interface CircleProps {
  className?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: string;
  opacity?: string;
}

export const Circle = ({
  className = "",
  size = "w-32 h-32",
  top = "",
  left = "",
  right = "",
  bottom = "",
  color = "bg-primary-light",
  opacity = "opacity-30"
}: CircleProps) => {
  return (
    <div
      className={`absolute rounded-full ${size} ${top} ${left} ${right} ${bottom} ${color} ${opacity} ${className}`}
    ></div>
  );
};

interface SquareProps {
  className?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: string;
  opacity?: string;
  rotate?: string;
}

export const Square = ({
  className = "",
  size = "w-32 h-32",
  top = "",
  left = "",
  right = "",
  bottom = "",
  color = "bg-mint",
  opacity = "opacity-50",
  rotate = ""
}: SquareProps) => {
  return (
    <div
      className={`absolute ${size} ${top} ${left} ${right} ${bottom} ${color} ${opacity} transform ${rotate} ${className}`}
    ></div>
  );
};

interface TriangleProps {
  className?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: string;
  opacity?: string;
  rotate?: string;
}

export const Triangle = ({
  className = "",
  size = "w-0 h-0 border-[30px]",
  top = "",
  left = "",
  right = "",
  bottom = "",
  color = "border-transparent border-b-accent",
  opacity = "opacity-40",
  rotate = ""
}: TriangleProps) => {
  return (
    <div
      className={`absolute ${size} ${top} ${left} ${right} ${bottom} ${color} ${opacity} transform ${rotate} ${className}`}
    ></div>
  );
};

interface DotsProps {
  className?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: string;
  opacity?: string;
}

export const Dots = ({
  className = "",
  top = "",
  left = "",
  right = "",
  bottom = "",
  color = "text-mint",
  opacity = "opacity-40"
}: DotsProps) => {
  return (
    <div className={`absolute ${top} ${left} ${right} ${bottom} ${opacity} ${className} grid grid-cols-3 gap-2`}>
      {[...Array(9)].map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${color}`}></div>
      ))}
    </div>
  );
};

interface WaveProps {
  className?: string;
  position?: string;
  color?: string;
  opacity?: string;
}

export const Wave = ({
  className = "",
  position = "bottom-0 left-0 right-0",
  color = "text-primary",
  opacity = "opacity-10"
}: WaveProps) => {
  return (
    <div className={`absolute ${position} w-full h-16 overflow-hidden ${opacity} ${className}`}>
      <svg
        className={`absolute bottom-0 left-0 w-full h-full transform translate-y-1/2 ${color}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  );
};

// Ready-made combinations for easy use
export const GeometricBackground = ({ type = "default", className = "" }) => {
  switch (type) {
    case "hero":
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <Circle size="w-64 h-64" top="-5%" right="-5%" color="bg-primary-light" opacity="opacity-10" />
          <Circle size="w-96 h-96" top="40%" left="-10%" color="bg-primary-light" opacity="opacity-15" />
          <Square size="w-48 h-48" bottom="10%" right="5%" color="bg-mint" opacity="opacity-20" rotate="rotate-12" />
          <Dots bottom="15%" right="15%" color="text-mint" opacity="opacity-30" />
        </div>
      );
    case "content":
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <Circle size="w-40 h-40" top="10%" right="5%" color="bg-accent-light" opacity="opacity-10" />
          <Triangle size="w-0 h-0 border-[40px]" bottom="10%" left="5%" opacity="opacity-15" />
          <Dots top="30%" left="10%" color="text-primary" opacity="opacity-20" />
        </div>
      );
    case "minimal":
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <Circle size="w-48 h-48" top="-10%" right="-5%" color="bg-primary-light" opacity="opacity-10" />
          <Circle size="w-32 h-32" bottom="10%" left="5%" color="bg-accent-light" opacity="opacity-10" />
        </div>
      );
    case "wave":
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <Wave position="bottom-0 left-0 right-0" color="text-white" opacity="opacity-100" />
        </div>
      );
    default:
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <Circle size="w-48 h-48" top="10%" right="10%" color="bg-primary-light" opacity="opacity-15" />
          <Square size="w-32 h-32" bottom="10%" left="10%" color="bg-mint" opacity="opacity-20" rotate="rotate-12" />
        </div>
      );
  }
};

export default {
  Circle,
  Square,
  Triangle,
  Dots,
  Wave,
  GeometricBackground
};
