import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { adminEmail, adminPassword, jwtSecret } from "@/src/app/_config";
import { loginSchema } from "@/src/app/_schema/zod";


export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsedData = loginSchema.safeParse(body);
  if (!parsedData.success) {
    return new Response("error parsing  body", {
      status: 403,
    });
  }
  if (!adminEmail || !adminPassword || !jwtSecret) {
    return new Response(
      "admin email or admin password or jwt secret cannot be empty",
      {
        status: 403,
      }
    );
  }
  if (body.email !== adminEmail || body.password !== adminPassword) {
    return new Response("credentials don't match", {
      status: 403,
    });
  }

  const token = jwt.sign({email:adminEmail}, jwtSecret);
  const response = NextResponse.redirect(new URL("/admin", req.url), 303);
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}
