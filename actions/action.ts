'use server'

import { cookies, headers } from "next/headers"

export async function GetCountryCode() {
    const h = await headers()
    let host = h.get("host")

  host = "usa.vaio.com"
  const parsedHost = host?.split(".")

  let country = "hk"

  if (parsedHost && parsedHost.length > 0) {
    country = parsedHost[0]
  }
  console.log(country)
  return country
}

export async function GetCountryCodeFromCookies(){
    const cookieStore = cookies()
    const country = (await cookieStore).get('VAIO_COUNTRY');
    return country?.value
}