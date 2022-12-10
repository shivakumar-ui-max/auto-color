let btn = document.querySelector('.btn');
let colorContainer = document.querySelector('.colorContainer');
let code = document.querySelector('#code')
btn.addEventListener('click', () => {
   let r = Math.floor(Math.random() * 255);
   let g = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
   // let a = Math.floor(Math.random() * 9);
   colorContainer.style.backgroundColor = `RGB(${r},${g},${b})`;
   code.innerText = `RGB(${r},${g},${b})`;
   // console.log(r);
})