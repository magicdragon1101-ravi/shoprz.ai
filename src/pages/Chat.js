import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  if (isMobile) {
    return (
      <div className="flex flex-col flex-1 w-full">
        <div className="flex-grow mx-4">
          <div
            onClick={() => navigate("/")}
            className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-6 mr-2.5 cursor-pointer"
          ></div>
          {list.length === 0 ? (
            <div className="mt-4">
              <div className="mb-4">
                <h1 className="font-bold text-2xl leading-10">What do we start with your new TV Inquiry?</h1>
              </div>
              <div className="flex flex-row w-full items-center space-x-3 mb-4">
                <div className="w-10 h-10">
                  <div className="bg-[url('/public/assets/icons/init.png')] bg-cover bg-center w-full h-full aspect-square rounded-full"></div>
                </div>
                <div className="flex flex-col font-semibold text-md text-left">
                  <p>I’m here to assist you in planning your next purchase.</p>
                  <p>Ask me anything about TV!</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <div className="flex flex-row w-full items-center space-x-3">
                <div className="w-10 h-10">
                  <div className="bg-[url('/public/assets/icons/question.png')] bg-cover bg-center w-full h-full aspect-square rounded-full"></div>
                </div>
                <div className="flex flex-col text-md text-left">
                  <p>{list[0]}</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex flex-row w-full space-x-3 mb-4">
                <div className="w-10 h-10">
                  <div className="bg-[url('/public/assets/icons/answer.png')] bg-cover bg-center w-full h-full aspect-square rounded-full"></div>
                </div>
                <div className="flex flex-col text-left">
                  <div className="mb-3">
                    {loading ? (
                      <p>Just a moment</p>
                    ) : (
                      <p>When looking for a smart TV, here are a few factors to consider:</p>
                    )}
                  </div>
                  <p className="font-semibold">Smart Features</p>
                  <ul className="list-disc list-inside pl-2">
                    <li>Ensure compatibility with Google Assistant, Alexa, or Apple HomeKit.</li>
                    <li>Look for apps you use frequently, like Netflix, Hulu, YouTube, and others.</li>
                  </ul>
                </div>
              </div>
              <hr className="my-4" />
              <Carousel showButton={true}>
                {items.map((item, index) => (
                  <Link key={index} to={`/detail?${item.id}`}>
                    <div className="flex flex-col flex-shrink-0 snap-start w-[215px] h-[132px] border-2 rounded-lg py-1.5 px-3">
                      <div className="relative bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat w-[191px] h-[120px] bg-center rounded">
                        <div className="absolute bg-[#D6EADF] text-[#599A83] font-semibold -left-1.5 -top-1 py-1 px-1.5 rounded-full">
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

        <div className="relative mb-8 p-4">
          <input
            id="conversation"
            type="text"
            rows="1"
            value={conversation}
            onChange={(e) => setConversation(e.target.value)}
            placeholder="Start a conversation"
            className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4971BD]"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div
              onClick={conversation.trim() ? onSend : null}
              className={`bg-[url("/public/assets/icons/send_active.png")] 
            bg-cover bg-center w-6 h-6 mr-2.5 cursor-pointer ${conversation.trim() ? "" : "cursor-not-allowed"}`}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col flex-1 overflow-hidden justify-center text-center md:text-left p-4 md:py-6 md:px-8">
          <div className="flex-grow mx-4">
            <div
              onClick={() => navigate("/chat")}
              className="bg-[url('/public/assets/icons/arrow_back.png')] bg-cover bg-center w-6 h-6 mt-6 mr-2.5 cursor-pointer"
            ></div>
            {list.length === 0 ? (
              <div className="mt-4">
                <div className="mb-4">
                  <h1 className="font-bold text-2xl leading-10">What do we start with your new TV Inquiry?</h1>
                </div>
                <div className="flex flex-row w-full items-center space-x-3 mb-4">
                  <div className="w-10 h-10">
                    <div className="bg-[url('/public/assets/icons/init.png')] bg-cover bg-center w-full h-full aspect-square rounded-full"></div>
                  </div>
                  <div className="flex flex-col font-semibold text-md text-left">
                    <p>I’m here to assist you in planning your next purchase.</p>
                    <p>Ask me anything about TV!</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <div className="flex flex-row w-full items-center space-x-3">
                  <div className="w-10 h-10">
                    <div className="bg-[url('/public/assets/icons/question.png')] bg-cover bg-center w-full h-full aspect-square rounded-full"></div>
                  </div>
                  <div className="flex flex-col text-md text-left">
                    <p>{list[0]}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-row w-full space-x-3 mb-4">
                  <div className="w-10 h-10">
                    <div className="bg-[url('/public/assets/icons/answer.png')] bg-cover bg-center w-full h-full aspect-square rounded-full"></div>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="mb-3">
                      {loading ? (
                        <p>Just a moment</p>
                      ) : (
                        <p>When looking for a smart TV, here are a few factors to consider:</p>
                      )}
                    </div>
                    <p className="font-semibold">Smart Features</p>
                    <ul className="list-disc list-inside pl-2">
                      <li>Ensure compatibility with Google Assistant, Alexa, or Apple HomeKit.</li>
                      <li>Look for apps you use frequently, like Netflix, Hulu, YouTube, and others.</li>
                    </ul>
                  </div>
                </div>
                <hr className="my-4" />
                <Carousel showButton={true}>
                  {items.map((item, index) => (
                    <Link key={index} to={`/detail?${item.id}`}>
                      <div className="flex flex-col flex-shrink-0 snap-start w-[215px] h-[132px] border-2 rounded-lg py-1.5 px-3">
                        <div className="relative bg-[url('/public/assets/image/default.png')] bg-stretch bg-no-repeat w-[191px] h-[120px] bg-center rounded">
                          <div className="absolute bg-[#D6EADF] text-[#599A83] font-semibold -left-1.5 -top-1 py-1 px-1.5 rounded-full">
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

          <div className="relative mb-8 p-4">
            <input
              id="conversation"
              type="text"
              rows="1"
              value={conversation}
              onChange={(e) => setConversation(e.target.value)}
              placeholder="Start a conversation"
              className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4971BD]"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div
                onClick={conversation.trim() ? onSend : null}
                className={`bg-[url("/public/assets/icons/send_active.png")] 
              bg-cover bg-center w-6 h-6 mr-2.5 cursor-pointer ${conversation.trim() ? "" : "cursor-not-allowed"}`}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block h-full">
          <div className="w-[496px] h-full">
            <div className="flex flex-col w-full h-full">
              <div className="bg-[url('/public/assets/image/Television.png')] w-full h-[306px] bg-cover"></div>
              {list.length === 0 ? (
                <div className="flex flex-col w-full h-[calc(100%-306px)] justify-center items-center p-3">
                  <div className="w-10 h-10 mb-3">
                    <div className="bg-[url('/public/assets/icons/answer.png')] w-full h-full aspect-square bg-cover"></div>
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
                    {items.map((item) => (
                      <div className="flex flex-col bg-white rounded-lg p-3">
                        <div className="w-fit bg-[#D6EADF] text-[#599A83] py-1 px-1.5 rounded-full mb-2.5">
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
      </div>
    );
  }
};

export default Chat;
