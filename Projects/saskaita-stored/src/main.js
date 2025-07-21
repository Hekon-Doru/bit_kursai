import { InvoiceAPI } from './InvoiceAPI.js';
import { InvoiceRenderer } from './InvoiceRenderer.js';
import StorageManager from './StorageManager.js';

export default class main extends StorageManager {

  static init() {
    this.storageInit({
      key: 'invoices'
    });

    if (document.querySelector('[page-list]')) {
      this.initList();
    } else if (document.querySelector('[page-delete]')) {
      this.initDelete();
    } else if (document.querySelector('[page-edit]')) {
      this.initEdit();
    } else if (document.querySelector('[page-show]')) {
      this.initShow();
    }

    this.handleCreateButtonClicks();
  }



  static initShow() {
    console.log('Show Invoice');
    const invoices = this.read();
    const id = window.location.hash.slice(1); // id paemimas is hastago
    const invoiceToShow = invoices.find(inv => inv.id == id);
    if (!invoiceToShow) {
      window.location.href = 'list.html'; // puslapio redirectas
    }

    const saskaita = document.querySelector('[data-invoice]');

    const renderer = new InvoiceRenderer(invoiceToShow);
    renderer.render(saskaita, 'view');

  }

  static initDelete() {
    console.log('Delete Invoice');
    const invoices = this.read();
    const id = window.location.hash.slice(1); // id paemimas is hastago
    const invoice = invoices.find(inv => inv.id == id);
    if (!invoice) {
      window.location.href = 'list.html'; // puslapio redirectas
    }
    document.querySelector('[data-number]').innerText = invoice.number;
    console.log('Delete Invoice', invoice.id);

    const destroyButton = document.querySelector('[data-destroy]');
    destroyButton.addEventListener('click', async () => {
      this.destroy(invoice.id);
      window.location.href = 'list.html';
    });

    const cancelButton = document.querySelector('[data-cancel]');
    cancelButton.addEventListener('click', _ => {
      console.log('Cancel Delete');
      window.location.href = 'list.html';
    });
  }

  static initList() {
    const invoices = this.read();
    const template = document.querySelector('template');
    const listEl = document.querySelector('[data-list]');

    invoices.forEach(activeInvoice => {
      const clone = template.content.cloneNode(true);
      clone.querySelector('[data-number]').textContent = activeInvoice.number;
      clone.querySelector('[data-date]').textContent = activeInvoice.date;
      clone.querySelector('[data-id]').textContent = activeInvoice.id;

      clone.querySelector('[page-show]').href = `show.html#${activeInvoice.id}`;
      clone.querySelector('[page-edit]').href = `edit.html#${activeInvoice.id}`;
      clone.querySelector('[page-delete]').href = `delete.html#${activeInvoice.id}`;

      listEl.appendChild(clone);
    });
  }

  static handleCreateButtonClicks() {
    const createButton = document.querySelector('[data-get]');
    createButton.addEventListener('click', async () => {
      const invoice = await InvoiceAPI.fetchInvoice();
      this.store(invoice);
      window.location.href = 'list.html';
    });
  }

  static initEdit() {
    const invoices = this.read();
    const id = window.location.hash.slice(1); // id paemimas is hastago
    const invoice = invoices.find(inv => inv.id == id);
    if (!invoice) {
      window.location.href = 'list.html'; // puslapio redirectas
    }
    const saskaita = document.querySelector('[data-invoice]');// saskaita elementas 
    console.log('saskaita', saskaita);
    console.log('Edit Invoice', invoice);
    const renderer = new InvoiceRenderer(invoice);

    renderer.render(saskaita, 'edit');

    //reikšmės dar neišrenderintos 
    /* console.log(quantityInputs, discountInputs);
    console.log(quantityInputs.value, discountInputs.value); */

    const visiItemai = document.querySelectorAll('.item-edit');
    console.log(visiItemai);


    /* console.log(invoice.items.quantity, items.discount); */

    const saveButton = document.querySelector('[data-save]');

    saveButton.addEventListener('click', _ => {

      invoice.items.forEach((item, index) => {
        const quantityInputs = visiItemai[index].querySelector('input[data-item-quantity]');
        const discountInputs = visiItemai[index].querySelector('input[data-item-discount]');
        /* const discountTypeInputs = visiItemai[index].querySelector('input[data-item-discount-type]'); */
        
        console.log(visiItemai[index]);
        console.log(quantityInputs.value, discountInputs.value);
        

        item.quantity = parseFloat(quantityInputs.value);
        item.discount = parseFloat(discountInputs.value);
        /* item.discount.type = discountTypeInputs.value; */
        

        if (isNaN(item.quantity)) item.quantity = 0;
        if (isNaN(item.discount)) item.discount = 0;
        this.update(invoice.id, {
          items: [
            ...invoice.items,
          ]
        }
        );
      });


      console.log('Save Invoice', renderer.invoice);
      /* window.location.href = 'list.html'; */
    });

    const cancelButton = document.querySelector('[data-cancel]');

    cancelButton.addEventListener('click', _ => {
      window.location.href = 'list.html';
    });
  }
}


