import { PrismaClient } from "@prisma/client";

// For development mode -->
declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// For production we have to use this -->
/* 
export const db = new PrismaClient();
*/