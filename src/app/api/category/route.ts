import { request } from "http";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "../../../../node_modules/next/server";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.category.findMany();
  return NextResponse.json({
    status: 200,
    data: [posts],
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const category = await prisma.category.create({
    data: {
      ...body,
    },
  });
  return NextResponse.json({
    status: 200,
    data: category,
  });
}
