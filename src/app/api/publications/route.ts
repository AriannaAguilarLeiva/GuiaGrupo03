import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
    
export async function GET(request: Request) {

    try {
      const parametros = await prisma.publications.findMany();
      return NextResponse.json(parametros);
    } catch (error) {
      return NextResponse.json(error);
    }
  
}