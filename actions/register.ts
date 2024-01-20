"use server"

import { RegisterSchema } from "@/schemas"
import { revalidatePath, revalidateTag } from "next/cache"
import * as z from "zod"


export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) {
    console.log(values);

    return { error: "Invalid fields!" }
  }

  return { success: "Email sent!" }

  // revalidatePath()
  // revalidateTag()
}