const checkbox = document.getElementById("checkbox");
const header = document.querySelector("header");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  
  if (header) {
    header.classList.toggle("dark");
  }
});
