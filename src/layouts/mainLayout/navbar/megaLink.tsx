import { NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const MegaLink = ({children} : {children : ReactNode}) => {
    return ( <Link to="/">
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {children}
        </NavigationMenuLink>
      </Link> );
}
 
export default MegaLink;