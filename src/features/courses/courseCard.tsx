import course from "@/assets/images/course.png";
import FeedBackStar from "@/components/feedBackStar";
import { BsClockHistory } from "react-icons/bs";
const CourseCard = () => {
  return (
    <div className="col-span-4 px-5 flex justify-center items-center">
      <div className="border border-slate-700 rounded-xl py-3 px-4 text-sm">
        <div className="w-[376px] h-[269px] max-w-[376px] min-w-[376px] max-h-[269px] min-h-[269px] text-center rounded-xl overflow-hidden">
          <img className="w-full h-full" src={course} alt="" />
        </div>
        <div>
          <h5 className="text-center my-2 line-clamp-1 text-lg">
            تکنیک های عملی برای فروش
          </h5>
          <div className="my-2">
            <p className="line-clamp-1 text-center text-[11px]">ویژه مدیران و کسانی که قصد راه اندازی بیزنس دارند</p>
          </div>
          <div className="hidden justify-between items-center my-2">
            <div>
              <p>
                <del>50000000</del>
                <span>تومان</span>
              </p>
            </div>
            <div>
              <p className="text-yellow-400">رایگان</p>
            </div>
          </div>
          <div className="text-center px-2">
            <hr className="w-full h-[0.09rem] border-0 bg-slate-700" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-start items-center gap-x-2">
              <div>
                <BsClockHistory />
              </div>
              <div>
                <p className="text-[12px]">1 ساعت و 40 دقیقه</p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-1">
              <FeedBackStar countStar={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
