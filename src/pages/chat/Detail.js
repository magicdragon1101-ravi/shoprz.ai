import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { items } from "../../utils/items";
import Carousel from "../../components/common/Carousel";
import StarRating from "../../components/common/StarRating";
import classNames from "classnames";

const Detail = () => {
  const navigate = useNavigate();

  const id = window.location.href.split("?")[1] || 0;
  const item = items[id];

  const [tab, setTab] = useState("about");

  const handleTabChange = (tabName) => {
    setTab(tabName);
  };

  const renderTab = (tabName, label) => {
    return (
      <div>
        <div
          onClick={() => handleTabChange(tabName)}
          className={classNames("px-1.5 text-nowrap cursor-pointer", tab === tabName ? "font-semibold mb-2" : "mb-2.5")}
        >
          {label}
        </div>
        <hr className={classNames("border-t", tab === tabName ? "border-2 border-black" : "border-gray-500")} />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex-grow">
        <div
          onClick={() => navigate("/chat")}
          className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-2 mr-2.5 cursor-pointer"
        />
        <div className="mt-3">
          <div className="text-2xl font-bold">{item.title}</div>
          <div className="flex flex-row gap-1.5 items-center mb-3">
            <div className="text-lg">Reviews</div>
            <StarRating rating={item.reviews} />
            <div className="text-lg">{item.reviews}</div>
          </div>
          <div className="flex w-full mb-3">
            <img src="/assets/image/default.png" alt="Image" width={"500px"} />
          </div>
          <div className="flex flex-row w-full overflow-x-auto snap-x snap-mandatory gap-2.5 mb-3 scrollbar-hide">
            <div className="flex flex-row mb-2">
              {renderTab("about", "About this item")}
              {renderTab("tech", "Technical Details")}
              {renderTab("add", "Additional Information")}
              {renderTab("reviews", "Reviews")}
            </div>
            <hr className="border-t border-gray-500" />
          </div>
          <div className="mb-6">
            <h1 className="mb-6">
              <span className="font-semibold">Resolution: </span>4K Ultra HD (3840 x 2160) Resolution
            </h1>
            <h1 className="mb-2.5">
              <span className="font-semibold">Refresh Rate: </span>50 Hertz
            </h1>
            <div className="flex flex-row cursor-pointer">
              <span className="underline text-blue">More Information</span>
              <span className="bg-[url('/public/assets/icons/arrow_drop_down.png')] w-6 h-6"></span>
            </div>
          </div>
          <div className="mb-2 font-semibold">Where to buy?</div>
          <Carousel showButton={false}>
            <div className="flex flex-col flex-shrink-0 snap-start border-2 rounded-lg p-1.5 items-center justify-center px-6">
              <div className="flex flex-col items-center justify-center w-full mx-6 my-1">
                <div className="relative bg-[url('/public/assets/image/Walmart.png')] bg-stretch bg-no-repeat w-[100px] h-[50px] bg-center rounded mb-1" />
                <div className="flex flex-row gap-1.5 items-center">
                  <div className="font-semibold">$320</div>
                  <div className="text-gray-500 line-through">$540</div>
                  <div className="font-semibold text-red">54% off</div>
                </div>
                <hr className="flex w-full my-4" />
                <div className="flex p-2 font-semibold text-white rounded-lg w-fit bg-orange">See Offer</div>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 snap-start border-2 rounded-lg p-1.5 items-center justify-center px-6">
              <div className="flex flex-col items-center justify-center w-full mx-6 my-1">
                <div className="relative bg-[url('/public/assets/image/Samsung.png')] bg-stretch bg-no-repeat w-[100px] h-[50px] bg-center rounded mb-1" />
                <div className="flex flex-row gap-1.5 items-center">
                  <div className="font-semibold">$320</div>
                  <div className="text-gray-500 line-through">$540</div>
                  <div className="font-semibold text-red">54% off</div>
                </div>
                <hr className="flex w-full my-4" />
                <div className="flex p-2 font-semibold text-white rounded-lg w-fit bg-orange">See Offer</div>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 snap-start border-2 rounded-lg p-1.5 items-center justify-center px-6">
              <div className="flex flex-col items-center justify-center w-full mx-6 my-1">
                <div className="relative bg-[url('/public/assets/image/Best_Buy.png')] bg-stretch bg-no-repeat w-[100px] h-[50px] bg-center rounded mb-1" />
                <div className="flex flex-row gap-1.5 items-center">
                  <div className="font-semibold">$320</div>
                  <div className="text-gray-500 line-through">$540</div>
                  <div className="font-semibold text-red">54% off</div>
                </div>
                <hr className="flex w-full my-4" />
                <div className="flex p-2 font-semibold text-white rounded-lg w-fit bg-orange">See Offer</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Detail;
