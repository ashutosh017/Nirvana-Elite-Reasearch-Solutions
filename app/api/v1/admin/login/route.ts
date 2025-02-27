import { NextRequest } from "next/server";
import z from 'zod'
import jwt from 'jsonwebtoken'


const adminEmail = "admin@gmail.com"
const adminPassword= "6969"
const jwtSecret = "jwt_secret69"

const loginSchema = z.object({
    email:z.string().max(100).min(4),
    password:z.string().min(3).max(100)
})
export async function POST(req:NextRequest){
    const body = await req.json()
    // const {adminId, password} = body
    const parsedData = loginSchema.safeParse(body)
    if(!parsedData.success){
        return new Response("error parsing  body",{
            status:403
        })
    }
    if(body.email!==adminEmail || body.password!==adminPassword){
        return new Response("credentials don't match",{
            status:403
        })
    }
    const token = jwt.sign(adminEmail,jwtSecret)
    return new Response(JSON.stringify({
        token
    }),{
        status:200
    })
    console.log(body)
    return new Response(JSON.stringify({
        body
    }))

}