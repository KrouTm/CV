var btn = document.querySelector("#btn");
var btn0 = document.querySelector("#btn0");
var a = document.querySelector("#background-self");
var b = document.querySelector("#mail");

btn.addEventListener("click", function() {
  if(a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";

    } else {
        a.style.display = "none";
        b.style.display = "block";
  }
});

btn0.addEventListener("click", function() {
  if(b.style.display === "block") {
        b.style.display = "none";
        a.style.display = "block";

    } else {
        b.style.display = "none";
        a.style.display = "block";
  }
});