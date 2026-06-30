import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { formatCustomerNumber } from "@/services/numbering";

export async function GET() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      company: "asc",
    },
  });

  return NextResponse.json(customers);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lastCustomer = await prisma.customer.findFirst({
      orderBy: {
        id: "desc",
      },
    });

    const nextNumber = lastCustomer ? 1000 + lastCustomer.id : 1000;
    const customerNumber = formatCustomerNumber(nextNumber);

    const customer = await prisma.customer.create({
      data: {
        customerNumber,
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
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Kunde konnte nicht gespeichert werden." },
      { status: 500 }
    );
  }
}