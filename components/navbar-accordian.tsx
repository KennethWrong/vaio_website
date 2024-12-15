import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NavbarAccordionProductItem = (
  ref: string,
  name: string,
  border: boolean = true
) => {
  return (
    <div
      className={`w-full py-2 font-bold pl-4 text-gray-300 text-sm ml-3 ${
        border ? "border-b-2" : ""
      } border-gray-300`}
    >
      <Link href={ref}>{name}</Link>
    </div>
  );
};

export const NavBarAccordian = () => {
  const t = useTranslations("navbar");

  return (
    <div className="md:hidden w-full bg-opacity-70 text-white mt-3">
      <Accordion
        type="single"
        collapsible
        className="w-full bg-transparent bg-opacity-70"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger> {t("navbar_products")}</AccordionTrigger>
          <AccordionContent>
            {NavbarAccordionProductItem(
              "/product/new_sx14/overview",
              t("items.vaio_sx14")
            )}
            {NavbarAccordionProductItem(
              "/product/se2021/overview",
              t("items.vaio_se14_2021")
            )}
            {NavbarAccordionProductItem(
              "/product/sx12/overview",
              t("items.vaio_sx12")
            )}
            {NavbarAccordionProductItem(
              "/product/s11-s13/overview",
              t("items.vaio_s11")
            )}
            {NavbarAccordionProductItem(
              "/product/s11-s13/overview",
              t("items.vaio_s13"),
              false
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> {t("navbar_support")}</AccordionTrigger>
          <AccordionContent>
            {NavbarAccordionProductItem(
              "/support#support-center",
              t("items.service_center")
            )}
            {NavbarAccordionProductItem(
              "/support#support-warranty",
              t("items.warranty")
            )}
            {NavbarAccordionProductItem(
              "/support/repair-tnc",
              t("items.repair_terms_and_conditions"),
              false
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger> {t("navbar_about")}</AccordionTrigger>
          <AccordionContent>
            {NavbarAccordionProductItem("/about-us", t("items.about_vaio"))}
            {NavbarAccordionProductItem(
              "/contact-us",
              t("items.contact_us"),
              false
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <Link
            href="/support"
            className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            {t("navbar_where")}
          </Link>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
