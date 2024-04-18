import React from "react";
import CardComponent from "./CardComponent";
import Back from "../../images/back.png";
import Front from "../../images/front.png";
import Data from "../../images/data.png";

const imageData = [
  {
    id: 1,
    name: "Component 1",
    title: "Frontend",
    img: Front,
    description: "The part of web that the end user can see"
  },
  {
    id: 2,
    name: "Component 2",
    title: "Backend",
    img: Back,
    description: "The backbone of the website that powers the websites"
  },
  {
    id: 3,
    name: "Component 3",
    title: "Databases",
    img: Data,
    description: "Description for Data image"
  }
];

const Card = () => {
  return (
    <>
      <div id="card-section" className="h-screen bg-[#010101] flex flex-col items-start filter">
        <h1 className="ml-32 text-6xl font-bold text-white text-opacity-70 text-6xl tracking-wider mt-32 font-mono">
          Components of Web
        </h1>
        <div className="flex flex-row flex-wrap justify-center w-full">
          {imageData.map((image) => (
            <CardComponent key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
