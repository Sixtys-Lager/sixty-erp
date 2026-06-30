export type Customer = {
  id: number;
  company: string;
  contact: string | null;
  street: string | null;
  zip: string | null;
  city: string | null;
  email: string | null;
  phone: string | null;
  createdAt: string;
};

export async function getCustomers(): Promise<Customer[]> {
  const response = await fetch("/api/customers");

  if (!response.ok) {
    throw new Error("Kunden konnten nicht geladen werden.");
  }

  return response.json();
}