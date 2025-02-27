import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("middleware called");
  const header = await headers();
  const token = header.get("authorization")?.split(" ")[1];
  if (!token) {
    return new Response("token not found", {
      status: 400,
    });
  }
  console.log("token: ", token);
}

export const config = {
  matcher: "/",
};
