import { request } from "http";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "../../../../node_modules/next/server";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });
  return NextResponse.json({
    data: posts,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await prisma.post.create({
    data: {
      ...body,
    },
  });
  return NextResponse.json({
    status: 200,
    data: post,
  });
}
