import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import getParams from "@/app/functions/getParams";

interface CreateUserData {
    _id: string,
    name: string,
    password: string,
    username: string
}
const prisma = new PrismaClient();

export async function POST(request: Request){
    try {
        const data: CreateUserData = await  request.json();
        const createdLogger = await prisma.users.create({
            data: {
                _id: data._id,
                name: data.name,
                password: data.password,
                username: data.username
            },
        });
        return NextResponse.json(createdLogger)
    }catch(error){
        console.log(error);

    }
}

export async function GET(request: Request){

    try{
        const id = getParams(request.url, {id: 0}).id;
        const user = await prisma.users.findUnique({
            where: {
                id:id
            }
        })

        if(!user){
            return new NextResponse("Error");
        }
        return NextResponse.json(user);
    }catch(error){
        console.log(error);
    }
}