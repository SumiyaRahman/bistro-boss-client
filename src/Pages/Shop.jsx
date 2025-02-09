import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import shopBg from "../assets/shop/banner2.jpg";
import Cover from "./Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const category = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Cover
        img={shopBg}
        height={"800px"}
        title={"our shop"}
        coverSubTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
              <ShopTab items={salads}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab items={pizzas}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab items={soups}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab items={desserts}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab items={drinks}></ShopTab>
            </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
