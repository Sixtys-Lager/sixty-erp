import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();

  const customer = await prisma.customer.update({
    where: {
      id: Number(id),
    },
    data: {
      company: body.company,
      contact: body.contact || null,
      street: body.street || null,
      zip: body.zip || null,
      city: body.city || null,
      email: body.email || null,
      phone: body.phone || null,
    },
  });

  return NextResponse.json(customer);
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { id } = await params;

  await prisma.customer.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ success: true });
}