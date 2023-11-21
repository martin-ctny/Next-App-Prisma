import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const categories = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json({
    data: categories,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await request.json();

  const categories = await prisma.category.update({
    where: {
      id,
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json({
    status: 201,
    data: categories,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const categories = await prisma.category.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    status: 201,
    data: categories,
  });
}
