const submitBtn = document.getElementById("submitBtn");
let emailForm = document.getElementById("emailForm");
submitBtn.onclick = addressSwitch;

function addressSwitch() {
  const email = document.getElementById("email");

  emailForm.action = `https://formspree.io/${email.value}`;

  emailForm.submit();
}