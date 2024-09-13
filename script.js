// let select = document.querySelector('#lightmode');

// select.addEventListener('change', function() {
//     console.log(select.value);
//     if (select.value === 'ON') {
//         document.body.setAttribute('data-bs-theme', 'dark');
//     } else if (select.value === 'OFF') {
//         document.body.removeAttribute('data-bs-theme');
//     }
// });

const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}