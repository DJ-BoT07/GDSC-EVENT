import React from 'react'
import Imgo from "../images/img.png";

const CardComponent = ({image}) => {
  return (
    <div className="flex justify-center flex-wrap mt-11">
      <div className="w-[325px] bg-[#111111] rounded-lg overflow-hidden m-5">
        
        <div className="p-5">
          <p className="text-md text-white font-semibold font-mono">{image.name}</p>
          <h2 className="text-4xl my-7 text-white font-bold font-mono">{image.title}</h2>
          <p className="text-md text-white tracking-tight font-mono">{image.description}</p>
        
        </div>
        <img src={image.img} alt="" srcset="" className="w-full h-auto" />   
      </div>
    </div>
  )
}

export default CardComponent