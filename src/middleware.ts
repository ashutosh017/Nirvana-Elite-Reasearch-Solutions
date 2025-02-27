import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/_utils/jwt";

export async function middleware(req: NextRequest) {
  console.log("middleware called");
  const cooki = await cookies();
  const token= cooki.get("token")?.value ;

  if (!token) {
    console.log("token not found");
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  console.log("token recieved in middleware: ", token);

  const verify = verifyToken(token);
  if (!verify) {
    console.log("not verified");
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  console.log("Verify: ", verify);
}

export const config = {
  matcher: ["/api/v1/users", "/admin"],
};
