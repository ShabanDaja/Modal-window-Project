'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const modalHandler = function () {};

const openHandler = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeHandler = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openHandler);
}
btnCloseModal.addEventListener('click', closeHandler);
overlay.addEventListener('click', closeHandler);
