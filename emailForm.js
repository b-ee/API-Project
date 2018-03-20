const emailForm = document.querySelector("form");
const userEmail = document.querySelector(".userEmail");

emailForm.addEventListener("submit",addressSwitch);

function addressSwitch(e) {
  e.preventDefault();
  console.log(userEmail.value);

  emailForm.action = `https://formspree.io/${userEmail.value}`

  emailForm.open("POST",`https://formspree.io/${userEmail.value}`);
}