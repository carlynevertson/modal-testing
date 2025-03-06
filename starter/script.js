'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closedModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

    btnClosedModal.addEventListener('click', closedModal);
    overlay.addEventListener('click', closedModal);

    //KEYPRESS EVENT
    document.addEventListener('keydown', function (e) {
    // console.log(e.key);

        if(e.key === 'Escape') { // if press key is escape and not contain hidden class then execute function
            if(!modal.classList.contains('hidden')) { // if the modal DOES NOT contain the hidden class then close the modal
                closedModal();
            } 
        }
    }
);
