const contain =document.querySelector("#container");
const img =document.querySelector("img");

contain.addEventListener('mousemove',(z)=> {
  const x = z.clientX - z.target.offsetLeft;
  const y = z.clientY - z.target.offsetTop;
  console.log(x,y); //checking on offset in console
  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform= "scale(2)"; //zoom scale
});

contain.addEventListener('mouseleave',()=>{
    img.style.transformOrigin="center center";
    img.style.transform = "scale(1)";
});