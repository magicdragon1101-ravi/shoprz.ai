import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import Carousel from "../components/Carousel";
import { items } from "../utils/items";
import useIsMobile from "../utils/useIsMobile";

const Chat = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [conversation, setConversation] = useState("");

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

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
    return (
      <div className="flex flex-col w-full p-4">
        <div className="flex-grow">
          <div
            onClick={() => navigate("/")}
            className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-2 mr-2.5 cursor-pointer"
          />
          {list.length === 0 ? (
            <div className="flex flex-col w-full">
              <h1 className="text-[22px] font-bold leading-10 my-4 py-3">What do we start with your new TV Inquiry?</h1>
              <div className="flex flex-row w-full items-center">
                <div className="w-10 h-10 mr-3">
                  <div className="bg-[url('/public/assets/icons/init.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                </div>
                <div className="flex flex-col text-left text-md font-semibold">
                  <p>I’m here to assist you in planning your next purchase.</p>
                  <p>Ask me anything about TV!</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full mt-4">
              <div className="flex flex-row w-full items-center space-x-3">
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
                      <p className="font-semibold mb-1">Smart Features</p>
                      <ul className="list-disc list-inside pl-2">
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
                  <Link key={index} to={`/detail?${item.id}`}>
                    <div className="flex flex-col flex-shrink-0 snap-start w-[215px] h-[132px] border-2 rounded-lg py-1.5 px-3">
                      <div className="relative bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat w-[191px] h-[120px] bg-center rounded">
                        <div className="absolute bg-green-50 text-green font-semibold -left-1.5 -top-1 py-1 px-1.5 rounded-full">
                          {item.match}% matching
                        </div>
                      </div>
                      <div className="mt-2">
                        <h2 className="text-sm font-semibold">{item.title}</h2>
                      </div>
                    </div>
                  </Link>
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
            placeholder="Start a conversation"
            required
          />
          <div className="flex absolute inset-y-0 right-0 items-center">
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
    );
  } else {
    return (
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-1/2 overflow-hidden justify-center text-left py-6 px-8">
          <div className="flex-grow">
            <div
              onClick={() => navigate("/")}
              className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-6 mr-2.5 cursor-pointer"
            />
            {list.length === 0 ? (
              <div className="flex flex-col w-full">
                <h1 className="text-[22px] font-bold leading-10 my-4 py-3">
                  What do we start with your new TV Inquiry?
                </h1>
                <div className="flex flex-row w-full items-center">
                  <div className="w-10 h-10 mr-3">
                    <div className="bg-[url('/public/assets/icons/init.png')] bg-cover bg-center w-full h-full aspect-square rounded-full" />
                  </div>
                  <div className="flex flex-col text-left text-md font-semibold">
                    <p>I’m here to assist you in planning your next purchase.</p>
                    <p>Ask me anything about TV!</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full mt-4">
                <div className="flex flex-row w-full items-center space-x-3">
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
                        <p className="font-semibold mb-1">Smart Features</p>
                        <ul className="list-disc list-inside pl-2">
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
                    <Link key={index} to={`/detail?${item.id}`}>
                      <div className="flex flex-col flex-shrink-0 snap-start w-[215px] h-[132px] border-2 rounded-lg py-1.5 px-3">
                        <div className="relative bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat w-[191px] h-[120px] bg-center rounded">
                          <div className="absolute bg-green-50 text-green font-semibold -left-1.5 -top-1 py-1 px-1.5 rounded-full">
                            {item.match}% matching
                          </div>
                        </div>
                        <div className="mt-2">
                          <h2 className="text-sm font-semibold">{item.title}</h2>
                        </div>
                      </div>
                    </Link>
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
              placeholder="Start a conversation"
              required
            />
            <div className="flex absolute inset-y-0 right-0 items-center">
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
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="bg-[url('/public/assets/image/Television.png')] w-[496px] h-[306px] bg-cover bg-center"></div>
            {list.length === 0 ? (
              <div className="flex flex-col w-full h-[calc(100%-306px)] justify-center items-center px-20">
                <div className="w-10 h-10 mb-3">
                  <div className="bg-[url('/public/assets/icons/answer.png')] w-full h-full aspect-square bg-cover bg-center" />
                </div>
                <div className="font-semibold">No insights</div>
                <p className="text-center p-12">
                  Here I will show your product based on your answers to help you understand them better and find the
                  perfect need.
                </p>
              </div>
            ) : (
              <div className="flex flex-col w-full h-[calc(100%-306px)] bg-[#EDF1FD] p-3">
                <div className="text-xl font-semibold my-2.5">Selections</div>
                <div className="flex flex-col gap-2.5">
                  {items.map((item, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-lg p-3">
                      <div className="w-fit bg-green-50 text-green py-1 px-1.5 rounded-full mb-2.5">
                        {item.match}% matching
                      </div>
                      <div className="font-semibold">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
