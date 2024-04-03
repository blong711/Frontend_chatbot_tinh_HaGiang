import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

console.log(path,"path")

  // if (path.split("/")[1] !== "auth" && !request.cookies.has("token")) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }
  if (path.split("/")[1] === "auth" && request.cookies.has("token")) {
    return NextResponse.redirect(new URL(`/en/dashboard`, request.url));
  }

  if (path.split("/")[2] === "supportticket" && request.cookies.has("token")) {
    return NextResponse.redirect(new URL(`https://support.pixelstrap.com/`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};