import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/auth/login",
  "/auth/signup",
  "/auth/forgotpassword",
  "/auth/newPassword",
  "/auth/cart",

  "/globalHeader/web3-domains",
  "/globalHeader/market-place",
  "/globalHeader/parked-domains",
  "/globalHeader/blog",
  "/globalHeader/affiliate-program",

  "/footer/about-us",
  "/globalHeader/market-place",
  "/footer/vision-mission",
  "/footer/community-page",
  "/footer/event-page",
  "/footer/domain-apprasial",
  "/footer/privacy-policy",
  "/footer/terms-and-condition",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // allow next internals + public assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/users") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/)
  ) {
    return NextResponse.next();
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) =>
      pathname === route || pathname.startsWith(route + "/")
  );

  const token = request.cookies.get("token")?.value;

  // private route protection
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(
      new URL("/auth/login", request.url)
    );
  }

  return NextResponse.next();
}
