import { jwtVerify } from 'jose';

export async function verifyToken(token:string) {
  try {
    console.log("token recieved in verify token func: ",token)
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
