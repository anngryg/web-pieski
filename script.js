let MalamutBtn = document.getElementById("MalamutBtn");
let Malamute = document.getElementById("Malamute");
let BCBtn = document.getElementById("BorderCollieBtn");
let BorderCollie = document.getElementById("BorderCollie");
let OABtn = document.getElementById("OwczarekAustralijskiBtn");
let OwczarekAustralijski = document.getElementById("OwczarekAustralijski");
let SIBtn = document.getElementById("SeterIrlandzkiBtn");
let SeterIrlandzki = document.getElementById("SeterIrlandzki");
let HuskyBtn = document.getElementById("HuskyBtn");
let Husky = document.getElementById("Husky");
let intro = document.getElementById("intro");

MalamutBtn.addEventListener("click", () => {
  Malamute.style.display = "block";
  BorderCollie.style.display = "none";
  OwczarekAustralijski.style.display = "none";
  SeterIrlandzki.style.display = "none";
  Husky.style.display = "none";
  intro.style.display = "none";
});

BCBtn.addEventListener("click", () => {
  BorderCollie.style.display = "block";
  Malamute.style.display = "none";
  OwczarekAustralijski.style.display = "none";
  SeterIrlandzki.style.display = "none";
  Husky.style.display = "none";
  intro.style.display = "none";
});

OABtn.addEventListener("click", () => {
  OwczarekAustralijski.style.display = "block";
  Malamute.style.display = "none";
  BorderCollie.style.display = "none";
  SeterIrlandzki.style.display = "none";
  Husky.style.display = "none";
  intro.style.display = "none";
});

SIBtn.addEventListener("click", () => {
  SeterIrlandzki.style.display = "block";
  Malamute.style.display = "none";
  BorderCollie.style.display = "none";
  OwczarekAustralijski.style.display = "none";
  Husky.style.display = "none";
  intro.style.display = "none";
});

HuskyBtn.addEventListener("click", () => {
  Husky.style.display = "block";
  Malamute.style.display = "none";
  BorderCollie.style.display = "none";
  OwczarekAustralijski.style.display = "none";
  SeterIrlandzki.style.display = "none";
  intro.style.display = "none";
});
