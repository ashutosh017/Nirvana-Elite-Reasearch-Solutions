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


export  async function GET(){
    try {
        const res = await prisma.review.findMany();
        return new Response(JSON.stringify(res),{
            status:200
        })
    } catch (error) {
        console.log(error)
        return new Response("error fetching reveiws",{
            status:403
        })
    }
}
export async function DELETE(req:NextRequest){
  try {
      const body = await req.json();
      const {userId, msg}=body;
      if(msg==='DELETE_ALL'){
          await prisma.review.deleteMany();
      }
      else{
          await prisma.review.delete({
              where:{
                  id:userId
              }
          })
      }
      return new Response("delete succesful",{
          status:200
      })

  } catch (error) {
      console.log(error)
      return new Response("error deleting user/users",{
          status:403
      })
  }
}

