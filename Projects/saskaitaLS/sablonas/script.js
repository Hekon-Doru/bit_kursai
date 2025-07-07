/**
 * Funkcija paimti vieną sąskaitą iš API
 */
async function fetchInvoice() {
  const response = await fetch('https://in3.dev/inv/');
  const data = await response.json();
  return data;
}

/**
 * Pagrindinė funkcija: paimti sąskaitą ir atvaizduoti
 */
async function loadInvoice() {
  const container = document.getElementById('invoice-container');
  container.innerHTML = ''; // išvalyti prieš dedant

  try {
    const data = await fetchInvoice();
    renderInvoice(data, container);
  } catch (error) {
    console.error("Klaida gaunant duomenis:", error);
  }
}

/**
 * Sukuria ir atvaizduoja vienos sąskaitos šabloną
 */
const renderInvoice = (data, container) => {
  const card = document.createElement('div');
  card.className = 'invoice-card';

  // Sąskaitos informacija
  card.innerHTML = `
    <h2>Sąskaita #${data.number}</h2>
    <p><strong>Išrašymo data:</strong> ${data.date}</p>
    <p><strong>Apmokėti iki:</strong> ${data.due_date}</p>

    <h3>Pardavėjas</h3>
    <p>${data.company.seller.name}</p>
    <p>Kodas: ${data.company.seller.code}</p>
    <p>PVM: ${data.company.seller.vat}</p>
    <p>Adresas: ${data.company.seller.address}</p>
    <p>El. paštas: ${data.company.seller.email}</p>
    <p>Tel: ${data.company.seller.phone}</p>

    <h3>Pirkėjas</h3>
    <p>${data.company.buyer.name}</p>
    <p>Kodas: ${data.company.buyer.code}</p>
    <p>PVM: ${data.company.buyer.vat}</p>
    <p>Adresas: ${data.company.buyer.address}</p>
    <p>El. paštas: ${data.company.buyer.email}</p>
    <p>Tel: ${data.company.buyer.phone}</p>

    <h3>Prekės</h3>
    <div data-item-table></div>

    <p><strong>Pristatymas:</strong> €<span data-item-shipping>${parseFloat(data.shippingPrice).toFixed(2)}</span></p>
  `;

  const productsHtmlBin = card.querySelector('[data-item-table]');
  const itemTable = document.querySelector('[data-table-template]');

  let viso = 0;
  let pvm = 0;
  let isViso = 0;

  data.items.forEach(item => {
    const clone = itemTable.content.cloneNode(true);

    clone.querySelector('[data-item-description]').textContent = item.description;
    clone.querySelector('[data-item-quantity]').textContent = item.quantity;
    clone.querySelector('[data-item-price]').textContent = parseFloat(item.price).toFixed(2);

    // Nuolaida
    let discountText = item.discount.value;
    if (item.discount.type === "percentage") {
      discountText += "%";
    }
    clone.querySelector('[data-item-discount]').textContent = discountText;

    // Kainos skaičiavimai
    let totalSum = parseFloat(item.price);
    let discount = item.discount.value;
    let discountedSum = totalSum;

    if (item.discount.type === "percentage") {
      discountedSum = totalSum - (totalSum * (discount / 100));
    } else if (item.discount.type === "fixed") {
      discountedSum = totalSum - discount;
    }

    let taxesAfter = discountedSum * 0.21;
    let totalWithTax = discountedSum + taxesAfter;

    clone.querySelector('[data-item-discounted-price]').textContent = discountedSum.toFixed(2);
    clone.querySelector('[data-item-taxes]').textContent = taxesAfter.toFixed(2);
    clone.querySelector('[data-item-total]').textContent = totalWithTax.toFixed(2);

    productsHtmlBin.appendChild(clone);

    viso += discountedSum;
    pvm += taxesAfter;
    isViso += totalWithTax;
  });

  // Galutinės sumos
  card.innerHTML += `
    <p><strong>Prekių suma:</strong> €${viso.toFixed(2)}</p>
    <p><strong>PVM suma:</strong> €${pvm.toFixed(2)}</p>
    <p><strong>Iš viso su PVM ir pristatymu:</strong> €${(isViso + parseFloat(data.shippingPrice)).toFixed(2)}</p>
  `;

  container.appendChild(card);
};

// paleisti puslapiui užsikrovus
window.onload = loadInvoice;
