import React from "react";
import backgroundImage from "../assets/images/b1.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat h-screen bg-fixed"
      style={{ backgroundImage: `url('src/assets/images/b1.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl font-semibold md:w-1/2 text-center animate-pulse transition-all">
          ST. PETER’S SOCIETY, ST. ANNE CATHOLIC CHURCH IBARA, ABEOKUTA.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
