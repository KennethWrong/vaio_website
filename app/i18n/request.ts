'use server'


import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { GetCountryCodeFromCookies } from "@/actions/action";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const country = await GetCountryCodeFromCookies();

  let locale = await requestLocale;
  let documentLocale = locale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
    documentLocale = locale
  }

  if (country == "tw") {
    documentLocale = country
    locale = "tc"
  } else {
    locale = "en"
    documentLocale="en"
  }


  return {
    locale,
    messages: (await import(`../../messages/${documentLocale}.json`)).default,
  };
});