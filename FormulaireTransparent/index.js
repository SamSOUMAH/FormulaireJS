const displayForm = _("displayForm");
const formLogin = _("formLogin");
const formRegister = _("formRegister");
const forLogin = _("forLogin");
const forRegister = _("forRegister");
const formContainer = _("formContainer");
const Inscription = _("Inscription");

function _(e) {
  return document.getElementById(e);
}

displayForm.addEventListener("click", showForm);

function showForm() {
  document.querySelector(".card").classList.toggle("card_show");
}

Inscription.addEventListener("click", () => {
  forLogin.classList.add("Active");
  forRegister.classList.remove("Active");
  if (formLogin.classList.contains("toggleForm")) {
    formContainer.style.transform = "translateY(0%)";
    formContainer.style.transition = "transform 0.8s";
    formRegister.classList.add("toggleForm");
    formLogin.classList.remove("toggleForm");
  }
});

forRegister.addEventListener("click", () => {
  forLogin.classList.remove("Active");
  forRegister.classList.add("Active");
  if (formRegister.classList.contains("toggleForm")) {
    formContainer.style.transform = "translateY(-41%)";
    formContainer.style.transition = "transform 0.8s";
    formRegister.classList.remove("toggleForm");
    formLogin.classList.add("toggleForm");
  }
});
