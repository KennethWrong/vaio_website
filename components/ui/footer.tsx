"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "@/app/i18n/routing";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="">
      <footer className=" py-24 bg-stone-400 px-7 lg:px-0">
        <div className="container mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-200">
            <Link href={"/"}>
              <Image
                src="/vaio_logo.png"
                className="h-8"
                width={150}
                height={20}
                alt="avita Logo"
              />
            </Link>
            <Link
              className="text-lg font-bold"
              href="/product/s11-s13/overview"
            >
              <h1 className="border-b-2 text-lg">{t("product")}</h1>
            </Link>
            <div className="">
              <div className="gap-y-3">
                <h1 className="text-lg font-bold mb-4 border-b-2">
                  {t("support")}
                </h1>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/support#support-center"
                      className="hover:underline"
                    >
                      {t("service_center")}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/support#support-warranty"
                      className="hover:underline"
                    >
                      {t("warranty")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support/repair-tnc"
                      className="hover:underline"
                    >
                      {t("repair_terms_and_conditions")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold mb-4 border-b-2">
                {t("about_vaio")}
              </h1>
              <ul>
                <li className="mb-1">
                  <Link href="/about-us" className="hover:underline">
                    {t("about_vaio")}
                  </Link>
                </li>
                <li className="">
                  <Link href="/contact-us" className="hover:underline">
                    {t("contact_us")}
                  </Link>
                </li>
              </ul>
              <Link href="/where-to-buy">
                <h1 className="text-lg font-bold mb-4 border-b-2 mt-4">
                  {t("where_to_buy")}
                </h1>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold mb-2">{t("follow_us")}</h1>
              <div className="flex flex-row">
                <Link href="https://www.facebook.com/VAIOHongKong">
                  <FaFacebook size={30} className="mr-3" />
                </Link>
                <Link href="https://www.instagram.com/vaiohongkong/">
                  <FaInstagram size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-7 text-md bg-gray-600 text-gray-200 flex flex-col items-center px-3">
        <div className="w-full lg:w-3/4">
          <h1 className="mb-3">{t("privacy_header")}</h1>
          <p className="w-full lg:w-4/6">{t("privacy_paragraph_1")}</p>
          <p className="w-full lg:w-4/6">{t("privacy_paragraph_2")}</p>
          <p className="mt-3">{t("privacy_nexstgo")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
