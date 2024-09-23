import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { getTranslation } from "../../utils/translations";
import useIsMobile from "../../utils/useIsMobile";
import Carousel from "../../components/common/Carousel";
import { items } from "../../utils/items";
import Detail from "./Detail";

const Chat = () => {
  const language = useSelector((state) => state.lang.language);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [conversation, setConversation] = useState("");

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [active, setActive] = useState(null);

  const onSend = () => {
    if (conversation.trim()) {
      setLoading(true);
      setList([...list, conversation]);
      setConversation("");
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setConversation(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };

  if (isMobile) {
    return active === null ? (
      <div className="flex flex-col w-full p-4">
        <div className="flex-grow">
          <div
            onClick={() => navigate("/")}
            className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-2 mr-2.5 cursor-pointer"
          />
          {list.length === 0 ? (
            <div className="flex flex-col w-full">
              <h1 className="text-[22px] font-bold leading-10 my-4 py-3">{getTranslation(language, "chat_title")}</h1>
              <div className="flex flex-row items-center w-full">
                <div className="w-10 h-10 mr-3">
                  <div className="bg-[url('/public/assets/icons/init.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                </div>
                <div className="flex flex-col font-semibold text-left text-md">
                  {getTranslation(language, "chat_desc")}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full mt-4">
              <div className="flex flex-row items-center w-full space-x-3">
                <div className="w-10 h-10">
                  <div className="bg-[url('/public/assets/icons/question.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                </div>
                <div className="flex flex-col text-left text-md">
                  <p>{list[0]}</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex flex-row w-full mb-4">
                <div className="w-10 h-10 mr-3">
                  <div className="bg-[url('/public/assets/icons/answer.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                </div>
                <div className="flex flex-col text-left">
                  {loading ? (
                    <p>Just a moment</p>
                  ) : (
                    <div className="flex flex-col w-full">
                      <p className="mb-3">When looking for a smart TV, here are a few factors to consider:</p>
                      <p className="mb-1 font-semibold">Smart Features</p>
                      <ul className="pl-2 list-disc list-inside">
                        <li>Ensure compatibility with Google Assistant, Alexa, or Apple HomeKit.</li>
                        <li>Look for apps you use frequently, like Netflix, Hulu, YouTube, and others.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <hr className="my-4" />
              <Carousel showButton={true}>
                {items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActive(item.id)}
                    className="flex flex-col flex-shrink-0 snap-start w-[200px] h-[180px] border-2 rounded-lg py-1.5 px-3 cursor-pointer"
                  >
                    <div className="relative bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat w-full h-full bg-center rounded">
                      <div className="absolute bg-green-50 text-green font-semibold -left-1.5 -top-1 py-1 px-1.5 rounded-full">
                        {getTranslation(language, "matching")} {item.match}%
                      </div>
                    </div>
                    <div className="mt-2">
                      <h2 className="text-sm font-semibold">{item.title}</h2>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>

        <div className="relative mb-8">
          <input
            id="conversation"
            type="text"
            value={conversation}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={getTranslation(language, "start_conversation")}
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div
              onClick={conversation.trim() ? onSend : null}
              className={classNames(
                "bg-[url('/public/assets/icons/send_active.png')] bg-cover bg-center w-6 h-6 mr-2.5",
                conversation.trim() ? "cursor-pointer" : "cursor-not-allowed"
              )}
            />
          </div>
        </div>
      </div>
    ) : (
      <Detail id={active} setId={setActive} />
    );
  } else {
    return (
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col justify-center w-1/2 px-8 py-6 overflow-hidden text-left">
          <div className="flex-grow">
            <div
              onClick={() => navigate("/")}
              className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-6 mr-2.5 cursor-pointer"
            />
            {list.length === 0 ? (
              <div className="flex flex-col w-full">
                <h1 className="text-[22px] font-bold leading-10 my-4 py-3">{getTranslation(language, "chat_title")}</h1>
                <div className="flex flex-row items-center w-full">
                  <div className="w-10 h-10 mr-3">
                    <div className="bg-[url('/public/assets/icons/init.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                  </div>
                  <div className="flex flex-col font-semibold text-left text-md">
                    {getTranslation(language, "chat_desc")}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full mt-4">
                <div className="flex flex-row items-center w-full space-x-3">
                  <div className="w-10 h-10">
                    <div className="bg-[url('/public/assets/icons/question.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                  </div>
                  <div className="flex flex-col text-left text-md">
                    <p>{list[0]}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-row w-full mb-4">
                  <div className="w-10 h-10 mr-3">
                    <div className="bg-[url('/public/assets/icons/answer.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                  </div>
                  <div className="flex flex-col text-left">
                    {loading ? (
                      <p>Just a moment</p>
                    ) : (
                      <div className="flex flex-col w-full">
                        <p className="mb-3">When looking for a smart TV, here are a few factors to consider:</p>
                        <p className="mb-1 font-semibold">Smart Features</p>
                        <ul className="pl-2 list-disc list-inside">
                          <li>Ensure compatibility with Google Assistant, Alexa, or Apple HomeKit.</li>
                          <li>Look for apps you use frequently, like Netflix, Hulu, YouTube, and others.</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <hr className="my-4" />
                <Carousel showButton={true}>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setActive(item.id)}
                      className="flex flex-col flex-shrink-0 snap-start w-[200px] h-[180px] border-2 rounded-lg py-1.5 px-3 cursor-pointer"
                    >
                      <div className="relative bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat w-full h-full bg-center rounded">
                        <div className="absolute bg-green-50 text-green font-semibold -left-1.5 -top-1 py-1 px-1.5 rounded-full">
                          {getTranslation(language, "matching")} {item.match}%
                        </div>
                      </div>
                      <div className="mt-2">
                        <h2 className="text-sm font-semibold">{item.title}</h2>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>

          <div className="relative mb-8">
            <input
              id="conversation"
              type="text"
              value={conversation}
              onChange={onChange}
              onKeyDown={onKeyDown}
              placeholder={getTranslation(language, "start_conversation")}
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div
                onClick={conversation.trim() ? onSend : null}
                className={classNames(
                  "bg-[url('/public/assets/icons/send_active.png')] bg-cover bg-center w-6 h-6 mr-2.5",
                  conversation.trim() ? "cursor-pointer" : "cursor-not-allowed"
                )}
              />
            </div>
          </div>
        </div>

        <div className="felx flex-col w-1/2 bg-[#F7F9FC]">
          {active === null ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="bg-[url('/public/assets/image/Television.png')] w-[496px] h-[306px] bg-cover bg-center"></div>
              {list.length === 0 ? (
                <div className="flex flex-col w-full h-[calc(100%-306px)] justify-center items-center px-20">
                  <div className="w-10 h-10 mb-3">
                    <div className="bg-[url('/public/assets/icons/answer.png')] w-full h-full aspect-square bg-cover bg-center" />
                  </div>
                  <div className="font-semibold">{getTranslation(language, "no_insights")}</div>
                  <p className="p-12 text-center">{getTranslation(language, "no_insights_desc")}</p>
                </div>
              ) : (
                <div className="flex flex-col w-full h-[calc(100%-306px)] bg-[#EDF1FD] p-3">
                  <div className="text-xl font-semibold my-2.5">Selections</div>
                  <div className="flex flex-col gap-2.5">
                    {items.map((item, index) => (
                      <div key={index} className="flex flex-col p-3 bg-white rounded-lg">
                        <div className="w-fit bg-green-50 text-green py-1 px-1.5 rounded-full mb-2.5">
                          {getTranslation(language, "matching")} {item.match}%
                        </div>
                        <div className="font-semibold">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Detail id={active} setId={setActive} />
          )}
        </div>
      </div>
    );
  }
};

export default Chat;
