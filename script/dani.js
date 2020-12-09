const petak = `
          <div class="film-ponuda">
            <div class="film-ponuda-desno">
              <div class="film-ponuda-slika">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
                />
              </div>
              <div class="film-ponuda-podaci">
                <div>
                  <h2>Joker</h2>
                  <p>Godina: 2019</p>
                  <p>Redatelj: Todd Phillips</p>
                  <p>Uloge: Joaqin Phoenix, Robert De Niro</p>
                  <p>Žanr: Drama, Triler</p>
                  <p>Trajanje: 122 min</p>
                </div>
                <div class="film-ponuda-opsirnije">
                  <a><h3>Opširnije...</h3></a>
                </div>
              </div>
            </div>
            <div class="film-ponuda-lijevo">
              <div class="film-ponuda-termini">
                <h3>Sala 1</h3>
                <p>12:00</p>
                <p>17:30</p>
                <p>22:00</p>
              </div>
            </div>
            <div class="film-ponuda-rezervisi">
              <button>Kupi kartu</button>
            </div>
          </div>
          <div class="film-ponuda">
            <div class="film-ponuda-desno">
              <div class="film-ponuda-slika">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
                />
              </div>
              <div class="film-ponuda-podaci">
                <div>
                  <h2>Green Book</h2>
                  <p>Godina: 2018</p>
                  <p>Redatelj: Peter Farrelly</p>
                  <p>Uloge: Viggo Mortensen, Mahershala Ali</p>
                  <p>Žanr: Biografija, Komedija, Drama</p>
                  <p>Trajanje: 130 min</p>
                </div>
                <div class="film-ponuda-opsirnije">
                  <a><h3>Opširnije...</h3></a>
                </div>
              </div>
            </div>
            <div class="film-ponuda-lijevo">
              <div class="film-ponuda-termini">
                <h3>Sala 2</h3>
                <p>15:00</p>
                <p>17:30</p>
                <p>20:00</p>
              </div>
            </div>
            <div class="film-ponuda-rezervisi">
              <button>Kupi kartu</button>
            </div>
          </div>
          <div class="film-ponuda">
            <div class="film-ponuda-desno">
              <div class="film-ponuda-slika">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
                />
              </div>
              <div class="film-ponuda-podaci">
                <div>
                  <h2>Star Wars: Epizoda V - Imperija uzvraća udarac</h2>
                  <p>Godina: 1980</p>
                  <p>Redatelj: George Lucas</p>
                  <p>Uloge: Mark Hamill, Harrison Ford, Carrie Fisher</p>
                  <p>Žanr: Akcija, Avantura, Fantazija</p>
                  <p>Trajanje: 124 min</p>
                </div>
                <div class="film-ponuda-opsirnije">
                  <a><h3>Opširnije...</h3></a>
                </div>
              </div>
            </div>
            <div class="film-ponuda-lijevo">
              <div class="film-ponuda-termini">
                <h3>Sala 1</h3>
                <p>14:30</p>
                <p>19:00</p>
              </div>
            </div>
            <div class="film-ponuda-rezervisi">
              <button>Kupi kartu</button>
            </div>
          </div>
`;
const subota = `
            <div class="film-ponuda">
                <div class="film-ponuda-desno">         
                     <div class="film-ponuda-slika"><img src="https://m.media-amazon.com/images/M/MV5BNWY5Nzk3NzctMWM1Ni00ZTM2LWJhMzgtYjdiMTZmODczM2U2XkEyXkFqcGdeQXVyNTgzMjIwMjM@._V1_UY268_CR1,0,182,268_AL_.jpg"></div>
                    <div class="film-ponuda-podaci">
                        <div>
                        <h2>Brat 2</h2>
                        <p>Godina: 2000</p>
                        <p>Redatelj: Aleksej Balabanov</p>
                        <p>Uloge: Sergej Bodrov mlađi, Viktor Suhorukov</p>
                        <p>Žanr: Akcija, Krimi, Triler</p>
                        <p>Trajanje: 122 min</p>
                    </div>
                    <div class="film-ponuda-opsirnije">
                        <a><h3>Opširnije...</h3></a>
                    </div>
                    </div>
            </div>
            <div class="film-ponuda-lijevo">
                <div class="film-ponuda-termini">
                    <h3>Sala 1</h3>
                    <p>12:00</p>
                    <p>17:30</p>
                    <p>22:00</p>
                </div>   
            </div>
            <div class="film-ponuda-rezervisi">
                <button>Kupi kartu</button>
            </div>    
            </div>
            <div class="film-ponuda">
                <div class="film-ponuda-desno">         
                     <div class="film-ponuda-slika"><img src="https://m.media-amazon.com/images/M/MV5BM2Y0M2I3ZWItYTRjZi00YTAyLTliYWQtZGM3YzhiMDBmY2NiXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"></div>
                    <div class="film-ponuda-podaci">
                        <div>
                        <h2>Moonlighting</h2>
                        <p>Godina: 1982</p>
                        <p>Redatelj: Jerzy Skolimowski</p>
                        <p>Uloge: Jeremy Irons, Eugene Lipinski, Jirí Stanislav</p>
                        <p>Žanr: Drama</p>
                        <p>Trajanje: 97 min</p>
                    </div>
                    <div class="film-ponuda-opsirnije">
                        <a><h3>Opširnije...</h3></a>
                    </div>
                    </div>
            </div>
            <div class="film-ponuda-lijevo">
                <div class="film-ponuda-termini">
                    <h3>Sala 2</h3>
                    <p>15:00</p>
                    <p>17:30</p>
                    <p>20:00</p>
                </div>
            </div>
            <div class="film-ponuda-rezervisi">
                <button>Kupi kartu</button>
            </div>       
            </div>
            <div class="film-ponuda">
                <div class="film-ponuda-desno">         
                     <div class="film-ponuda-slika"><img src="https://m.media-amazon.com/images/M/MV5BYzI0MTM2NjgtNzQ3OS00MTY0LTk3ZmItZWU4YzQwMzAxZWI4XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_UY268_CR1,0,182,268_AL_.jpg"></div>
                    <div class="film-ponuda-podaci">
                        <div>
                        <h2>Savršeni krug</h2>
                        <p>Godina: 1997</p>
                        <p>Redatelj: Ademir Kenović</p>
                        <p>Uloge: Mustafa Nadarević, Almedin Leleta, Almir Podgorica</p>
                        <p>Žanr: Drama, Rat</p>
                        <p>Trajanje: 110 min</p>
                    </div>
                    <div class="film-ponuda-opsirnije">
                        <a><h3>Opširnije...</h3></a>
                    </div>
                    </div>
            </div>
            <div class="film-ponuda-lijevo">
                <div class="film-ponuda-termini">
                    <h3>Sala 1</h3>
                    <p>14:30</p>
                    <p>19:00</p>
                </div>    
            </div>
            <div class="film-ponuda-rezervisi">
                <button>Kupi kartu</button>
            </div>   
            </div>
`;
