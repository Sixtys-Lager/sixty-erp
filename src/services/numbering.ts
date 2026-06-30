export function formatCustomerNumber(nextNumber: number): string {
  return `K-${nextNumber}`;
}

export function formatInvoiceNumber(nextNumber: number, year: number): string {
  return `${nextNumber}-${year}`;
}

export function formatQuoteNumber(nextNumber: number): string {
  return `A-${nextNumber}`;
}

export function formatDeliveryNoteNumber(nextNumber: number): string {
  return `L-${nextNumber}`;
}