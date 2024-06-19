import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ChangeTheme from "@/components/change-theme";
import market from "@/assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-slate-800 pb-3 font-thin">
      <div className="bg-yellow-400 flex justify-center items-center gap-x-4 p-6">
        <div>
          <a href="#">
            <FaTelegram size={30} />
          </a>
        </div>
        <div>
          <a href="#">
            <GrYoutube size={30} />
          </a>
        </div>
        <div>
          <a href="#">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div>
          <a href="#">
            <FaFacebook size={30} />
          </a>
        </div>
        <div>
          <a href="#">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-x-4 text-slate-400 px-3 py-5">
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/">دوره ها</Link>
          </li>
          <li>
            <Link to="/">سمینارها</Link>
          </li>
          <li>
            <Link to="/">وبلاگ</Link>
          </li>
          <li>
            <Link to="/">نتایج</Link>
          </li>
          <li>
            <Link to="/">درباره ما</Link>
          </li>
          <li>
            <Link to="/">تماس باما</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center my-5 text-slate-400">
        <ChangeTheme />
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <div>
          <img src={market} alt="MarketCraft" />
        </div>
        <div>
          <p className="text-slate-400 text-sm">تمام حقوق این وبسایت متعلق به مارکت کرفت می باشد</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
