async function fetchInvoiceFromAPI() {
  const response = await fetch('https://in3.dev/inv/');
  const data = await response.json();
  return data;
}

function saveInvoicesToLocalStorage(invoices) {
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

function renderSidebar(invoices, activeIndex = 0) {
  const list = document.getElementById('invoice-list');
  list.innerHTML = '';

  invoices.forEach((invoice, index) => {
    const btn = document.createElement('button');
    btn.className = 'invoice-sidebar-btn';

    const spanNumber = document.createElement('span');
    spanNumber.textContent = invoice.number;

    const delBtn = document.createElement('button');
    delBtn.className = 'invoice-delete-btn';
    delBtn.textContent = '×';
    delBtn.title = 'Ištrinti sąskaitą';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      invoices.splice(index, 1);
      saveInvoicesToLocalStorage(invoices);
      renderSidebar(invoices, 0);
      if (invoices.length > 0) {
        renderInvoice(invoices[0], 0);
      } else {
        document.getElementById('invoice-display').innerHTML = '';
      }
    });

    btn.appendChild(spanNumber);
    btn.appendChild(delBtn);

    btn.addEventListener('click', () => {
      renderInvoice(invoice, index);
      renderSidebar(invoices, index);
    });

    if (index === activeIndex) btn.classList.add('active');
    list.appendChild(btn);
  });
}

function renderInvoice(_, invoiceIndex = 0) {
  let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
  let data = invoices[invoiceIndex];

  const container = document.getElementById('invoice-display');
  container.innerHTML = '';

  const div = document.createElement('div');
  div.className = 'invoice-card';

  div.innerHTML += `
    <h2>Sąskaita #<span data-number></span></h2>
    <p>Išrašyta: <span data-date></span></p>
    <p>Apmokėti iki: <span data-due-date></span></p>
    <div class="seller-buyer-wrapper">
      <div class="seller-buyer-block">
        <h3>Pardavėjas</h3>
        <p><span data-seller-name></span></p>
        <p>Kodas: <span data-seller-code></span></p>
        <p>PVM: <span data-seller-vat></span></p>
        <p>Adresas: <span data-seller-address></span></p>
        <p>El. paštas: <span data-seller-email></span></p>
        <p>Tel: <span data-seller-phone></span></p>
      </div>
      <div class="seller-buyer-block">
        <h3>Pirkėjas</h3>
        <p><span data-buyer-name></span></p>
        <p>Kodas: <span data-buyer-code></span></p>
        <p>PVM: <span data-buyer-vat></span></p>
        <p>Adresas: <span data-buyer-address></span></p>
        <p>El. paštas: <span data-buyer-email></span></p>
        <p>Tel: <span data-buyer-phone></span></p>
      </div>
    </div>
    <h3>Prekės</h3>
    <div data-item-table></div>
    <p>Pristatymas: €<span data-item-shipping></span></p>
    <p>Prekių suma: €<span data-item-total-sum></span></p>
    <p>PVM suma: €<span data-item-total-tax></span></p>
    <p>Iš viso su PVM ir pristatymu: €<span data-item-total-w-tax></span></p>
  `;

  // Priskiriame bendrus duomenis
  div.querySelector('[data-number]').innerText = data.number;
  div.querySelector('[data-date]').innerText = data.date;
  div.querySelector('[data-due-date]').innerText = data.due_date;

  // Pardavėjas
  div.querySelector('[data-seller-name]').innerText = data.company.seller.name;
  div.querySelector('[data-seller-code]').innerText = data.company.seller.code;
  div.querySelector('[data-seller-email]').innerText = data.company.seller.email;
  div.querySelector('[data-seller-address]').innerText = data.company.seller.address;
  div.querySelector('[data-seller-phone]').innerText = data.company.seller.phone;
  div.querySelector('[data-seller-vat]').innerText = data.company.seller.vat;

  // Pirkėjas
  div.querySelector('[data-buyer-name]').innerText = data.company.buyer.name;
  div.querySelector('[data-buyer-code]').innerText = data.company.buyer.code;
  div.querySelector('[data-buyer-email]').innerText = data.company.buyer.email;
  div.querySelector('[data-buyer-address]').innerText = data.company.buyer.address;
  div.querySelector('[data-buyer-phone]').innerText = data.company.buyer.phone;
  div.querySelector('[data-buyer-vat]').innerText = data.company.buyer.vat;

  // Prekių lentelė
  const productsHtmlBin = div.querySelector('[data-item-table]');
  productsHtmlBin.innerHTML = '';

  let viso = 0;
  let pvm = 0;
  let isViso = 0;

  // Sukuriame lentelę
  const table = document.createElement('table');
  table.classList.add('products-table');

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Prekė</th>
      <th>Kiekis</th>
      <th>Kaina (€)</th>
      <th>Nuolaida</th>
      <th>Kaina su nuolaida (€)</th>
      <th>PVM (€)</th>
      <th>Iš viso su PVM (€)</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  data.items.forEach((item, idx) => {
    let discountText = '-';
    if (item.discount && typeof item.discount.value !== 'undefined') {
      discountText = item.discount.value;
      if (item.discount.type === "percentage") discountText += "%";
    }

    let totalSum = parseFloat(item.price);
    let discount = item.discount && typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
    let discountedSum = totalSum;
    if (item.discount && item.discount.type === "percentage") {
      discountedSum = totalSum - (totalSum * (discount / 100));
    } else if (item.discount && item.discount.type === "fixed") {
      discountedSum = totalSum - discount;
    }

    let taxesAfter = discountedSum * 0.21;
    let totalWithTax = discountedSum + taxesAfter;

    const tr = document.createElement('tr');

    // Redaguojami langeliai
    const rerender = () => renderInvoice(data, invoiceIndex);

    // Prekės pavadinimas
    const tdDesc = document.createElement('td');
    tdDesc.textContent = item.description;
    tdDesc.style.cursor = 'pointer';
    tdDesc.addEventListener('click', function handleClick() {
      makeCellEditable(tdDesc, item.description, (newVal) => {
        item.description = newVal;
      }, () => renderInvoice(null, invoiceIndex));
    });

    // Kiekis
    const tdQty = document.createElement('td');
    tdQty.textContent = item.quantity;
    tdQty.style.cursor = 'pointer';
    tdQty.addEventListener('click', function handleClick() {
      makeCellEditable(tdQty, item.quantity, (newVal) => {
        item.quantity = Number(newVal);
      }, () => {
        let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
        invoices[invoiceIndex] = data;
        saveInvoicesToLocalStorage(invoices);
        renderInvoice(data, invoiceIndex);
      });
    });

    // Kaina
    const tdPrice = document.createElement('td');
    tdPrice.textContent = totalSum.toFixed(2);
    tdPrice.style.cursor = 'pointer';
    tdPrice.addEventListener('click', function handleClick() {
      makeCellEditable(tdPrice, item.price, (newVal) => {
        item.price = Number(newVal);
      }, () => {
        let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
        invoices[invoiceIndex] = data;
        saveInvoicesToLocalStorage(invoices);
        renderInvoice(data, invoiceIndex);
      });
    });

    // Nuolaida
    const tdDiscount = document.createElement('td');
    tdDiscount.textContent = discountText;
    tdDiscount.style.cursor = 'pointer';
    tdDiscount.addEventListener('click', function handleClick() {
      let val = item.discount && typeof item.discount.value !== 'undefined' ? item.discount.value : '';
      makeCellEditable(tdDiscount, val, (newVal) => {
        if (!item.discount) item.discount = {};
        item.discount.value = Number(newVal);
      }, () => {
        let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
        invoices[invoiceIndex] = data;
        saveInvoicesToLocalStorage(invoices);
        renderInvoice(data, invoiceIndex);
      });
    });

    // Kiti langeliai (neredaguojami)
    const tdDiscounted = document.createElement('td');
    tdDiscounted.textContent = discountedSum.toFixed(2);

    const tdTax = document.createElement('td');
    tdTax.textContent = taxesAfter.toFixed(2);

    const tdTotal = document.createElement('td');
    tdTotal.textContent = totalWithTax.toFixed(2);

    tr.appendChild(tdDesc);
    tr.appendChild(tdQty);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDiscount);
    tr.appendChild(tdDiscounted);
    tr.appendChild(tdTax);
    tr.appendChild(tdTotal);

    tbody.appendChild(tr);

    viso += discountedSum;
    pvm += taxesAfter;
    isViso += totalWithTax;
  });

  productsHtmlBin.appendChild(table);

  div.querySelector('[data-item-shipping]').innerText = parseFloat(data.shippingPrice).toFixed(2);
  div.querySelector('[data-item-total-sum]').innerText = viso.toFixed(2);
  div.querySelector('[data-item-total-tax]').innerText = pvm.toFixed(2);
  div.querySelector('[data-item-total-w-tax]').innerText = (isViso + parseFloat(data.shippingPrice)).toFixed(2);

  container.appendChild(div);
}

// Redaguojamas langelis su žalia varnele
function makeCellEditable(td, value, onSave, onSaveAndRerender) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  input.style.width = (td.offsetWidth - 28) + 'px';
  input.style.boxSizing = 'border-box';

  const saveBtn = document.createElement('button');
  saveBtn.textContent = '✔';
  saveBtn.title = 'Išsaugoti';
  saveBtn.className = 'cell-save-btn';

  td.innerHTML = '';
  td.appendChild(input);
  td.appendChild(saveBtn);
  input.focus();

  function save() {
    onSave(input.value);
    onSaveAndRerender();
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') save();
  });
  input.addEventListener('blur', () => {
    setTimeout(() => {
      if (document.activeElement !== saveBtn) save();
    }, 10);
  });
  saveBtn.addEventListener('click', save);

  td.removeEventListener('click', handleClick);

  function handleClick() {
    makeCellEditable(td, input.value, onSave, onSaveAndRerender);
  }
}

window.onload = () => {
  const btn = document.getElementById('fetch-invoices-btn');
  let invoices = JSON.parse(localStorage.getItem('invoices')) || [];

  if (!Array.isArray(invoices)) invoices = [];

  if (btn) {
    btn.addEventListener('click', async () => {
      const invoice = await fetchInvoiceFromAPI();
      invoices.push(invoice);
      saveInvoicesToLocalStorage(invoices);
      renderSidebar(invoices, invoices.length - 1);
      renderInvoice(invoice, invoices.length - 1);
    });
  }

  renderSidebar(invoices);
  if (invoices.length > 0) {
    renderInvoice(invoices[0], 0);
  }
};
