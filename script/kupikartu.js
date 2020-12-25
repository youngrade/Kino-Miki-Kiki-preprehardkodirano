const jokerTermini = {
  "15:00": p1500,
  "20:30": p2030,
};
var slobodnaSjedista = null;
const odabranihSjedista = document.getElementById("ukupno-sjedista");
const zaPlatiti = document.getElementById("za-platiti-span");
const cijenaKarte = document.getElementById("cijena-karte");
var cijenaZaPlatiti;

inicijalizujSlobodnaSjedista();
function inicijalizujSlobodnaSjedista() {
  slobodnaSjedista = document.getElementsByClassName("seat");

  //Na svako slobodno sjediste dodajemo event listener na klik
  for (let i = 0; i < slobodnaSjedista.length; i++) {
    slobodnaSjedista[i].addEventListener("click", (e) => {
      //console.log(e.target.innerHTML);
      if (e.target.className == "seat") {
        e.target.classList.remove("seat");
        e.target.classList.add("seat-odabrano");

        odabranihSjedista.innerText++;
        zaPlatiti.innerText =
          parseInt(zaPlatiti.innerText) + parseInt(cijenaKarte.innerText);
      } else {
        e.target.classList.remove("seat-odabrano");
        e.target.classList.add("seat");

        odabranihSjedista.innerText--;
        zaPlatiti.innerText =
          parseInt(zaPlatiti.innerText) - parseInt(cijenaKarte.innerText);
      }
      provjeriDugme();
    });
  }
}

function ponistiOdabranaSjedista() {
  var odabrana = document.querySelectorAll(".seat-odabrano");

  for (let i = 0; i < odabrana.length; i++) {
    odabrana[i].classList.remove("seat-odabrano");
    odabrana[i].classList.add("seat");
  }
  nulirajSpanove();
  provjeriDugme();
}
function odabirTermina() {
  let termin = document.getElementById("selekcija");
  if (termin.value == "15:00") {
    document.getElementById("seats-all").innerHTML = jokerTermini[termin.value];
    cijenaKarte.innerText = 5;
  } else if (termin.value == "20:30") {
    document.getElementById("seats-all").innerHTML = jokerTermini[termin.value];
    cijenaKarte.innerText = 8;
  }
  nulirajSpanove();
  ponistiOdabranaSjedista();
  provjeriDugme();
  inicijalizujSlobodnaSjedista();
}
function nulirajSpanove() {
  odabranihSjedista.innerText = 0;
  zaPlatiti.innerText = 0;
  provjeriDugme();
}
function provjeriDugme() {
  let dugme = document.querySelector("#rezervisi-btn button");
  if (zaPlatiti.innerText == 0) {
    dugme.id = "btn-blocked";
    return false;
  } else {
    dugme.id = "btn-rezervisi";
    return true;
  }
}
function platiRezervaciju() {
  if (provjeriDugme()) {
    document.getElementById("payment-container").style.display = "flex";
    document.querySelector(".seats-container").style.opacity = 0;
  }
}
