const repertoar = {
  "Ponedjeljak": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Utorak": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Srijeda": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Četvrtak": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Petak": petak,
  "Subota": subota,
  "Nedjelja": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
};
const meni = document.querySelector(".meni").style;

function nemaProjekcija() {
  alert("Nema zakazanih projekcija za odabrani dan, pa tek smo počeli jarane");
}
window.addEventListener("scroll", () => {
  if (this.scrollY === 0) {
    meni.opacity = "1";
    //meni.backgroundColor = "#20232a";
  } else {
    meni.opacity = "0.95";
    //meni.backgroundColor = "#20232aad";
  }
});

const dani = document.getElementsByClassName("dan");
for (let i = 0; i < dani.length; i++) {
  dani[i].addEventListener("click", (e) => {
    for (let i = 0; i < dani.length; i++) dani[i].id = "";
    e.target.id = "dan-active";
    console.log(e.target.innerText);
    document.getElementById("filmovi-lista").innerHTML =
      repertoar[e.target.innerText];
  });
}
function rezervisiSjedista() {
  document.getElementById("shadow-box").style.zIndex = "3";
  document.getElementById("shadow-box").style.height = "100%";
  document.querySelector(".seats-container").style.opacity = "1";
}
function rezervacijaZatvori() {
  document.getElementById("shadow-box").style.zIndex = "-1";
  document.getElementById("shadow-box").style.height = "0%";
  document.querySelector(".seats-container").style.opacity = "0";
}
