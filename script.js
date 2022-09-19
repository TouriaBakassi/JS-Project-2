//                           Read-More Button

let Button = document.querySelector("button");
let MoreR = document.querySelector("span");

Button.addEventListener("click", () => {
  MoreR.classList.toggle("active");
  if (MoreR.classList.contains("active")) {
    Button.style.background = "red";
    Button.textContent = "Read-Less";
  } else {
    Button.style.background = "blue";
    Button.textContent = "Read-More";
  }
});
