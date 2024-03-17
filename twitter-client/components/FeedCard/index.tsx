import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="flex gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/44976328?v=4"
            alt="Profile-image"
            height={100}
            width={100}
          />
        </div>
        <div className="col-span-11">
          <h5>Piyush Garg</h5>
          <p>
            RCB in IPL 2008: Finished 2nd last. RCB in IPL 2009: Played in the
            final. RCB in WPL 2023: Finished 2nd last. RCB in WPL 2009: Going to
            play in the final.
          </p>
          <div className="flex justify-between mt-5 text-xl item-center p-2">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
