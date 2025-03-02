import z from 'zod'

export const loginSchema = z.object({
  email: z.string().max(100).min(4),
  password: z.string().min(3).max(100),
});

export const formSchema = z.object({
  name: z.string().max(100),
  phone: z.string().max(15),
  email: z.string().max(100),
  message: z.string().max(1000),
  service: z.string().max(100),
});

export 
const reviewSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    review: z.string().min(1, "Review is required"),
    socialLinks: z.array(z.string().url()).optional().default([]), // Optional array
    phone: z.string().optional(),
    email: z.string().email("Invalid email format").optional(),
    rating:z.number().min(0).max(5)
  })
  .refine((data) => data.email || data.phone, {
    message: "Either phone or email must be provided",
    path: ["email", "phone"],
  });