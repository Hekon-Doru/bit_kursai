import { InvoiceAPI } from './InvoiceAPI.js';
import { InvoiceRenderer } from './InvoiceRenderer.js';
import { renderSidebar } from './sidebar.js';
import { localStorage } from './localStorage.js';
/* 
import { v4 } from 'uuid';

export default class localStorage {

    static key;

    static storageInit(settings) {
        this.key = settings.key;
    }

    static read() {
        const storedData = localStorage.getItem(this.key);
        if (null === storedData) {
            return [];
        }
        return JSON.parse(storedData);
    }

    static write(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    static store(data) {
        this.write([...this.read(), { ...data, id: v4() }]);
    }

    static destroy(id) {
        this.write(this.read().filter(f => f.id != id));
    }

    static update(id, data) {
        this.write(this.read().map(f => f.id == id ? { ...f, ...data, id } : f));
    }
} */

export default class Main extends localStorage {
 
  static init() {
    this.storageInit({
      key: 'invoices'
    });

    if (document.querySelector('[data-create]')) {
      this.initCreate();
    } else if (document.querySelector('[data-read]')) {
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
    const createButton = document.querySelector('[data-create]');
    createButton.addEventListener('click', () => {
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



InvoiceAPI.fetchInvoice().then(invoice => {
  const renderer = new InvoiceRenderer(invoice);
  renderer.render();
  renderSidebar([invoice]);
});

// Šis failas yra pagrindinis įrašas, kuris inicijuoja programą
// ir atvaizduoja sąskaitą. Jis naudoja InvoiceAPI, kad gautų
// sąskaitos duomenis, o InvoiceRenderer, kad atvaizduotų
// sąskaitą HTML puslapyje. Taip pat jis naudoja renderSidebar
// funkciją, kad atvaizduotų sąskaitų sąrašą šoninėje juostoje.

document.addEventListener('click', function (event) {
  if (event.target.matches('[data-save]')) {
    InvoiceAPI.fetchInvoice().then(invoice => {
      let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
      invoices.push(invoice);
      localStorage.setItem('invoices', JSON.stringify(invoices));
      
    });
  }
});

