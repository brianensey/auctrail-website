import { NextRequest, NextResponse } from "next/server";

const PREVIEW_COOKIE = "auctrail_preview";
const PREVIEW_PATH = "/preview-progress";
const DEVELOPMENT_PATH = "/under-development";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/auctrail-logo") ||
    pathname === DEVELOPMENT_PATH ||
    pathname === PREVIEW_PATH
  ) {
    return NextResponse.next();
  }

  if (request.cookies.get(PREVIEW_COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(DEVELOPMENT_PATH, request.url));
}

export const config = {
  matcher: ["/((?!api).*)"],
};
