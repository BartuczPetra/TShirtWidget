const buttons = document.querySelectorAll('button');

buttons.forEach(b => b.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--hue' , b.dataset.color);
}))