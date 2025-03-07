'use strict';

// const modals = document.querySelectorAll('.modal'); // Target both modals
// const overlay = document.querySelector('.overlay');
// const btnCloseModals = document.querySelectorAll('.close-modal');
// const btnOpenModals = document.querySelectorAll('.show-modal');
// const submitBtn = document.querySelector('.submit-btn');
// const submitMessage = document.querySelector('.submit-message');

// const openModal = function (modal) {
//   console.log('Button clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// const closeModal = function (modal) {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// // Show the 'learn more' section message
// const showLearnMore = function () {
//   submitMessage.classList.remove('hidden');
// };

// // Adding event listeners to each open modal button
// btnOpenModals.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const modalId = btn.getAttribute('data-target');
//     const modal = document.getElementById(modalId);
//     openModal(modal);
//   });
// });

// btnCloseModals.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const modal = btn.closest('.modal');
//     closeModal(modal);
//   });
// });

// // Close modal when clicking on the overlay
// overlay.addEventListener('click', () => {
//   modals.forEach(modal => {
//     closeModal(modal);
//   });
// });

// //KEYPRESS EVENT
// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape') {
//     // if press key is escape and not contain hidden class then execute function
//     modals.forEach(modal => {
//       if (!modal.classList.contains('hidden')) {
//         // if the modal DOES NOT contain the hidden class then close the modal
//         closeModal(modal);
//       }
//     });
//   }
// });

// // Show 'Learn More' message when submit button is clicked
// submitBtn.addEventListener('click', showLearnMore);

const modals = document.querySelectorAll('.modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

// Function to open a modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// Function to close a modal
function closeModal(modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Handle opening modals for show-modal btns (modals 1-3)
const showModalBtns = document.querySelectorAll('.show-modal');
showModalBtns.forEach(button => {
  button.addEventListener('click', () => {
    const targetModal = button.getAttribute('data-target');
    openModal(targetModal);
  });
});

// Handle closing modals when the close button (x) is clicked
closeModalBtns.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// Handle closing modals when clicking on the overlay
overlay.addEventListener('click', () => {
  const openModalElement = document.querySelector('.modal:not(.hidden)');
  if (openModalElement) {
    closeModal(openModalElement);
  }
});

// Handle opening the "Learn More" modal (modal-4) when the submit-btn is clicked
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
  openModal('modal-4');
});
