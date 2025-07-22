import { Invoice } from './Invoice.js';


export class InvoiceCalculations {
  constructor(invoice) {
    this.invoice = invoice;
  }

  render() {
    // Numeris, datos
    document.querySelector('[data-number]').innerText = this.invoice.number;
    document.querySelector('[data-date]').innerText = this.invoice.date;
    document.querySelector('[data-due-date]').innerText = this.invoice.due_date;

    // Pardavėjas
    document.querySelector('[data-seller-name]').innerText = this.invoice.company.seller.name;
    document.querySelector('[data-seller-code]').innerText = this.invoice.company.seller.code;
    document.querySelector('[data-seller-email]').innerText = this.invoice.company.seller.email;
    document.querySelector('[data-seller-address]').innerText = this.invoice.company.seller.address;
    document.querySelector('[data-seller-phone]').innerText = this.invoice.company.seller.phone;
    document.querySelector('[data-seller-vat]').innerText = this.invoice.company.seller.vat;

    // Pirkėjas
    document.querySelector('[data-buyer-name]').innerText = this.invoice.company.buyer.name;
    document.querySelector('[data-buyer-code]').innerText = this.invoice.company.buyer.code;
    document.querySelector('[data-buyer-email]').innerText = this.invoice.company.buyer.email;
    document.querySelector('[data-buyer-address]').innerText = this.invoice.company.buyer.address;
    document.querySelector('[data-buyer-phone]').innerText = this.invoice.company.buyer.phone;
    document.querySelector('[data-buyer-vat]').innerText = this.invoice.company.buyer.vat;

    // Prekių lentelė
    const productsHtmlBin = document.querySelector('[data-item-table]');
    const itemTable = document.querySelector('[data-table-template]');
    productsHtmlBin.innerHTML = '';

    let viso = 0;
    let pvm = 0;
    let isViso = 0;

    let discountedSumWithQuantity = 0;
    let taxesAfterWithQuantity = 0;
    let totalWithTaxWithQuantity = 0;


    console.log('Invoice Items', this.invoice.items);
    this.invoice.items.forEach(item => {
      const clone = itemTable.content.cloneNode(true);

      clone.querySelector('[data-item-description]').textContent = item.description;
      clone.querySelector('[data-item-quantity]').textContent = item.quantity;

      let itemQuantityInput = clone.querySelector('[data-item-quantity]');
      if (itemQuantityInput) {
        itemQuantityInput.value = item.quantity;
      }

      clone.querySelector('[data-item-price]').textContent = parseFloat(item.price).toFixed(2);

      // Nuolaida
      let discountText = '';
      if (item.discount && typeof item.discount.value !== 'undefined') {
        discountText = item.discount.value;
        if (item.discount.type === "percentage") {
          discountText += " %";
        } else {
          discountText += " €";
        }
      }

      clone.querySelector('[data-item-discount]').textContent = discountText;

      let itemDiscountInput = clone.querySelector('[data-item-discount]');
      let itemDiscountTypeInput = clone.querySelector('[data-item-discount-type]');
      
      if (itemDiscountTypeInput && itemDiscountInput) {
        if (item.discount && item.discount.length !== 0) {
          itemDiscountInput.value = item.discount.value;
          itemDiscountTypeInput.value = item.discount.type;
        }
      }


      let totalSum = parseFloat(item.price);
      let discount = item.discount && typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
      let discountType = item.discount && item.discount.type ? item.discount.type : 'fixed';
      let discountedSum = totalSum;


      if (item.discount && discountType === "percentage") {
        discountedSum = totalSum - (totalSum * (discount / 100));
      } else if (item.discount && discountType === "fixed") {
        discountedSum = totalSum - discount;
      }

      let taxesAfter = discountedSum * 0.21;
      clone.querySelector('[data-item-discounted-price]').textContent = parseFloat(discountedSum).toFixed(2);
      clone.querySelector('[data-item-taxes]').textContent = taxesAfter.toFixed(2);
      let totalWithTax = discountedSum + taxesAfter;
      clone.querySelector('[data-item-total]').textContent = parseFloat(totalWithTax).toFixed(2);

      productsHtmlBin.appendChild(clone);

      viso += discountedSum;
      pvm += taxesAfter;
      isViso += totalWithTax;

      discountedSumWithQuantity += discountedSum * item.quantity;
      taxesAfterWithQuantity += taxesAfter * item.quantity;
      totalWithTaxWithQuantity += totalWithTax * item.quantity;

    });
    document.querySelector('[data-item-shipping]').textContent = parseFloat(this.invoice.shippingPrice).toFixed(2);
    document.querySelector('[data-item-total-sum]').textContent = discountedSumWithQuantity.toFixed(2);
    document.querySelector('[data-item-total-tax]').textContent = taxesAfterWithQuantity.toFixed(2);
    document.querySelector('[data-item-total-w-tax]').textContent = (parseFloat(totalWithTaxWithQuantity) + parseFloat(this.invoice.shippingPrice)).toFixed(2);
  }
}