const repertoar = {
  "Ponedjeljak": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Utorak": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Srijeda": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Četvrtak": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
  "Petak": petak,
  "Subota": subota,
  "Nedjelja": '<h3 id="prazan-dan">Nema zakazanih projekcija!</h3>',
};
const meni = document.getElementById("meni").style;

function nemaProjekcija() {
  alert("Nema zakazanih projekcija za odabrani dan, pa tek smo počeli jarane");
}
window.addEventListener("scroll", () => {
  if (this.scrollY === 0) {
    meni.backgroundColor = "#20232a";
    meni.height = meniHeight;
  } else {
    meni.backgroundColor = "#20232aad";
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
