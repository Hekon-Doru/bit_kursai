import { getCurrentId, getCurrentInvoice, renderInvoice } from './invoice';
import { saveInvoice } from './storage';

export function editCurrentInvoice() {
  const invoice = getCurrentInvoice();
  if (!invoice) return;

  const newNumber = prompt('Naujas sąskaitos numeris:', invoice.number);
  if (newNumber) {
    invoice.number = newNumber;
    saveInvoice(getCurrentId(), invoice);
    renderInvoice(invoice);
  }
}

export function deleteCurrentInvoice() {
  localStorage.setItem('invoices', JSON.stringify(
    JSON.parse(localStorage.getItem('invoices') || '[]').filter(inv => inv.id !== getCurrentId())
  ));
}
