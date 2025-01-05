import React from "react";
import SectionTitle from "../Components/SectionTitle";
import featuredImg from "../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed pt-32 text-white">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex justify-center items-center px-52 gap-16">
        <div>
          <img src={featuredImg} />
        </div>
        <div className="space-y-5">
          <p>Jan 6, 2025</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-2 border-white rounded px-6">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
