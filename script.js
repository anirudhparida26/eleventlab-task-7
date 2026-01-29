// Selecting DOM elements
const heading = document.getElementById("heading");
const text = document.getElementById("text");
const changeBtn = document.getElementById("changeBtn");
const toggleBtn = document.getElementById("toggleBtn");

// Button click event to change text and style
changeBtn.addEventListener("click", function () {
  console.log("Change button clicked");

  text.innerText = "Text changed using JavaScript!";
  text.style.color = "blue";
  text.style.fontWeight = "bold";
});

// Button click event to toggle CSS class
toggleBtn.addEventListener("click", function () {
  console.log("Toggle button clicked");

  heading.classList.toggle("highlight");
});
