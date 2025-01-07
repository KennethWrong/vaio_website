import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export default createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()
  cookieStore.set("NEXT_LOCALE", "tc", {path: "/"})

  const defaultLocale = "en"
  let host = request.headers.get("host")

  let country = "hk"
  const parsedHost = host?.split(".")

  const handleI18nRouting = createMiddleware({
    locales: ['en', "tc"],
    defaultLocale
  })

  const res = handleI18nRouting(request)
  if (parsedHost && parsedHost.length > 0) {
    country = parsedHost[0]
    if (country == "tw") {
      res.cookies.set("NEXT_LOCALE", "tc", {path: "/"})
      cookieStore.set("NEXT_LOCALE", "tc", {path: "/"})
    } else {
      res.cookies.set("NEXT_LOCALE", "en", {path: "/"})
      cookieStore.set("NEXT_LOCALE", "en", {path: "/"})
    }
    res.cookies.set("VAIO_COUNTRY", country, {path:"/"})
  }

  return res
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|tc)/:path*", '/((?!api|_next|_vercel|.*\\..*).*)'],
};

