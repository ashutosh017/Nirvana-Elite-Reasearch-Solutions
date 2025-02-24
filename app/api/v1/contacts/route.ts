import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { prisma } from "../../../../db/src/index";

const formSchema = z.object({
  name: z.string().max(100),
  phone: z.string().max(15),
  email: z.string().max(100),
  message: z.string().max(1000),
  service: z.string().max(100),
});
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const parsedData = formSchema.safeParse(data);
  console.log("data: ", data);
  if (!parsedData.success) {
    return new Response(
      JSON.stringify({
        msg: "failed parsing data",
        reason: parsedData.error.errors,
      }),
      {
        status: 403,
      }
    );
  }
  try {
    const dbRes = await prisma.user.create({
      data: parsedData.data,
    });
    console.log(dbRes);
    return new Response("success", {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        msg: "some error occured",
        error,
      }),
      {
        status: 403,
      }
    );
  }
}
