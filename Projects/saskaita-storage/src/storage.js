export function saveInvoice(id, data) {
  const invoices = getAllInvoices();
  invoices.push({ id, data });
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

export function getAllInvoices() {
  return JSON.parse(localStorage.getItem('invoices') || '[]');
}

export function getInvoice(id) {
  const invoices = getAllInvoices();
  return invoices.find(inv => inv.id === id)?.data || null;
}

export function removeInvoice(id) {
  const invoices = getAllInvoices().filter(inv => inv.id !== id);
  localStorage.setItem('invoices', JSON.stringify(invoices));
}
