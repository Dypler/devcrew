import '@splidejs/splide/css/default';
import '@splidejs/splide/css/core';
import '/src/css/style.css'
import '/src/css/header.css'
import '/src/css/main.css'
import '/src/css/tools.css'
import '/src/css/newcomer.css'
import '/src/css/feedback.css'
import '/src/css/footer.css'
import '/src/css/splide.css'




import Splide from '@splidejs/splide';

new Splide('.splide', {
    pagination: true
}).mount();


const btns = document.querySelectorAll('button');
btns[0].addEventListener('click', ()=> {
  btns[1].classList.toggle('active');
  btns[0].classList.toggle('active');
});
btns[1].addEventListener('click', ()=> {
  btns[0].classList.toggle('active');
  btns[1].classList.toggle('active');
  
});