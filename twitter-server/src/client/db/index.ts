import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({ log: ["query"] })
export const syyHello = ()=>{
     console.log("Hello")
}
//hello nikhil kumar singh 