const submitBtn = document.getElementById("submitBtn");
let emailForm = document.getElementById("emailForm");
submitBtn.addEventListener("click", addressSwitch);

function addressSwitch(e) {
  e.preventDefault();
  
  const email = document.getElementById("email");

  emailForm.action = `https://formspree.io/${email.value}`;

  emailForm.submit();
}