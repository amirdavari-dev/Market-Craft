import feed from "@/assets/images/feedback.png";
import nextAudio from "@/assets/images/nextAudio.svg";
import prevAudio from "@/assets/images/prevAudio.svg";
import { FaPlay } from "react-icons/fa6";
const AudioFeedback = () => {
  return (
    <div className="col-span-4 px-5 flex justify-center items-center">
      <div className="w-[377px] h-[533px] min-w-[377px] min-h-[533px] max-w-[377px] max-h-[533px] rounded-xl overflow-hidden relative">
        <img
          className=" z-[1] w-full h-full absolute top-0 right-0"
          src={feed}
          alt=""
        />
        <button className="z-[2] absolute top-[37%] right-[50%] translate-x-[50%] translate-y-[50%] bg-black/75 p-4 rounded-3xl">
        <FaPlay className="text-yellow-400" size={50} />
        </button>
        <div className="z-[2] absolute bottom-0 right-0 w-full">
          <div className="flex justify-center items-center p-2 px-10">
            <progress className="audioTime" value={40} max={100}></progress>
          </div>
          <div className="flex justify-center items-center gap-x-3 text-white py-3">
            <button>
              <img src={nextAudio}  alt="" />
            </button>
            <button>
              <FaPlay size={20} />
            </button>
            <button>
              <img src={prevAudio}  alt="" />
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioFeedback;
