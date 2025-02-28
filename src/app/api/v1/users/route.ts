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

export async function DELETE(req:NextRequest){
    try {
        const body = await req.json();
        const {userId, msg}=body;
        if(msg==='DELETE_ALL'){
            await prisma.user.deleteMany();
        }
        else{
            await prisma.user.delete({
                where:{
                    id:userId
                }
            })
        }
        return new Response("delete succesful",{
            status:200
        })

    } catch (error) {
        return new Response("error deleting user/users",{
            status:403
        })
    }
}