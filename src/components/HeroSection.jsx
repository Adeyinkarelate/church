import heroImage from "../assets/images/b1.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black ">
      {/* Image Section */}
      <div className="">
        <img
          className=" object-cover h-full   "
          src={heroImage}
          alt="Church community"
        />
      </div>
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start  py-8 md:py-0  text-center md:text-left space-y-4  px-3">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight md:max-w-[480px] text-transparent bg-gradient-to-r from-orange-600 to-orange-900 animate-pulse bg-clip-text">
          ST. PETER’S SOCIETY, ST. ANNE CATHOLIC CHURCH IBARA, ABEOKUTA
        </h1>
        <p className="text-sm font-light text-white">
          A community rooted in faith, dedicated to spiritual growth, and
          committed to service.
        </p>
        <a href="" className="border text-white px-3 py-2 rounded-md">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
