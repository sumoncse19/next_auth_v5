import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password should be minimum 8 Character!"
  })
});

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Email is required!"
  }),
  password: z.string().min(8, {
    message: "Password should be minimum 8 Character!"
  })
});