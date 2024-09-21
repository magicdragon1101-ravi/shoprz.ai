import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      name: "Television",
      icon: "/assets/ad_units/Television.png",
      bgColor: "bg-[#EAC4D5]",
    },
    {
      name: "Refrigerator",
      icon: "/assets/ad_units/Refrigerator.png",
      bgColor: "bg-[#D6EADF]",
    },
    {
      name: "Air Conditioner",
      icon: "/assets/ad_units/Air_Conditioner.png",
      bgColor: "bg-[#FFC09F]",
    },
    {
      name: "Mobile",
      icon: "/assets/ad_units/Mobile.png",
      bgColor: "bg-[#B8E0D2]",
    },
    {
      name: "Laptop",
      icon: "/assets/ad_units/Laptop.png",
      bgColor: "bg-[#E1DBD6]",
    },
    {
      name: "Monitor",
      icon: "/assets/ad_units/Monitor.png",
      bgColor: "bg-[#D6EADF]",
    },
    {
      name: "Micro Oven",
      icon: "/assets/ad_units/Micro_Oven.png",
      bgColor: "bg-[#B8D4E8]",
    },
    {
      name: "Camera",
      icon: "/assets/ad_units/Camera.png",
      bgColor: "bg-[#EADDFF]",
    },
    {
      name: "Speaker",
      icon: "/assets/ad_units/Speaker.png",
      bgColor: "bg-[#E2E2E2]",
    },
  ];

  const CategoryCard = ({ category }) => {
    return (
      <Link to={"/chat"}>
        <div
          className={classNames(
            "flex items-center gap-1.5 rounded-full font-semibold py-2.5 px-3 cursor-pointer",
            category.bgColor
          )}
        >
          <img src={category.icon} alt={category.name} className="w-6 h-6" />
          <span>{category.name}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex flex-col items-center justify-between w-full md:flex-row">
      <div className="flex flex-col justify-center flex-1 p-4 text-center md:text-left md:p-6">
        <div className="flex flex-col max-w-[650px] w-full">
          <div className="flex flex-col w-fit">
            <h1 className="text-2xl font-bold md:text-5xl">
              Find Your <span className="text-blue">Ideal</span> Product
            </h1>
            <p className="mt-3 text-xl text-gray-700 md:text-2xl">
              Customized to Your <span className="font-bold">Needs</span>, Guaranteed at the{" "}
              <span className="font-bold">Best Price</span>
            </p>
          </div>
          <div className="mt-12">
            <h2 className="my-6 text-gray-600 text-md md:text-2xl">Select the category you need our help with.</h2>
            <div className="flex flex-row flex-wrap justify-center gap-3 mt-6 md:justify-start">
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden h-full md:block">
        <div className="bg-[url('/public/assets/bg/home_bg.png')] w-[496px] h-full bg-cover bg-center" />
      </div>
    </div>
  );
};

export default Home;
