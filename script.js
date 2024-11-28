 

 
var h1 = document.querySelector("h1");
var btn = document.querySelector("button");
var prgrs = document.querySelector(".progress");
let count = 0;
btn.addEventListener("click", function () {
  let time = setInterval(function () {
    count++;
    h1.innerHTML = count + "%";
    prgrs.style.width = count+"%";
    btn.style.pointerEvents = "none"

  } ,100);
  setTimeout(function(){
    clearInterval(time);
    btn.innerHTML = "Downloaded"
    btn.style.opacity = 0.5
  },10000)
});
