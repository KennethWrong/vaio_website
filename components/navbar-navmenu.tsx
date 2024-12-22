import React from "react";
import { Link } from "@/app/i18n/routing";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuNoArrowStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const NavbarNavigationMenu = ({
  title,
  items,
  href = "",
}: {
  title: string;
  href?: string;
  items: { title: string; href: string }[];
}) => {
  const t = useTranslations("navbar.items");
  return (
    <NavigationMenu className=" bg-black text-white bg-opacity-0">
      <NavigationMenuList className=" text-white rounded-none bg-opacity-70">
        <NavigationMenuItem className="text-white rounded-none bg-opacity-70">
          {items.length > 0 ? (
            <>
              <NavigationMenuTrigger className="text-white bg-opacity-70 bg-transparent">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" bg-gray-200 text-gray-800 rounded-none opacity-100">
                {items.map((item) => (
                  <ListItem
                    key={t(item.title)}
                    title={t(item.title)}
                    href={item.href}
                  ></ListItem>
                ))}
              </NavigationMenuContent>
            </>
          ) : (
            <Link href={href} className="bg-transparent">
              <NavigationMenuLink className={navigationMenuNoArrowStyle()}>
                {title}
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href=""
          ref={ref}
          className={cn(
            "text-center block select-none space-y-1 p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full min-w-52 border-b-2 border-gray-300 text-gray-800",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none w-full px-4">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
