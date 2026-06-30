import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { formatInvoiceNumber } from "@/services/numbering";

export async function GET() {
  const invoices = await prisma.invoice.findMany({
    include: {
      customer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(invoices);
}

export async function POST(request: Request) {
  const body = await request.json();

  const year = new Date().getFullYear();
  const invoiceCount = await prisma.invoice.count();
  const invoiceNumber = formatInvoiceNumber(100 + invoiceCount, year);

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);

  const invoice = await prisma.invoice.create({
    data: {
      invoiceNumber,
      customerId: Number(body.customerId),
      dueDate,
      status: "Entwurf",
    },
  });

  return NextResponse.json(invoice);
}