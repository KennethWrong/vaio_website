"use client";

import { useTranslations } from "use-intl";
import Link from "next/link";

export default function HomePromo() {
  const t = useTranslations("homepage.homepage_image_box");

  return (
    <section
      className="w-screen flex flex-col md:grid md:grid-cols-2 
      lg:flex lg:flex-row justify-center items-center"
    >
      <div className="basis-1/4">
        <Link href="/product/liber-v">
          <img src={t("computer")} alt="promo-01-en" className="w-full" />
        </Link>
      </div>

      <div className="basis-1/4">
        <Link href="/news">
          <img src={t("event")} alt="promo-02-en" className="w-full" />
        </Link>
      </div>

      <div className="basis-1/4">
        <Link href="/aboutus">
          <img src={t("about_us")} alt="promo-03-en" className="w-full" />
        </Link>
      </div>

      <div className="basis-1/4">
        <Link href="/support">
          <img src={t("support")} alt="promo-04-en" className="w-full" />
        </Link>
      </div>
    </section>
  );
}
