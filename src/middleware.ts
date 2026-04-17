import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

function isPublicAsset(pathname: string) {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/media/")) return true;
  if (pathname.startsWith("/brand/")) return true;
  if (pathname === "/icon.png" || pathname === "/favicon.ico") return true;
  const last = pathname.split("/").pop() ?? "";
  if (/\.[a-zA-Z0-9]{2,12}$/.test(last)) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isPublicAsset(pathname)) return NextResponse.next();

  const first = pathname.split("/")[1];
  if (first && isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/"
      ? `/${defaultLocale}`
      : `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
