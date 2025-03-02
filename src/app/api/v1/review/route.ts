import { prisma } from "@/db/src";
import { reviewSchema } from "@/src/app/_schema/zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = reviewSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: parsedBody.error.errors },
        { status: 400 }
      );
    }

    const { name, review, socialLinks, phone, email, rating } = parsedBody.data;

    const res = await prisma.review.create({
      data: {
        name,
        review,
        socialLinks,
        email,
        phone,
        rating
      },
    });

    return NextResponse.json(
      { message: "Review submitted successfully", review: res },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: error },
      { status: 500 }
    );
  }
}
