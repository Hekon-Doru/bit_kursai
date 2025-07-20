import { Invoice } from './Invoice.js';

export class InvoiceAPI {
  static async fetchInvoice() {
    const response = await fetch('https://in3.dev/inv/');
    const data = await response.json();
    return new Invoice(data);
  }
}