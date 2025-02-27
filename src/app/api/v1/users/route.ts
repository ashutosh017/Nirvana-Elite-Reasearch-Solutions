import { prisma } from "@/db/src";
import { NextRequest } from "next/server";

export async function GET(){
   

    try {
        const res = await prisma.user.findMany();
        return new Response(JSON.stringify({
            users:res
        }))
    } catch (error) {
        console.log(error)
        return new Response("some error occured",{
            status:403
        })
    }
}