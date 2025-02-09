import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import menuBg from "../assets/menu/banner3.jpg";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        height={"800px"}
        title={"our menu"}
        coverSubTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-16">
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
      </div>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu item */}
      <div>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertBg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        img={pizzaBg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={salads}
        title={"salad"}
        img={saladBg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={soups}
        title={"soup"}
        img={soupBg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
