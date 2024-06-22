import { ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
type ArrowLinkType = {
  children: ReactNode;
  path: "consultation-request" | "support" | "seminar" | "common-questions";
};
const ArrowLink = ({ children, path }: ArrowLinkType) => {
  const navigate = useNavigate();
  const handlePath = (path: string) => {
    navigate(`/contact/${path}`);
  };
  return (
    <div className="col-span-1 flex justify-center items-center px-2 text-sm">
      <button
        onClick={() => handlePath(path)}
        className="hover:scale-95 anm-g flex justify-between items-center border-[0.01rem] border-slate-700 p-3 rounded-xl w-full"
      >
        <div>
          <p className="line-clamp-1">{children}</p>
        </div>
        <div>
          <IoIosArrowBack className="text-slate-700" size={20} />
        </div>
      </button>
    </div>
  );
};

export default ArrowLink;
