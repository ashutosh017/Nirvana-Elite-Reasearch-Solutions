export const adminEmail=process.env.ADMIN_EMAIL
export const adminPassword=process.env.ADMIN_PASSWORD
export const jwtSecret=process.env.JWT_SECRET
export const BACKEND_URL =process.env.NODE_ENV==='development'?"http://localhost:3000": "https://nirvanaeliteresearchsolutions.vercel.app/";
export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
export const STEPS = [
    "intro",
    "name",
    "email",
    "phone",
    "requirements",
    "confirmation",
    "success",
  ] as const;