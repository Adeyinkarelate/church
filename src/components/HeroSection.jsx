import React from 'react';


const HeroSection = () => {
    return (
        <div class="relative bg-[url('./src/assets/b1.jpg')] bg-cover bg-no-repeat h-screen bg-fixed ">
        
        <div class="absolute inset-0 bg-black opacity-50"></div>

        
        <div class="relative z-10 flex items-center justify-center h-full">
            <h1 class="text-white text-4xl md:text-5xl font-ant md:w-1/2 text-center animate-pulse transition-all">ST PETER’S SOCIETY, ST.
                ANNE CATHOLIC CHURCH IBARA, ABEOKUTA.
            </h1>
            <p></p>
        </div>
    </div>
    );
};

export default HeroSection;