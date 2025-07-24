"use strict";

const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
   alert(`Клікнуто на кнопці: ${event.target.value}`);
});
