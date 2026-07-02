/**
 * Modal Component Logic
 * Handles opening, closing, and outside-click events for the global modal.
 */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('order-modal');
  const openBtns = document.querySelectorAll('.js-open-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (!modal) return;

  // Function to handle opening
  function openModal() {
    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  // Function to handle closing
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  // 1. Open modal on button click
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // 2. Close modal on X click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // 3. Close modal when tapping the dark overlay
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});