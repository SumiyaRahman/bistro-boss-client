import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
