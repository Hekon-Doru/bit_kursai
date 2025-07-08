// /src/classes/Invoice.js

export default class Invoice {
  constructor(data, index, app) {
    this.data = data;
    this.index = index;
    this.app = app;
  }

  renderDisplay(container) {
    const div = document.createElement('div');
    div.className = 'invoice-card';
    const data = this.data;

    div.innerHTML = `
      <h2>Sąskaita #<span>${data.number}</span></h2>
      <p>Išrašyta: <span>${data.date}</span></p>
      <p>Apmokėti iki: <span>${data.due_date}</span></p>
      <div class="seller-buyer-wrapper">
        <div class="seller-buyer-block">
          <h3>Pardavėjas</h3>
          <p>${data.company.seller.name}</p>
          <p>Kodas: ${data.company.seller.code}</p>
          <p>PVM: ${data.company.seller.vat}</p>
          <p>Adresas: ${data.company.seller.address}</p>
          <p>El. paštas: ${data.company.seller.email}</p>
          <p>Tel: ${data.company.seller.phone}</p>
        </div>
        <div class="seller-buyer-block">
          <h3>Pirkėjas</h3>
          <p>${data.company.buyer.name}</p>
          <p>Kodas: ${data.company.buyer.code}</p>
          <p>PVM: ${data.company.buyer.vat}</p>
          <p>Adresas: ${data.company.buyer.address}</p>
          <p>El. paštas: ${data.company.buyer.email}</p>
          <p>Tel: ${data.company.buyer.phone}</p>
        </div>
      </div>
      <h3>Prekės</h3>
      <div class="products-table-wrapper"></div>
      <div class="invoice-totals"></div>
    `;

    const productsTable = this.renderProductsTable(data.items);
    div.querySelector('.products-table-wrapper').appendChild(productsTable);

    // Sukuriame totals div atskirai nuo lentelės
    const totalsDiv = div.querySelector('.invoice-totals');
    const { viso, pvm, isViso } = this.calculateTotals(data.items, data.shippingPrice);

    totalsDiv.innerHTML = `
      <p>Pristatymas: €${parseFloat(data.shippingPrice).toFixed(2)}</p>
      <p>Prekių suma: €${viso.toFixed(2)}</p>
      <p>PVM suma: €${pvm.toFixed(2)}</p>
      <p>Iš viso: €${(isViso + parseFloat(data.shippingPrice)).toFixed(2)}</p>
    `;

    container.innerHTML = '';
    container.appendChild(div);
  }

  renderProductsTable(items) {
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

    items.forEach(item => {
      let discountText = '-';
      if (item.discount && typeof item.discount.value !== 'undefined') {
        discountText = item.discount.value;
        if (item.discount.type === "percentage") discountText += "%";
      }

      let totalSum = parseFloat(item.price);
      let discount = item.discount ? item.discount.value : 0;
      let discountedSum = totalSum;

      if (item.discount && item.discount.type === "percentage") {
        discountedSum = totalSum - (totalSum * (discount / 100));
      } else if (item.discount && item.discount.type === "fixed") {
        discountedSum = totalSum - discount;
      }

      let taxesAfter = discountedSum * 0.21;
      let totalWithTax = discountedSum + taxesAfter;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.description}</td>
        <td>${item.quantity}</td>
        <td>${totalSum.toFixed(2)}</td>
        <td>${discountText}</td>
        <td>${discountedSum.toFixed(2)}</td>
        <td>${taxesAfter.toFixed(2)}</td>
        <td>${totalWithTax.toFixed(2)}</td>
      `;

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    return table;
  }

  calculateTotals(items, shippingPrice) {
    let viso = 0;
    let pvm = 0;
    let isViso = 0;

    items.forEach(item => {
      let totalSum = parseFloat(item.price);
      let discount = item.discount ? item.discount.value : 0;
      let discountedSum = totalSum;

      if (item.discount && item.discount.type === "percentage") {
        discountedSum = totalSum - (totalSum * (discount / 100));
      } else if (item.discount && item.discount.type === "fixed") {
        discountedSum = totalSum - discount;
      }

      let taxesAfter = discountedSum * 0.21;
      let totalWithTax = discountedSum + taxesAfter;

      viso += discountedSum;
      pvm += taxesAfter;
      isViso += totalWithTax;
    });

    return { viso, pvm, isViso };
  }
}
