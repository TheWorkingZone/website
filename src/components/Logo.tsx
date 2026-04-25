import React from "react";
import logoImage from "@/assets/logotwz.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="TheWorkingZone Logo" 
        className="h-12 md:h-16 w-auto object-contain mix-blend-multiply contrast-125 brightness-100"
      />
    </div>
  );
};

export default Logo;
