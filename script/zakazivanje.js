const slika = document.querySelector("#zakazivanje-container-slika img");
const krajnjiDiv = document.getElementById("krajnji-datum-div");

function prikaziSliku() {
  let filmOdabran = document.querySelector(".film-select");
  slika.src = filmOdabran.value;
}
function omoguciKrajnjiDatum() {
  let radio = document.getElementById("radio-za-danas");
  let input = document.getElementById("krajnji-datum");
  console.log(radio.checked);

  if (radio.checked) {
    input.disabled = true;
    input.value = "";
    krajnjiDiv.style.opacity = 0;
  } else {
    input.disabled = false;
    krajnjiDiv.style.opacity = 1;
  }
}
