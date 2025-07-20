import { InvoiceAPI } from './InvoiceAPI.js';
import { InvoiceRenderer } from './InvoiceRenderer.js';

InvoiceAPI.fetchInvoice().then(invoice => {
  const renderer = new InvoiceRenderer(invoice);
  renderer.render();
});

// fetch duomenis iš API
// ir atspausdinti sąskaitą į HTML  

        const clone = template.content.cloneNode(true);
            clone.querySelector('[data-list-item-title]').textContent = activeFrame.title;