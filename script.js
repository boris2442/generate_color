const generateColor=()=>{
const code=document.querySelector(".code");
let random=(Math.floor(Math.random() *0xFFFFFF)).toString(16) ;
console.log(random) ;

document.body.style.backgroundColor="#"+random;
code.textContent="#"+random;

}