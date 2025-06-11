import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { jwtDecode } from "jwt-decode";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decodedToken = atob(token);

    await jwtVerify(
      decodedToken,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY),
    );

    const payloadToken = jwtDecode(decodedToken);

    const now = Math.floor(Date.now() / 1000);
    if (payloadToken.exp! < now) {
      throw new Error("Token has expired!");
    }
    return NextResponse.next();
  } catch (error) {
    console.log("Token invalid", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
