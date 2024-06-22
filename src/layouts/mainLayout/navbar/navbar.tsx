import market from "@/assets/images/logo.png";
import MegaMenu from "./megaMenu";
import { Link, NavLink } from "react-router-dom";
import ChangeTheme from "@/components/change-theme";
import { FiSearch } from "react-icons/fi";
import MegaLink from "./megaLink";
const Navbar = () => {
  return (
    <nav className=" text-slate-400 py-2 px-4 bg-slate-800 text-sm">
      <div className="grid grid-cols-12">
        <div className="col-span-5 flex justify-start items-center gap-x-1">
          <MegaMenu location="topnav" title="ورود">
            <MegaLink>
              <div className="p-3">
                <Link to="/">دوره های VIP</Link>
              </div>
            </MegaLink>
          </MegaMenu>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-1 w-full z-20 ps-10 bg-inherit outline-none"
              placeholder="جست و جو"
              required
            />
            <button
              type="submit"
              className="absolute top-0 start-0 p-2.5 pt-2 text-sm h-full hover:text-white anm-g"
            >
              <FiSearch size={20} />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <img width={50} src={market} alt="MarketCraft" />
        </div>
        <div className="col-span-5 flex justify-end items-center gap-x-3">
          <div>
            <NavLink to="/">صفحه اصلی</NavLink>
          </div>
          <div className="flex justify-center items-center">
            <ChangeTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
