var btn = document.querySelector("#btn");
var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var self = document.querySelector("#background-self");
var mail = document.querySelector("#mail");
var about = document.querySelector("#about-me-text");

btn.addEventListener("click", function() {
  if(self.style.display === "none") {
        self.style.display = "block";
        mail.style.display = "none";

    } else {
        self.style.display = "none";
        mail.style.display = "block";
  }
});

btn0.addEventListener("click", function() {
  if(mail.style.display === "block") {
        mail.style.display = "none";
        self.style.display = "block";

    } else {
        mail.style.display = "none";
        self.style.display = "block";
  }
});

btn1.addEventListener("click", function() {
    if(window.innerWidth < 768){
        if(about.style.display === "none") {
            mail.style.display = "block";
        } else {
            mail.style.display = "block";
            about.style.display = "none";
        }
        
    }
});

btn0.addEventListener("click", function() {
    if(window.innerWidth < 768){
        if(mail.style.display === "block") {
            mail.style.display = "none";
            about.style.display = "block";
    
        } else {
            mail.style.display = "none";
            about.style.display = "block";
        }
        
    }
});























