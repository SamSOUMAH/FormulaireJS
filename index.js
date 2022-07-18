// POur inserer des icons avec javasript on utilise: google font awesome
// On click sur le 1er liens, puis sur start, puis download

// Il ya 3 choses qu'on doit faire: 1-Recuperation des elements,2-Les evenements,3-Les fonctions

// 1-Recuperation des elements,
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const Submit = document.querySelector("#Submit");
const Annuler = document.querySelector("#Annuler");
const Signup = document.querySelector("#Signup");

// 2-Les evenements
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevenir des erreurs de la soumission

  form_verify(); //La seule fonction qui gère toutes les erreurs
});

// 3-Les fonctions
function form_verify() {
  //Obtenir toutes les valeurs des inputs et les mettre la fonction "trim()" pour empecher les espaces aux debut et aux a la fin
  const userValue = username.value.trim();
  const EmailValue = Email.value.trim();
  const pwdValue = password.value.trim();
  const pwd2Value = password2.value.trim();

  //Username verification
  if (userValue === "" || userValue.length < 3) {
    let message = "UserName ne doit pas etre vide et > à 2 lettres";
    setError(username, message);
  } else if (!userValue.match(/^[a-zA-Z]/)) {
    let message = "UserName  doit commencé par une lettre";
    setError(username, message);
  } else {
    setSuccess(username);
  }

  //Email verification
  if (EmailValue === "") {
    let message = "Email ne doit pas être vide ni moins de 2 lettres";
    setError(Email, message);
  } else if (!email_verify(EmailValue)) {
    let message = "Email format n'est pas valid !!";
    setError(Email, message);
  } else {
    setSuccess(Email);
  }

  //Verification mot de pass
  if (pwdValue === "") {
    let message = "Le mot de passe ne doit pas etre vide";
    setError(password, message);
  } else if (!password_verify(pwdValue)) {
    let message = "Mot de passe format: alkaly@14, longueur min: 6";
    setError(password, message);
  } else {
    setSuccess(password);
  }

  // verification du mot de pass de confirmation
  if (pwd2Value === "" || pwd2Value !== pwdValue) {
    let message = "Les deux mot de passe doivent etre identique";
    setError(password2, message);
  } else {
    setSuccess(password2);

    const fininsc = document.querySelector(".fininsc");
    fininsc.style.color = "green";
    fininsc.innerText = "Inscription validee";
  }
}

// Fonction pour gerer des erreurs
function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");

  // Ajout du message d'erreur
  small.textContent = message;

  // Ajout de la class error
  formControl.className = "form-control error";
}

// fonction pour gereer des success
function setSuccess(elem) {
  const formControl = elem.parentElement;
  formControl.className = "form-control success";
}

// La fonction de verification des Email avec les expressions regulière et la fonction "test()"

function email_verify(Email) {
  // emailType: s_sam.22-r@gmail.com
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(Email);
}

// fonction de verification du mot de passe fort

function password_verify(password) {
  //NB: (?=.*) dans une expression reguliere veut dire forcé

  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}/.test(password);
}

// Pour faire dispparaitre le formulaire et quiter
Annuler.addEventListener("click", () => {
  const container = document.querySelector(".container");
  let Quitter = confirm("Voulez vous quitter ?");
  if (Quitter === true) {
    container.style.visibility = "hidden";
  } else {
    alert("Complete votre inscription");
  }
});

// Le boutton pour afficher le formulaire dinscrition
Signup.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.style.visibility = "visible";
});
