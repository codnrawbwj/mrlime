import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HamburgerMenuIcon } from "@/assets/index";
import Link from "next/link";

const MobileHamburgerMenu = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mojito-text-b">
            <HamburgerMenuIcon
              className="w-6 h-6"
              style={{ height: 24, width: 24 }}
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink>Login</NavigationMenuLink>
            </Link>
            <Link href="/recipes" legacyBehavior passHref>
              <NavigationMenuLink>Recipes</NavigationMenuLink>
            </Link>
            <Link href="/ingredients" legacyBehavior passHref>
              <NavigationMenuLink>Ingredients</NavigationMenuLink>
            </Link>
            <Link href="/collections" legacyBehavior passHref>
              <NavigationMenuLink>Collections</NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MobileHamburgerMenu;
