const typedTextSpan = document.querySelector(".typed-text"),
  header = "Hey there!, I'm Ngole Lawson.",
  typingDelay = 50;
let charIndex = 0,
  arrayIndex = 0;
function typed() {
  charIndex < header.length &&
    ((typedTextSpan.textContent += header.charAt(charIndex)),
    charIndex++,
    setTimeout(typed, typingDelay));
}
document.addEventListener("DOMContentLoaded", function () {
  typed();
});
const getNavbarWrapper = document.querySelector(".nav-wrapper");
function changingBackgroundColor() {
  100 < window.scrollY && window.outerWidth <= 768
    ? ((getNavbarWrapper.style.transition = ".5s ease-in-out background-color"),
      (getNavbarWrapper.style.backgroundColor = "var(--navColor)"),
      (getNavbarWrapper.style.borderBottom = "1px solid grey"))
    : 768 < window.outerWidth
    ? (getNavbarWrapper.style.backgroundColor = "var(--navWrapper)")
    : ((getNavbarWrapper.style.backgroundColor = "#111"),
      (getNavbarWrapper.style.borderBottom = "0"));
}
function showMenu(e, t) {
  const o = document.getElementById(e),
    a = document.getElementById(t);
  o &&
    a &&
    o.addEventListener("click", () => {
      a.classList.toggle("show"), console.log("toggle");
    });
}
window.addEventListener("scroll", changingBackgroundColor),
  showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav_link");
function smoothScroll(e) {
  e.preventDefault();
  e = e.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(e).offsetTop,
    behavior: "smooth",
  });
}
function headerLinkClicked(e) {
  smoothScroll(e),
    navLink.forEach((e) => e.classList.remove("active")),
    this.classList.add("active");
  const t = document.getElementById("nav-menu");
  t.classList.remove("show");
}
navLink.forEach((e) => e.addEventListener("click", headerLinkClicked));
let theme = localStorage.getItem("theme");
theme = null == theme ? setTheme("light") : setTheme(theme);
let themeDots = document.getElementsByClassName("theme-dot");
for (let t = 0; themeDots.length > t; t++)
  themeDots[t].addEventListener("click", () => {
    var e = themeDots[t].dataset.mode;
    console.log("Option Clicked:", e), setTheme(e);
  });
function setTheme(e) {
  switch (e) {
    case "light":
      document.getElementById("theme-style").href = "css/index.css";
      break;
    case "blue":
      document.getElementById("theme-style").href = "css/blue.css";
      break;
    case "green":
      document.getElementById("theme-style").href = "css/green.css";
      break;
    case "purple":
      document.getElementById("theme-style").href = "css/purple.css";
  }
  localStorage.setItem("theme", e);
}
const backToTopButton = document.querySelector("#btnScrollToTop");
function scrollToTopFunction() {
  600 < window.pageYOffset
    ? backToTopButton.classList.contains("btnEntrance") ||
      (backToTopButton.classList.remove("btnExit"),
      backToTopButton.classList.add("btnEntrance"),
      (backToTopButton.style.display = "block"))
    : backToTopButton.classList.contains("btnEntrance") &&
      (backToTopButton.classList.remove("btnEntrance"),
      backToTopButton.classList.add("btnExit"),
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250));
}
function backToTop() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", scrollToTopFunction),
  backToTopButton.addEventListener("click", backToTop),
  document
    .querySelector("#contact-form")
    .addEventListener("submit", handleSubmit);
let isSent = !1;
const firebaseConfig = {
  apiKey: "AIzaSyBScrU9r7S3gVtPfcnY_IkVkkzgPyL-P6Y",
  authDomain: "portfolio-contact-e51e3.firebaseapp.com",
  projectId: "portfolio-contact-e51e3",
  storageBucket: "portfolio-contact-e51e3.appspot.com",
  messagingSenderId: "254843869121",
  appId: "1:254843869121:web:4cfcc2fe0d4532def50140",
  measurementId: "G-Y9ELXL80KX",
};
firebase.initializeApp(firebaseConfig);
let contactFormData = firebase.database().ref("form-data");
function retrieveFormData() {
  let e = firebase.database().ref("form-data");
  e.on("value", gotData);
}
function gotData(e) {
  var t = e.val(),
    o = Object.keys(t);
  for (let e = 0; e < o.length; e++) {
    var a = o[e];
    t[a].fullNames, t[a].subject, t[a].userEmail, t[a].message;
  }
}
function handleSubmit(e) {
  e.preventDefault();
  var t = document.querySelector("#names").value,
    o = document.querySelector("#subjects").value,
    a = document.querySelector("#emails").value,
    e = document.querySelector("#messages").value;
  saveFormData(t, o, a, e),
    document.querySelector("#contact-form").reset(),
    sendEmail(t, o, a, e);
}
function saveFormData(e, t, o, a) {
  let n = contactFormData.push();
  n.set({ fullNames: e, subject: t, userEmail: o, message: a }),
    retrieveFormData();
}
function sendEmail(e, t, o, a) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ngolelawson7@gmail.com",
    Password: "cozmzagkvibvyhki",
    To: "ngolelawson7@gmail.com",
    From: `${o}`,
    Subject: `${t}`,
    Body: `Name 👨: ${e} <br/> Email 📧: ${o} <br/> Message 📧: ${a}`,
  })
    .then((e) =>
      swal("Thanks for reaching out!", "Will get back to you soon", "success")
    )
    .catch((e) => swal("Oops...", "Sorry message not Submitted", "error"));
}
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2e3,
  reset: !0,
});
scrollReveal.reveal(".section_title", {}),
  scrollReveal.reveal(".project-wrapper", {}),
  scrollReveal.reveal(".left-column", {}),
  scrollReveal.reveal(".profile-img", {}),
  scrollReveal.reveal(".theme_options_wrapper", { delay: 200 }),
  scrollReveal.reveal(".theme-customize", { delay: 200 }),
  scrollReveal.reveal(".about-me", {}),
  scrollReveal.reveal(".skills_subtitle", {}),
  scrollReveal.reveal(".skills_data", { interval: 200 }),
  scrollReveal.reveal(".skills_subtitle", {}),
  scrollReveal.reveal(".form-animation", {});
