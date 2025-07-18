export default class StorageManager {

    static getInvoices() {
      const invoices = localStorage.getItem('invoices');
      return invoices ? JSON.parse(invoices) : [];
    }
  
    static saveInvoice(invoice) {
      const invoices = this.getInvoices();
      invoices.push(invoice);
      localStorage.setItem('invoices', JSON.stringify(invoices));
    }
  
    static updateInvoice(updatedInvoice) {
      const invoices = this.getInvoices();
      const index = invoices.findIndex(inv => inv.id === updatedInvoice.id);
      if (index !== -1) {
        invoices[index] = updatedInvoice;
        localStorage.setItem('invoices', JSON.stringify(invoices));
      }
    }
  
    static deleteInvoice(id) {
      const invoices = this.getInvoices();
      const filtered = invoices.filter(inv => inv.id !== id);
      localStorage.setItem('invoices', JSON.stringify(filtered));
    }
  
    static getInvoiceById(id) {
      const invoices = this.getInvoices();
      return invoices.find(inv => inv.id === id);
    }
  }
  