'use client';
import { Link } from '@/app/i18n/routing';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuNoArrowStyle,
} from './ui/navigation-menu';
import { usePathname } from '@/app/i18n/routing';

const modifyPath = (currentPath: string) => {
  return currentPath.slice(0, currentPath.length) + '/';
};

export const NavbarLanguageToggle = () => {
  const pathName = usePathname();

  return (
    <NavigationMenu className=" bg-black text-white bg-opacity-0">
      <NavigationMenuList className=" text-white rounded-none bg-opacity-70">
        <NavigationMenuItem className="text-white rounded-none bg-opacity-70">
          <NavigationMenuLink className={navigationMenuNoArrowStyle()}>
            <Link href={modifyPath(pathName)} locale="en">
              {'EN / '}
            </Link>
            <Link href={modifyPath(pathName)} locale="tc">
              {' '}
              {' 繁'}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavbarLanguageToggle;
