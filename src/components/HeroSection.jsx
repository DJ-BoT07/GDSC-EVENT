import React from "react";
import heroBackground from "../images/img3.png"; // Import the image
import vector from "../images/Vector.png"; // Import the image

const scrollToCard = () => {
  const cardSection = document.getElementById("card-section");
  cardSection.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-start bg-cover bg-center filter brightness-200 font-mono" // Apply filter class here
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="flex justify-start ml-20">
        <div className="text-center spacing">
          <h1 className="text-6xl text-white text-opacity-75 font-bold">
            Welcome to the World
          </h1>
          <h1 className="text-6xl text-white text-opacity-75 font-bold">
            of Web
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-full transform translate-y-[15rem]">
          <div className="text-3xl text-white font-semibold">Explore More</div>
          <img
            src={vector}
            alt=""
            className="w-10 h-12 cursor-pointer mt-2"
            onClick={scrollToCard}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
