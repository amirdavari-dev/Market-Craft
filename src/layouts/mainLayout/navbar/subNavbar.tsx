import { NavLink } from "react-router-dom";
import MegaMenu from "./megaMenu";

const SubNavbar = () => {
    return ( 
        <ul className="flex justify-center items-center gap-x-6">
            <li>
                <MegaMenu />
            </li>
            <li>
                <NavLink to="/">سمینار</NavLink>
            </li>
            <li>
                <NavLink to="/">وبلاگ</NavLink>
            </li>
            <li>
                <NavLink to="/">تماس باما</NavLink>
            </li>
        </ul>
   );
}
 
export default SubNavbar;