import carLogo from "@/assets/images/header.png";
import SideLine from "@/components/sideLine";
import initCover from "@/assets/images/init.png";
import { Link } from "react-router-dom";
import TitleBox from "@/components/titleBox";
import CourseLayout from "@/features/courses/courseLayout";
import AudioFeedbackLayout from "@/features/feedback/audioFeedbackLayout";
import { IoLogoInstagram } from "react-icons/io5";
import SocialMediaLayout from "@/features/socialMedia/socialMediaLayout";
import CategoriesLayout from "@/features/categories/categoriesLayout";
import AOS from "aos";
import { useEffect, useState } from "react";
const Home = () => {
  const [scrollSlideOne, setScrollSlideOne] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
  });
  // hide slide one
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY !== 0 ? setScrollSlideOne(true) : setScrollSlideOne(false);
    });
  }, [window.scroll]);

  return (
    <>
      {/* slide 1 */}
      <div
        data-aos="fade-down"
        className={`h-[660px] max-h-[798px] w-full relative ${
          scrollSlideOne && "hidden"
        }`}
      >
        <img
          className="z-[1] w-full h-full absolute top-0 right-0"
          src={carLogo}
          alt="Car"
        />
        {/* filter on cover */}
        <div className="z-[2] w-full h-full bg-slate-800/20 absolute top-0 right-0"></div>
        {/* line left */}
        <SideLine changePosition position={20} />
        {/* get price link */}
        <Link
          className="z-[3] font-extrabold text-slate-700 hover:scale-95 anm-g bg-yellow-400 rounded-2xl py-3 px-5 absolute bottom-40 right-[250px] text-lg"
          to="/"
        >
          دریافت هدیه
        </Link>
      </div>
      {/* slide 2 */}
      <div data-aos="fade-down" className="grid grid-cols-12">
        <div className="col-span-8 bg-slate-900 relative flex justify-center items-center">
          <SideLine />
          <div className="font-bold text-center">
            <h3 className="text-yellow-400 text-[35px]">
              تخصصه که برای پول میاره
            </h3>
            <h4 className="text-white text-[40px] my-10">
              فرمول رشد 300 درصدی درآمد
            </h4>
            <div className="text-center">
              <a
                className="bg-yellow-400 text-slate-800 p-3 rounded-2xl"
                href="#"
              >
                دریافت مدرک دانشگاه صنعت شریف
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <img className="w-full h-full" src={initCover} alt="MarketCraft " />
        </div>
      </div>
      {/* slide 3 */}
      <div className="bg-slate-800">
        <div className="text-center p-3">
          <TitleBox className="text-white">دوره های رایگان</TitleBox>
        </div>
        <CourseLayout />
      </div>
      {/* slide 4 */}
      <div className="bg-slate-900 py-3">
        <div className="text-center p-3">
          <TitleBox className="text-white" sideText="VIP">
            دوره های
          </TitleBox>
        </div>
        <CourseLayout />
      </div>
      {/* slide 5 */}
      <div className="bg-slate-800 p-3">
        <div className="p-3">
          <TitleBox className="text-white">نظرات کاربران را بشنوید</TitleBox>
        </div>
        <AudioFeedbackLayout />
      </div>
      {/* slide 6 -> instagram */}
      <div className="bg-slate-900 p-3">
        <div className="flex justify-center items-center">
          <h3 className="flex justify-center items-center gap-x-2 text-white p-3 font-extrabold bg-gradient-to-l from-orange-400 to-fuchsia-600 w-fit rounded-2xl text-lg">
            <span>
              <IoLogoInstagram size={20} />
            </span>
            <span>مارا در اینستاگرام دنبال کنید</span>
          </h3>
        </div>
        <SocialMediaLayout />
      </div>
      {/* slide 7 -> category */}
      <div className="bg-slate-800 p-3">
        <div className="text-center">
          <TitleBox className="text-white">آخرین مقالات</TitleBox>
        </div>
        <CategoriesLayout />
      </div>
    </>
  );
};

export default Home;
