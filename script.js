
/* ROOM FILTER */

function filterRooms(type, element){

document.querySelectorAll(".room-type-card").forEach(card=>{
card.classList.remove("active-type");
});

element.classList.add("active-type");

let rooms = document.querySelectorAll(".room-item");

rooms.forEach(item=>{

if(type === "all"){
item.style.display = "block";
return;
}

if(item.classList.contains(type)){
item.style.display = "block";
}else{
item.style.display = "none";
}

});

}

/* Bubble animation (optimized for performance) */

setInterval(()=>{

let bubble=document.createElement("div");
bubble.classList.add("bubble");

bubble.style.left=Math.random()*100+"vw";
bubble.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(bubble);

setTimeout(()=>{
bubble.remove();
},12000);

},1500);


/* Navbar shadow on scroll (premium effect) */

window.addEventListener("scroll",function(){

let nav=document.querySelector(".premium-nav");

if(window.scrollY > 30){
nav.style.boxShadow="0 15px 40px rgba(0,0,0,0.12)";
}else{
nav.style.boxShadow="0 10px 30px rgba(0,0,0,0.05)";
}

});


/* Auto close navbar on link click (mobile) */

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {

link.addEventListener('click', () => {

let navbar = document.querySelector('.navbar-collapse');

if(navbar.classList.contains('show')){
let bsCollapse = new bootstrap.Collapse(navbar,{
toggle:false
});
bsCollapse.hide();
}

});

});


/* Close navbar if user clicks outside */

document.addEventListener('click', function(event){

let navbar = document.querySelector('.navbar-collapse');
let toggler = document.querySelector('.navbar-toggler');

if(
navbar.classList.contains('show') &&
!navbar.contains(event.target) &&
!toggler.contains(event.target)
){
let bsCollapse = new bootstrap.Collapse(navbar,{
toggle:false
});
bsCollapse.hide();
}

});


