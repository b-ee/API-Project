function addressSwitch() {
  const email = document.getElementById("email");
  const notes = document.getElementById("notes");
  const newForm = document.getElementById("newForm");

  newForm.action = `https://formspree.io/${email}`;

  newForm.appendChild(notes);

  newForm.submit();
}