import jwt from 'jsonwebtoken'
const jwtSecret = "jwt_secret69"

import {jwtVerify} from 'jose'

export const verifyToken = async(token:string)=>{
    const verify = await jwtVerify(token,new TextEncoder().encode(jwtSecret))
    return verify
}