import { InvoiceAPI } from './InvoiceAPI.js';
import { InvoiceRenderer } from './InvoiceRenderer.js';
import StorageManager from './StorageManager.js';

export default class main extends StorageManager {

  static init() {
    this.storageInit({
      key: 'invoices'
    });

    if (document.querySelector('[data-read]')) {
      this.initRead();
    } else if (document.querySelector('[data-delete]')) {
      this.initDelete();
    } else if (document.querySelector('[data-edit]')) {
      this.initEdit();
    } else if (document.querySelector('[data-show]')) {
      this.initShow();
    }
  } 
 

  
  static initShow() {
    const invoices = this.read();
    const id = window.location.hash.slice(1); // id paemimas is hastago
    const invoiceToShow = invoices.find(inv => inv.id == id);
    if (!invoiceToShow) {
      window.location.href = 'read.html'; // puslapio redirectas
    }
    const saskaita = document.querySelector('[data-frame]');
    const renderer = new InvoiceRenderer(invoiceToShow);
    renderer.render(saskaita, 'view');
  }

  static initDelete() {
    const invoices = this.read();
    const id = window.location.hash.slice(1); // id paemimas is hastago
    const invoice = invoices.find(inv => inv.id == id);
    if (!invoice) {
      window.location.href = 'read.html'; // puslapio redirectas
    }
    document.querySelector('[data-art-title]').innerText = invoice.number;
    const destroyButton = document.querySelector('[data-destroy]');

    destroyButton.addEventListener('click', _ => {
      this.destroy(invoice.id);
      window.location.href = 'read.html';
    });
  }

  static initRead() {
    const invoices = this.read();
    const template = document.querySelector('template');
    const listEl = document.querySelector('[data-list]');

    invoices.forEach(activeInvoice => {
      const clone = template.content.cloneNode(true);
      clone.querySelector('[data-number]').textContent = activeInvoice.number;
      clone.querySelector('[data-date]').textContent = activeInvoice.date;
      clone.querySelector('[data-id]').textContent = activeInvoice.id;

      clone.querySelector('[data-show]').href = `show.html#${activeInvoice.id}`;
      clone.querySelector('[data-edit]').href = `edit.html#${activeInvoice.id}`;
      clone.querySelector('[data-delete]').href = `delete.html#${activeInvoice.id}`;

      listEl.appendChild(clone);
    });
  }

  static initCreate() {
    const createButton = document.querySelector('[data-get]');
    createButton.addEventListener('click', () => {
      console.log('Creating new invoice');
      const invoice = InvoiceAPI.createInvoice();
      this.store(invoice);
      window.location.href = 'read.html';
    });
  }

  static initEdit() {
    const invoices = this.read();
    const id = window.location.hash.slice(1); // id paemimas is hastago
    const invoice = invoices.find(inv => inv.id == id);
    if (!invoice) {
      window.location.href = 'read.html'; // puslapio redirectas
    }
    const saskaita = document.querySelector('[data-frame]');
    const renderer = new InvoiceRenderer(invoice);
    renderer.render(saskaita, 'edit');

    const saveButton = document.querySelector('[data-save]');
    saveButton.addEventListener('click', () => {
      this.update(invoice.id, renderer.invoice);
      window.location.href = 'read.html';
    });
  }
}


