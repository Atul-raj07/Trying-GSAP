var menu = document.querySelector(".menu")
var navbar = document.querySelector(".navbar")
const cutbtn = document.querySelector(".cutbtn")
 var tl = gsap.timeline({ paused: true });
tl.from(".navbar", { x: "100%", duration: .8 ,opacity:0,
ease:"linear",
scale :"0.5",
borderRadius : "50%",
});
tl.from(".elems",{
x:"100%",
duration:.3, 
stagger:.2,
opacity:0,
ease:"linear"
})
menu.addEventListener("click",function(){
      tl.resume()
 });
 
cutbtn.addEventListener("click",function(){
 tl.reverse()
});
gsap.from(".mainmenuitem",{
      y:20,
      duration:0.8,
      delay:.7,
      stagger:.1,
      opacity:0,
})