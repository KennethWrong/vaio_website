import { useTranslations } from "next-intl";

export const Page = () => {
  const t = useTranslations("repair_tnc");

  return (
    <main>
      <div className="w-full flex flex-grow flex-col items-center mb-10 py-5 px-3">
        <div className=" w-4/5 lg:ml-10 ml-0">
          <h1 className="text-4xl mt-10 mb-5">{t("repair_title")}</h1>
          <ol className="list-inside text-gray-600 space-y-4 list-decimal leading-loose w-3/4 ml-5">
            <li>{t("repair_text_1")}</li>
            <li>{t("repair_text_2")}</li>
            <li>{t("repair_text_3")}</li>
            <li>{t("repair_text_4")}</li>
            <li>{t("repair_text_5")}</li>
            <li>{t("repair_text_6")}</li>
            <li>{t("repair_text_7")}</li>
            <li>{t("repair_text_8")}</li>
            <li>{t("repair_text_9")}</li>
            <li>{t("repair_text_10")}</li>
            <li>{t("repair_text_11")}</li>
            <li>{t("repair_text_12")}</li>
            <li>{t("repair_text_13")}</li>
            <li>{t("repair_text_14")}</li>
            <li>{t("repair_text_15")}</li>
            <li>{t("repair_text_16")}</li>
            <li>{t("repair_text_17")}</li>
            <li>{t("repair_text_18")}</li>
            <li>{t("repair_text_19")}</li>
            <li>{t("repair_text_20")}</li>
            <li>{t("repair_text_21")}</li>
            <li>{t("repair_text_22")}</li>
            <li>{t("repair_text_23")}</li>
            <li>{t("repair_text_24")}</li>
            <li>{t("repair_text_25")}</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Page;
