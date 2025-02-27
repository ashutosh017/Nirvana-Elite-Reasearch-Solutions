
import {jwtVerify} from 'jose'
import { jwtSecret } from '../_config'

export const verifyToken = async(token:string)=>{
    const verify = await jwtVerify(token,new TextEncoder().encode(jwtSecret))
    return verify
}