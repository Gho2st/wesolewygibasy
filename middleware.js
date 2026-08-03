import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

async function hasAdminSession(request) {
  const token = request.cookies.get("admin_session")?.value;
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "ADMIN";
  } catch {
    return false;
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isAdmin = /^\/admin(\/|$)/.test(pathname);
  const isAdminLogin = /^\/admin\/login(\/|$)?$/.test(pathname);

  if (isAdmin && !isAdminLogin) {
    if (!(await hasAdminSession(request))) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
