import { Link, NavLink } from "react-router-dom";
import MegaMenu from "./megaMenu";
import MegaLink from "./megaLink";

const SubNavbar = () => {
  return (
    <ul className="flex justify-center items-center gap-x-6">
      <li>
        <MegaMenu title="دوره ها" location="downnav">
          <MegaLink>
            <div className="p-3">
              <Link to="/">دوره های VIP</Link>
            </div>
          </MegaLink>
        </MegaMenu>
      </li>
      <li>
        <NavLink to="/">سمینار</NavLink>
      </li>
      <li>
        <NavLink to="/">وبلاگ</NavLink>
      </li>
      <li>
        <NavLink to="/contact">تماس باما</NavLink>
      </li>
    </ul>
  );
};

export default SubNavbar;
