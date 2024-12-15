import { useTranslations } from "next-intl";

export const Page = () => {
  const t = useTranslations("about_us");
  return (
    <main>
      <div
        className="py-16 w-full flex flex-row bg-cover bg-center h-40vh bg-slate-600"
        style={{ backgroundImage: `url('${t("image_about_us_banner")}')` }}
      >
        <div className="w-full flex flex-col items-center justify-center content-center pl-3 lg:pl-0">
          <div className="w-4/6 text-gray-200">
            <h1 className="text-6xl mb-6">{t("about_us_title")}</h1>
            <p>{t("about_us_info")}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center align-middle my-5 lg:my-0 px-3 lg:px-0 order-1">
          <div className="w-3/4 lg:w-1/2 leading-loose">
            <h1 className=" text-3xl mb-6">{t("about_vaio_subtitle")}</h1>
            <p className="text-md text-gray-600">{t("about_vaio_subtext")}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src={t("image_vaio")}
            alt="vaio factory"
            className="h-full shadow-md"
          />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center align-middle my-5 lg:my-0 px-3 lg:px-0 order-1 lg:order-2">
          <div className="w-3/4 lg:w-1/2 leading-loose">
            <h1 className="text-3xl mb-6">{t("about_nexstgo_subtitle")}</h1>
            <p className="text-md text-gray-600">
              {t("about_nexstgo_subtext")}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img
            src={t("image_nexst")}
            alt="nexst logo"
            className="h-full shadow-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
