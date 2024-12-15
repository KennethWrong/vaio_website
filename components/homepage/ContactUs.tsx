import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export const ContactUs = () => {
  const t = useTranslations("homepage");
  return (
    <div
      className="py-16 w-full flex flex-row bg-cover bg-center h-50vh"
      style={{ backgroundImage: "url('/images/homepage/contact_us.jpg')" }}
    >
      <div className="md:w-1/2 w-full flex flex-row items-center justify-center content-center px-3 lg:px-0">
        <div className="flex flex-col md:w-1/2 w-full gap-y-10">
          <h1 className=" text-4xl">{t("contact_us_title")}</h1>
          <p className="text-lg text-gray-600 max-w-80">
            {t("contact_us_subtitle")}
          </p>
          <Button className=" bg-orange-300 text-white rounded-none md:w-1/2 h-14 w-full">
            {t("contact_us_button")}
          </Button>
        </div>
      </div>
      <div className="w-1/2 hidden md:container"></div>
    </div>
  );
};
