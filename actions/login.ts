"use server"

import { LoginSchema } from "@/schemas"
import { revalidatePath, revalidateTag } from "next/cache"
import * as z from "zod"


export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields) {
    console.log(values);

    return { error: "Invalid fields!" }
  }

  return { success: "Email sent!" }

  // revalidatePath()
  // revalidateTag()
}