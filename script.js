window.onload=function(){
document.getElementById("loader").style.display="none";
}

let slides=document.querySelectorAll(".slide");
let i=0;

function slider(){
slides.forEach(s=>s.style.display="none");
i++;
if(i>slides.length){i=1}
slides[i-1].style.display="block";
setTimeout(slider,3000);
}
slider();

let text="Explore Dream Places";
let j=0;

function typing(){
if(j<text.length){
document.getElementById("typing").innerHTML+=text.charAt(j);
j++;
setTimeout(typing,80);
}
}
typing();

function openForm(){
document.getElementById("formBox").style.display="flex";
}

function closeForm(){
document.getElementById("formBox").style.display="none";
}

function submitForm(){
let name=document.getElementById("name").value;
let place=document.getElementById("place").value;

if(name==""||place==""){
alert("Fill all fields");
}else{
alert("Trip Booked");
}
}

function toggleMenu(){
document.getElementById("navMenu").classList.toggle("active");
}
