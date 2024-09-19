import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { items } from "../utils/items";
import StarRating from "../components/StarRating";
import Carousel from "../components/Carousel";

const Detail = () => {
  const navigate = useNavigate();

  const id = window.location.href.split("?")[1] || 0;
  const item = items[id];

  const [rating, setRating] = useState(item.reviews || 0);
  const [tab, setTab] = useState("about");
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex-grow mx-4">
        <div
          onClick={() => navigate("/chat")}
          className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-6 mr-2.5 cursor-pointer"
        ></div>
        <div className="mt-4">
          <div className="text-2xl font-bold">{item.title}</div>
          <div className="flex flex-row gap-1.5 items-center mb-3">
            <div className="text-xl">Reviews</div>
            <StarRating rating={rating} onRatingChange={setRating} />
            <div className="text-xl">{rating}</div>
          </div>
          <div className="flex w-full mb-3">
            <div className="bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat bg-center w-full h-[200px]" />
          </div>
          <div className="relative w-full">
            <div className="flex flex-row w-full overflow-x-auto snap-x snap-mandatory gap-2.5 mb-3 scrollbar-hide">
              <div className="flex flex-row mb-2">
                <div>
                  <div
                    onClick={() => setTab("about")}
                    className={classNames("px-1.5 text-nowrap", tab === "about" ? "font-semibold mb-2" : "mb-2.5")}
                  >
                    About this item
                  </div>
                  <hr
                    className={classNames(
                      "border-t",
                      tab === "about" ? "border-2 border-black" : "border-1 border-gray-500"
                    )}
                  />
                </div>
                <div>
                  <div
                    onClick={() => setTab("tech")}
                    className={classNames("px-1.5 text-nowrap", tab === "tech" ? "font-semibold mb-2" : "mb-2.5")}
                  >
                    Technical Details
                  </div>
                  <hr
                    className={classNames(
                      "border-t",
                      tab === "tech" ? "border-2 border-black" : "border-1 border-gray-500"
                    )}
                  />
                </div>
                <div>
                  <div
                    onClick={() => setTab("add")}
                    className={classNames("px-1.5 text-nowrap", tab === "add" ? "font-semibold mb-2" : "mb-2.5")}
                  >
                    Additional Information
                  </div>
                  <hr
                    className={classNames(
                      "border-t",
                      tab === "add" ? "border-2 border-black" : "border-1 border-gray-500"
                    )}
                  />
                </div>
              </div>
              <hr className="border-t border-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-6">
              <span className="font-semibold">Resolution: </span>4K Ultra HD (3840 x 2160) Resolution
            </div>
            <div className="mb-2.5">
              <span className="font-semibold">Refresh Rate: </span>50 Hertz
            </div>
            <div className="flex flex-row cursor-pointer">
              <div className="text-[#4971BD] underline">More Information</div>
              <div className="bg-[url('/public/assets/icons/arrow_drop_down.png')] w-6 h-6"></div>
            </div>
          </div>
          <div className="font-semibold mb-2">Where to buy?</div>
          <Carousel showButton={false}>
            <div className="flex flex-col flex-shrink-0 snap-start h-[132px] border-2 rounded-lg p-1.5 items-center justify-center">
              <div className="relative bg-[url('/public/assets/image/Walmart.png')] bg-stretch bg-no-repeat w-[106px] h-[48px] bg-center rounded mb-3"></div>
              <div className="flex flex-row gap-1.5 items-center">
                <div className="font-semibold">$320</div>
                <div className="text-gray-500 line-through">$540</div>
                <div className="font-semibold text-[#EB5757]">54% off</div>
                <div className="bg-[#F2994A] text-white font-semibold rounded-lg p-2">See Offer</div>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 snap-start h-[132px] border-2 rounded-lg py-1.5 px-3 items-center justify-center">
              <div className="relative bg-[url('/public/assets/image/Samsung.png')] bg-stretch bg-no-repeat w-[106px] h-[48px] bg-center rounded mb-3"></div>
              <div className="flex flex-row gap-1.5 items-center">
                <div className="font-semibold">$320</div>
                <div className="text-gray-500 line-through">$540</div>
                <div className="font-semibold text-[#EB5757]">54% off</div>
                <div className="bg-[#F2994A] text-white font-semibold rounded-lg p-2">See Offer</div>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 snap-start h-[132px] border-2 rounded-lg py-1.5 px-3 items-center justify-center">
              <div className="relative bg-[url('/public/assets/image/Best_Buy.png')] bg-stretch bg-no-repeat w-[106px] h-[48px] bg-center rounded mb-3"></div>
              <div className="flex flex-row gap-1.5 items-center">
                <div className="font-semibold">$320</div>
                <div className="text-gray-500 line-through">$540</div>
                <div className="font-semibold text-[#EB5757]">54% off</div>
                <div className="bg-[#F2994A] text-white font-semibold rounded-lg p-2">See Offer</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Detail;
