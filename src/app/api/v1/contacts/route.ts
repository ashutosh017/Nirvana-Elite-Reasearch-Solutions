import { NextRequest } from "next/server";
import { prisma } from "../../../../../db/src/index";
import { formSchema } from "@/src/app/_schema/zod";


export async function POST(req: NextRequest) {
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
