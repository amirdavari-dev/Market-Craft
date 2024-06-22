import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MegaMenuType } from "@/types/megaMenu";

const MegaMenu = ({ children, title, location }: MegaMenuType) => {
  return (
    <NavigationMenu className="z-50 megaParent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-inherit hover:bg-inherit hover:text-white p-0 focus:bg-inherit focus:text-white ${
              location === "topnav" ? "font-thin" : "font-bold"
            }`}
            data-state="close"
            dir="ltr"
          >
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {children}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MegaMenu;
