import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({img, height = '100vh', title, coverSubTitle}) => {
  return (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
      className="hero min-h-screen"
      
    >
      <div className=""></div>
      <div className="hero-content text-white  text-center">
        <div className="bg-[#151515] bg-opacity-60 py-24 px-60">
          <h1 className="mb-5 md:text-7xl font-bold uppercase">{title}</h1>
          <p className="mb-5 text-xl font-semibold">
            {coverSubTitle}
          </p>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

export default Cover;
