import React from 'react';

interface SantaHatProps {
  className?: string;
  size?: number;
}

/**
 * 3D Santa Hat SVG component
 * Larger, more dimensional Santa hat with gradients and shadows
 */
export const SantaHat: React.FC<SantaHatProps> = ({ 
  className = '', 
  size = 28 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle',
        filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.2)) drop-shadow(0 1px 3px rgba(0,0,0,0.15))'
      }}
    >
      <defs>
        {/* Red gradient for hat body - 3D effect */}
        <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
        {/* Shadow gradient for depth */}
        <linearGradient id="hatShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0.9" />
        </linearGradient>
        {/* White fur gradient */}
        <linearGradient id="furGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </linearGradient>
        {/* Pom-pom gradient */}
        <radialGradient id="pomGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </radialGradient>
      </defs>
      
      {/* Hat shadow layer for depth */}
      <path
        d="M16 4L5 11L16 18L27 11L16 4Z"
        fill="url(#hatShadow)"
        transform="translate(1, 1)"
        opacity="0.3"
      />
      
      {/* Main red hat body with 3D gradient */}
      <path
        d="M16 4L5 11L16 18L27 11L16 4Z"
        fill="url(#hatGradient)"
        stroke="#B91C1C"
        strokeWidth="0.5"
      />
      
      {/* Highlight on hat for 3D effect */}
      <path
        d="M16 4L8 9L16 14L24 9L16 4Z"
        fill="#F87171"
        opacity="0.4"
      />
      
      {/* White fur trim at bottom with gradient */}
      <path
        d="M5 11L16 18L27 11L25 10L16 16L7 10L5 11Z"
        fill="url(#furGradient)"
        stroke="#E5E7EB"
        strokeWidth="0.3"
      />
      
      {/* Fur texture lines */}
      <path
        d="M7 10.5L16 16L25 10.5"
        stroke="#FFFFFF"
        strokeWidth="0.5"
        opacity="0.6"
      />
      
      {/* Large white pom-pom with 3D gradient */}
      <circle
        cx="5"
        cy="11"
        r="3.5"
        fill="url(#pomGradient)"
        stroke="#E5E7EB"
        strokeWidth="0.5"
      />
      
      {/* Pom-pom highlight for 3D effect */}
      <circle
        cx="5.5"
        cy="10.5"
        r="1.5"
        fill="#FFFFFF"
        opacity="0.8"
      />
      
      {/* Pom-pom shadow */}
      <ellipse
        cx="5.8"
        cy="11.5"
        rx="2"
        ry="1.5"
        fill="#D1D5DB"
        opacity="0.3"
      />
    </svg>
  );
};

export default SantaHat;

