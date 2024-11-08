// import heroImage from "../assets/images/b1.jpg";
import 'animate.css';

const HeroSection = () => {
  return (
    <div className="flex fle-col justify-center items-center h-screen ">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight  text-white animate__animated animate__slideInLeft">
          ST. PETER’S SOCIETY, ST. ANNE CATHOLIC <br /><span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">CHURCH IBARA, ABEOKUTA</span>
        </h1>
        <p className="text-sm font-light text-white my-3">
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
