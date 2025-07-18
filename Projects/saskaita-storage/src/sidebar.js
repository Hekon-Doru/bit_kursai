import { renderInvoice, setCurrentId } from './invoice';
import { getAllInvoices, removeInvoice } from './storage';

export function renderSidebar() {
  const invoiceList = document.getElementById('invoiceList');
  invoiceList.innerHTML = '';

  const invoices = getAllInvoices();

  invoices.forEach(({ id, data }) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const span = document.createElement('span');
    span.innerText = `Nr: ${data.number}`;
    span.className = 'flex-grow-1 cursor-pointer';
    span.style.cursor = 'pointer';
    span.onclick = () => {
      setCurrentId(id);
      renderInvoice(data);
    };

    const btn = document.createElement('button');
    btn.innerHTML = '&times;';
    btn.className = 'btn btn-sm btn-outline-danger ms-2';
    btn.onclick = () => {
      removeInvoice(id);
      renderSidebar();
    };

    li.appendChild(span);
    li.appendChild(btn);
    invoiceList.appendChild(li);
  });
}

export function handleSidebarActions() {
  // For future custom events if needed
}
