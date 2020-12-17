const slobodnaSjedista = document.getElementsByClassName("seat");
const odabranihSjedista = document.getElementById("ukupno-sjedista");
const zaPlatiti = document.getElementById("za-platiti-span");

for (let i = 0; i < slobodnaSjedista.length; i++) {
  slobodnaSjedista[i].addEventListener("click", (e) => {
    //console.log(e.target.innerHTML);
    if (e.target.className == "seat") {
      e.target.classList.remove("seat");
      e.target.classList.add("seat-odabrano");

      odabranihSjedista.innerText++;
      zaPlatiti.innerText = parseInt(zaPlatiti.innerText) + 5;
    } else {
      e.target.classList.remove("seat-odabrano");
      e.target.classList.add("seat");

      odabranihSjedista.innerText--;
      zaPlatiti.innerText = parseInt(zaPlatiti.innerText) - 5;
    }
  });
}
