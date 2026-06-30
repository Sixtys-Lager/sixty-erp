import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      company: "asc",
    },
  });

  return NextResponse.json(customers);
}

export async function POST() {
  const customer = await prisma.customer.create({
    data: {
      company: "Testfirma GmbH",
      contact: "Max Mustermann",
      city: "Chemnitz",
    },
  });

  return NextResponse.json(customer);
}