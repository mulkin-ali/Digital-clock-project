let hours=document.getElementById("hrs");
let min=document.getElementById("min");
let secnd=document.getElementById("sec");

setInterval(()=>{
let currentTime= new Date();
hours.innerHTML=(currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML=(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
secnd.innerHTML=(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
