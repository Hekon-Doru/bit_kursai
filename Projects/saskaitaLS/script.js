/**
 * Paimti sąskaitas iš API
 */
async function fetchInvoicesFromAPI() {
  const response = await fetch('https://in3.dev/inv/');
  const data = await response.json();
  return data;
}

/**
 * Išsaugoti sąskaitas į LocalStorage
 */
function saveInvoicesToLocalStorage(invoices) {
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

/**
 * Atvaizduoti sąskaitas puslapyje
 */
function renderInvoices() {
  let invoices = JSON.parse(localStorage.getItem('invoices'));

  // Užtikrinti, kad invoices būtų masyvas
  if (!Array.isArray(invoices)) invoices = [];

  const list = document.getElementById('invoice-list');
  list.innerHTML = '';

  invoices.forEach((invoice, index) => {
    const div = document.createElement('div');
    div.className = 'invoice-card';
    div.innerHTML = `
      <strong>ID:</strong> ${invoice.id}<br/>
      <strong>Klientas:</strong> ${invoice.client}<br/>
      <strong>Suma:</strong> ${invoice.amount}<br/>
      <div class="buttons">
        <button onclick="editInvoice(${index})">Redaguoti</button>
        <button class="delete-btn" onclick="deleteInvoice(${index})">Ištrinti</button>
      </div>
    `;
    list.appendChild(div);
  });
}

/**
 * Redaguoti sąskaitą pagal index
 */
function editInvoice(index) {
  let invoices = JSON.parse(localStorage.getItem('invoices'));
  if (!Array.isArray(invoices)) invoices = [];

  let invoice = invoices[index];
  let newClient = prompt("Naujas kliento vardas:", invoice.client);
  let newAmount = prompt("Nauja suma:", invoice.amount);

  if (newClient !== null && newAmount !== null) {
    invoice.client = newClient;
    invoice.amount = newAmount;
    invoices[index] = invoice;
    localStorage.setItem('invoices', JSON.stringify(invoices));
    renderInvoices();
  }
}

/**
 * Ištrinti sąskaitą pagal index
 */
function deleteInvoice(index) {
  let invoices = JSON.parse(localStorage.getItem('invoices'));
  if (!Array.isArray(invoices)) invoices = [];

  invoices.splice(index, 1);
  localStorage.setItem('invoices', JSON.stringify(invoices));
  renderInvoices();
}

/**
 * Event listener mygtukui "Atsiųsti sąskaitas iš API"
 */
document.getElementById('fetch-invoices-btn').addEventListener('click', async () => {
  const invoices = await fetchInvoicesFromAPI();
  saveInvoicesToLocalStorage(invoices);
  renderInvoices();
});

/**
 * Paleisti render funkciją puslapiui užsikrovus
 */
window.onload = renderInvoices;
