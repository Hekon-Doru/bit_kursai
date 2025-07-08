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
      <button class="edit-invoice-btn">Redaguoti</button>
    `;

    // Pridedame produkto lentelę
    const productsTable = this.renderProductsTable(data.items);
    div.querySelector('.products-table-wrapper').appendChild(productsTable);

    // Pridėti totals su pristatymu
    const totalsDiv = div.querySelector('.invoice-totals');
    totalsDiv.innerHTML = `
      <p>Pristatymas: €${parseFloat(data.shippingPrice).toFixed(2)}</p>
      <p>Viso: €${this.getTotalWithoutTax().toFixed(2)}</p>
      <p>PVM: €${this.getTotalTax().toFixed(2)}</p>
      <p>Iš viso su PVM ir pristatymu: €${this.getTotalWithTaxAndShipping().toFixed(2)}</p>
    `;

    // Mygtuko paspaudimo įvykis
    div.querySelector('.edit-invoice-btn').addEventListener('click', () => {
      this.app.editInvoice(this.index);
    });

    container.innerHTML = '';
    container.appendChild(div);
  }

  // Apskaičiuoja sumą be PVM ir pristatymo
  getTotalWithoutTax() {
    return this.data.items.reduce((sum, item) => {
      let price = parseFloat(item.price);
      let discount = item.discount ? item.discount.value : 0;
      if (item.discount && item.discount.type === "percentage") {
        price -= price * (discount / 100);
      } else if (item.discount && item.discount.type === "fixed") {
        price -= discount;
      }
      return sum + price;
    }, 0);
  }

  // Apskaičiuoja bendrą PVM sumą
  getTotalTax() {
    return this.data.items.reduce((sum, item) => {
      let price = parseFloat(item.price);
      let discount = item.discount ? item.discount.value : 0;
      let discountedPrice = price;
      if (item.discount && item.discount.type === "percentage") {
        discountedPrice = price - price * (discount / 100);
      } else if (item.discount && item.discount.type === "fixed") {
        discountedPrice = price - discount;
      }
      let tax = discountedPrice * 0.21;
      return sum + tax;
    }, 0);
  }

  // Apskaičiuoja galutinę sumą su PVM ir pristatymu
  getTotalWithTaxAndShipping() {
    return this.getTotalWithoutTax() + this.getTotalTax() + parseFloat(this.data.shippingPrice);
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
}
