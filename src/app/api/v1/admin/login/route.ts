import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import jwt from "jsonwebtoken";
import { adminEmail, adminPassword, jwtSecret } from "@/src/app/_config";

const loginSchema = z.object({
  email: z.string().max(100).min(4),
  password: z.string().min(3).max(100),
});
export async function POST(req: NextRequest) {
  const body = await req.json();
  // const {adminId, password} = body
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

  const token = jwt.sign(adminEmail, jwtSecret);
  const response = NextResponse.redirect(new URL("/admin", req.url));
  response.cookies.set("token", token, {
    httpOnly: true, // Secure cookie to prevent XSS
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
