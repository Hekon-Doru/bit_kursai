import { v4 as uuidv4 } from 'uuid';
import { getInvoice, saveInvoice } from './storage';

let currentId = null;

export async function fetchAndSaveInvoice() {
  const res = await fetch('https://in3.dev/inv/');
  const data = await res.json();
  const id = uuidv4();
  saveInvoice(id, data);
  currentId = id;
  renderInvoice(data);
}

export function renderInvoice(data) {
  if (!data) return;

  document.querySelector('[data-number]').innerText = data.number;
  document.querySelector('[data-date]').innerText = data.date;
  document.querySelector('[data-due-date]').innerText = data.due_date;

  document.querySelector('[data-seller-name]').innerText = data.company.seller.name;
  document.querySelector('[data-seller-address]').innerText = data.company.seller.address;
  document.querySelector('[data-seller-code]').innerText = data.company.seller.code;
  document.querySelector('[data-seller-vat]').innerText = data.company.seller.vat;
  document.querySelector('[data-seller-phone]').innerText = data.company.seller.phone;
  document.querySelector('[data-seller-email]').innerText = data.company.seller.email;

  document.querySelector('[data-buyer-name]').innerText = data.company.buyer.name;
  document.querySelector('[data-buyer-address]').innerText = data.company.buyer.address;
  document.querySelector('[data-buyer-code]').innerText = data.company.buyer.code;
  document.querySelector('[data-buyer-vat]').innerText = data.company.buyer.vat;
  document.querySelector('[data-buyer-phone]').innerText = data.company.buyer.phone;
  document.querySelector('[data-buyer-email]').innerText = data.company.buyer.email;

  const tbody = document.querySelector('[data-item-table]');
  tbody.innerHTML = '';

  let viso = 0, pvm = 0;

  data.items.forEach(item => {
    const tr = document.createElement('tr');

    const discount = item.discount?.value ?? '';
    const discountType = item.discount?.type;

    let discounted = item.price;
    if (discountType === 'percentage') {
      discounted -= item.price * (discount / 100);
    } else if (discountType === 'fixed') {
      discounted -= discount;
    }

    const taxes = discounted * 0.21;
    const total = discounted + taxes;

    tr.innerHTML = `
      <td>${item.description}</td>
      <td>${item.quantity}</td>
      <td>€${item.price.toFixed(2)}</td>
      <td>${discount || ''}${discountType === 'percentage' ? '%' : ''}</td>
      <td>€${discounted.toFixed(2)}</td>
      <td>€${taxes.toFixed(2)}</td>
      <td>€${total.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);

    viso += discounted;
    pvm += taxes;
  });

  document.querySelector('[data-item-shipping]').innerText = data.shippingPrice.toFixed(2);
  document.querySelector('[data-item-total-sum]').innerText = viso.toFixed(2);
  document.querySelector('[data-item-total-tax]').innerText = pvm.toFixed(2);
  document.querySelector('[data-item-total-w-tax]').innerText = (viso + pvm + data.shippingPrice).toFixed(2);
}

export function setCurrentId(id) {
  currentId = id;
}

export function getCurrentInvoice() {
  return getInvoice(currentId);
}

export function getCurrentId() {
  return currentId;
}
