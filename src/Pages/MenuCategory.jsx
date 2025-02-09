import React from "react";
import MenuItem from "./Shared/MenuItem";
import Cover from "./Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={img}
          height={"700px"}
          title={title}
          coverSubTitle={subTitle}
        ></Cover>
      )}
      {/* <Cover
        img={menuBg}
        height={"800px"}
        title={"our menu"}
        coverSubTitle={"Would you like to try a dish?"}
      ></Cover> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/shop/${title}`}>
        <button className="border-b-2 border-white rounded px-6 uppercase">
          order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
