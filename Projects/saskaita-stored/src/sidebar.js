export function renderSidebar(invoices) {
  const sidebar = document.querySelector('[data-sidebar]');
  sidebar.innerHTML = '';
  invoices.forEach(inv => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = inv.number;
    sidebar.appendChild(li);
  });
}

