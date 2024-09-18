import React from "react";

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
      <div className={`flex items-center gap-1.5 rounded-full font-semibold py-2.5 px-3 ${category.bgColor}`}>
        <img src={category.icon} alt={category.name} className="w-6 h-6" />
        <span>{category.name}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center">
      <div className="flex flex-col flex-1 justify-center text-center md:text-left p-4 md:p-6">
        <h1 className="font-bold text-2xl md:text-5xl">
          Find Your <span className="text-[#4971BD]">Ideal</span> Product
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-3">
          Customized to Your <span className="font-bold">Needs</span>, Guaranteed at the{" "}
          <span className="font-bold">Best Price</span>
        </p>
        <div className="mt-12">
          <h2 className="text-md md:text-2xl text-gray-600 my-6">Select the category you need our help with.</h2>
          <div className="flex flex-row flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block h-full">
        <div className="bg-[url('/public/assets/bg/home_bg.png')] w-[496px] h-full bg-cover"></div>
      </div>
    </div>
  );
};

export default Home;
