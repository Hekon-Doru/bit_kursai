import { deleteCurrentInvoice, editCurrentInvoice } from './edit';
import { fetchAndSaveInvoice } from './invoice';
import { handleSidebarActions, renderSidebar } from './sidebar';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  handleSidebarActions();

  document.getElementById('fetchInvoice').addEventListener('click', async () => {
    await fetchAndSaveInvoice();
    renderSidebar();
  });

  document.getElementById('deleteInvoice').addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    modal.show();
  });

  document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
    deleteCurrentInvoice();
    renderSidebar();
    new bootstrap.Modal(document.getElementById('confirmDeleteModal')).hide();
  });

  document.getElementById('editInvoice').addEventListener('click', () => {
    editCurrentInvoice();
  });
});
