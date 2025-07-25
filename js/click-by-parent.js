"use strict";

const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
   if (event.target.nodeName === 'BUTTON') {
      alert(`Клікнуто на кнопці: ${event.target.value}`);
   }
});
