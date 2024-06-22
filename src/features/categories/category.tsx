import category from "@/assets/images/category.png";
import FeedBackStar from "@/components/feedBackStar";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="col-span-4 px-5 flex justify-center items-center">
      <div className="border border-slate-700 rounded-xl py-3 px-4 text-sm">
        <div className="text-center rounded-xl overflow-hidden w-[368px] h-[261px] min-w-[368px] min-h-[261px] max-w-[368px] max-h-[261px]">
          <img className="w-full h-full" src={category} alt="" />
        </div>
        <div>
          <p className="mt-2 text-[11px]">مارکتینگ</p>
          <h5 className="text-start my-2 line-clamp-1 text-lg font-bold">
            <Link to="/">تکنیک های عملی برای فروش</Link>
          </h5>
          <div>
            <ul className="text-[12px] list-disc ps-4">
              <li> 1 اردیبهشت 1403</li>
            </ul>
          </div>
          <p className="w-full text-justify line-clamp-3 mt-2 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti voluptas, officia consequuntur tenetur, quis reprehenderit sint nostrum iste aspernatur aliquid! Incidunt explicabo similique eius consequatur nemo autem ad distinctio!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
