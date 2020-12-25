const kartica = `
          <div>
            <label>Ime</label>
            <input placeholder="4242 4242 4242 4242" />
          </div>
          <div>
            <label>Prezime</label>
            <input placeholder="2020" />
          </div>
          <div>
            <label>Broj kartice</label>
            <input placeholder="4242 4242 4242 4242" />
          </div>
          <div id="cvv">
            <div>
              <label>Godina isteka</label>
              <input placeholder="2020" style="width: 200px" />
            </div>
            <div>
              <label>CVV</label>
              <input placeholder="cvv" style="width: 150px" />
            </div>
          </div>`;
const paypal = `<div>
            <label>E-mail</label>
            <input placeholder="john.doe@gmail.com" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>`;
document.getElementById("pay-method-span").innerText = 16;
function odaberiMetodu(e) {
  if (e.target.value == "kartica") {
    document.getElementById("placanje-forma").innerHTML = kartica;
  } else {
    document.getElementById("placanje-forma").innerHTML = paypal;
  }
}
function nazad() {
  document.getElementById("payment-container").style.display = "none";
  document.querySelector(".seats-container").style.opacity = 1;
}
