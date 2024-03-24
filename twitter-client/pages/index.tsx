import Image from "next/image";
import React, { useCallback } from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";

import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { GoogleLogin } from "@react-oauth/google";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  // const handleLoginWithGoogle = useCallback(
  //   (Credential: CredentialResponse) => {},
  //   []);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 px-1 ml-12">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 w-fit rounded-full px-3 py-3 cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] text-lg p-2 rounded-full w-full font-semibold ">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-auto scrollbar-hide border-gray-600 ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg text-center">
            <h1 className="my-2 text-2xl">New to Twiiter?</h1>
            <GoogleLogin onSuccess={(Credential) => console.log(Credential)} />
          </div>
        </div>
      </div>
    </div>
  );
}
