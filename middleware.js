import { NextResponse } from "next/server";
import { AppRoutes, primaryLinks } from "./core/utils/routes";

export function middleware(request) {
  const nextUrl = request.nextUrl;
  // Setting cookies on the response
  const response = NextResponse.next();

  // Getting cookies from the request
  const cookie = request.cookies.get("ssid");

  // Validate if access token exist, otherwise will redirect to login page
  if (cookie) {
    if (nextUrl.pathname === AppRoutes.login) {
      const url = nextUrl.clone();
      url.pathname = AppRoutes.home;
      return NextResponse.redirect(url);
    }
    return response;
  } else {
    const url = nextUrl.clone();

    const protectedRoutes = primaryLinks.map((l) => l.route);
    if (protectedRoutes.includes(url.pathname)) {
      url.pathname = AppRoutes.login;
      return NextResponse.redirect(url);
    }
  }
}
