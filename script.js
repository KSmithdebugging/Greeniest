// Show pass when signing in
function myFunction() {
  var showpass = document.getElementById("password");
  if (showpass.type === "password") {
    showpass.type = "text";
  } else {
    showpass.type = "password";
  }
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  slides[slideIndex-1].style.justifyContent = "left"; 

  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}
var slideIndex = 0;
showSlides();
// // Show pass when creating account
// // function revealPass() {
// //   var showpass1 = document.getElementById("pass");
// //   if (showpass1.type === "password") {
// //     showpass1.type = "text";
// //   } else {
// //     showpass1.type = "password";
// //   }
// // }
// // Show other dropdown when clicked
// // function dropDown() {
// //   var showselection = document.getElementById("dropDown");
// //   if (showselection.style.display === "none") {
// //     showselection.style.display = "block";
// //   } else {
// //     showselection.style.display = "none";
// //   }
// // }
// // Validate Age if over 16+
// // function validateAge() {


// // }

// ​
// // function signin() {
// //  alert("You signed in successfully");
// // }
// Search bar
// Execute a function when the user releases a key on the keyboard
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        alert('hello');
        // Trigger the button element with a click
         if (input.value == "apple")
        if ()
        document.getElementById("hidden-link").click();
   
        
      }
    });