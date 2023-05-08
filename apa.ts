import { Prisma, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function apa(){
    const data  = await prisma.masterAgama.findMany()
    console.table(data)
}

apa()

export {}