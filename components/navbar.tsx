"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { NavBarAccordian } from "./navbar-accordian";
import { NavbarNavigationMenu } from "./navbar-navmenu";
import NavbarLanguageToggle from "./navbar-language-toggle";

export const NavBar = ({ currPath }: { currPath: string }) => {
  const t = useTranslations("navbar");
  console.log(currPath);

  return (
    <nav className=" bg-black border-gray-200 text-white lg:sticky lg:top-0 lg:z-50 bg-opacity-70">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-col lg:flex-row">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/vaio_logo.png"
            className="h-8"
            width={150}
            height={20}
            alt="avita Logo"
          />
        </Link>
        <NavBarAccordian />
        <div
          className="hidden w-full md:block md:w-auto md:mt-5 lg:mt-0"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavbarNavigationMenu
                title={t("navbar_products")}
                items={productComponents}
              />
            </li>
            <li>
              <NavbarNavigationMenu
                title={t("navbar_support")}
                items={supportComponents}
              />
            </li>
            <li>
              <NavbarNavigationMenu
                title={t("navbar_about")}
                items={aboutComponents}
              />
            </li>
            <li>
              <NavbarNavigationMenu
                title={t("navbar_where")}
                items={[]}
                href="/where-to-buy"
              />
            </li>
            <li>
              <NavbarLanguageToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const productComponents: {
  title: string;
  href: string;
}[] = [
  {
    title: "vaio_sx14",
    href: "/product/new_sx14/overview",
  },
  {
    title: "vaio_se14_2021",
    href: "/product/se2021/overview",
  },
  {
    title: "vaio_sx12",
    href: "/product/sx12/overview",
  },
  {
    title: "vaio_a12",
    href: "/product/a12/overview",
  },
  {
    title: "vaio_s11",
    href: "/product/s11-s13/overview",
  },
  {
    title: "vaio_s13",
    href: "/product/s11-s13/overview",
  },
];

const supportComponents: {
  title: string;
  href: string;
}[] = [
  {
    title: "service_center",
    href: "/support#support-center",
  },
  {
    title: "warranty",
    href: "/support#support-warranty",
  },
  {
    title: "repair_terms_and_conditions",
    href: "/support/repair-tnc",
  },
];

const aboutComponents: { title: string; href: string }[] = [
  {
    title: "about_vaio",
    href: "/about-us",
  },
  {
    title: "contact_us",
    href: "/contact-us",
  },
];
