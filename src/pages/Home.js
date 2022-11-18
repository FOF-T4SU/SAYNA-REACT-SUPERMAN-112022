import React from "react";
import logoDC from "../assets/logos/logoDC.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img12 from "../assets/images/img12.png";
// import img15 from "../assets/images/img15.png";
import polygon from "../assets/icones/Polygon.png";
import polygon1 from "../assets/icones/Polygon-1.png";
import guillemet_1 from "../assets/icones/guillemet_1.png";
import guillemet_2 from "../assets/icones/guillemet_2.png";
import "../styles/home.scss";

function Home() {
  return (
    <main id="home">
      {/* <div class="scroll">
            <img class="social" src="./assets/Logos/icon_facebook.png" alt="">
            <img class="social" src="./assets/Logos/icon_ig.png" alt="">
            <img class="social" src="./assets/Logos/icon_tw.png" alt="">
         </div> */}
      <section id="hero">
        <div class="container">
          <div class="content">
            <p class="texte">
              <img src={logoDC} alt="logoDC" />
              <h1>SUPERMAN</h1>
              <span class="titre">L'HOMME D'ACIER</span>
            </p>
          </div>
        </div>
      </section>

      <section id="batman-cinema">
        <div class="container">
          <h1 class="titre">Batman au Cinema</h1>
          <p class="description">
            Le personnage de Batman est un super héros de l’univers de DC
            Comics. Il a été créé par le dessinateur Bob Kane et le scénariste
            Bill Finger et apparaît pour la première fois dans le comic book
            Detective Comics en 1939. Batman se différencie de Superman, alors
            héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au
            cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera
            de nombreux reboot, donnant l’occasion à de multiples acteurs
            d’interpréter l’homme chauve-souris. Voici les trois derniers :
          </p>
          <div class="batman-personnage">
            <div class="batman-item">
              <img src={img2} alt="bat_robert" width="304" height="450" />
            </div>
            <div class="batman-item">
              <img src={img3} alt="bat_christian" width="304" height="450" />
            </div>
            <div class="batman-item">
              <img src={img4} alt="bat_ben" width="304" height="450" />
            </div>
          </div>
        </div>
      </section>

      <section id="batman-cinema">
        <div class="container">
          <h1 class="titre">Batman au Cinema</h1>
          <p class="description">
            Le personnage de Batman est un super héros de l’univers de DC
            Comics. Il a été créé par le dessinateur Bob Kane et le scénariste
            Bill Finger et apparaît pour la première fois dans le comic book
            Detective Comics en 1939. Batman se différencie de Superman, alors
            héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au
            cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera
            de nombreux reboot, donnant l’occasion à de multiples acteurs
            d’interpréter l’homme chauve-souris. Voici les trois derniers :
          </p>
          <div class="batman-personnage">
            <div class="batman-item">
              <img src={img5} alt="bat_robert" width="304" height="450" />
            </div>
            <div class="batman-item">
              <img src={img6} alt="bat_christian" width="304" height="450" />
            </div>
            <div class="batman-item">
              <img src={img7} alt="bat_ben" width="304" height="450" />
            </div>
          </div>
        </div>
      </section>

      <section id="batman-cinema">
        <div class="container">
          <h1 class="titre">Batman au Cinema</h1>
          <p class="description">
            Le personnage de Batman est un super héros de l’univers de DC
            Comics. Il a été créé par le dessinateur Bob Kane et le scénariste
            Bill Finger et apparaît pour la première fois dans le comic book
            Detective Comics en 1939. Batman se différencie de Superman, alors
            héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au
            cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera
            de nombreux reboot, donnant l’occasion à de multiples acteurs
            d’interpréter l’homme chauve-souris. Voici les trois derniers :
          </p>
          <div class="batman-personnage">
            <div class="batman-item">
              <img src={img8} alt="bat_robert" width="304" height="450" />
            </div>
            <div class="batman-item">
              <img src={img9} alt="bat_christian" width="304" height="450" />
            </div>
            <div class="batman-item">
              <img src={img10} alt="bat_ben" width="304" height="450" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- JUSTICE LEAGUE --> */}
      <section id="league">
        <div className="container">
          <h2>JUSTICE LEAGUE</h2>
          <p>
            Lorsque la Terre est menacée les plus grands super-héros s’allient
            pour la protéger. Ils doivent cependant apprendre à se faire
            confiance mutuellement et à faire équipe ce qui ne sera pas chose
            aisée. Ensemble ils forment la Justice League, les plus grands
            super-héros de la Terre, ceux vers qui le monde entier se tourne
            lorsque les menaces extraterrestres ou surnaturelles menacent son
            existence.
          </p>
        </div>
        {/* <img src={Bathome11} alt="league" /> */}
      </section>

      {/* <!-- MULTIMEDIA --> */}
      <section id="multimedia">
        <div className="container">
          <h2>MULTIMEDIA</h2>
          <img src={polygon1} alt="fleche_gauche" />
          <div className="annonce">
            <img src={img12} alt="begins_bat" />
            <div>
              <p>ACTION, ADVENTURE</p>
              <p>Batman Begins</p>
              <p>
                IMDB : <span>7.2</span>
              </p>
              <p>
                Le jeune Bruce Wayne assiste impuissant au meurtre de ses
                parents. Profondément traumatisé, il grandit obnubilé par un
                désir de vengeance. La Ligue des ombres, une secte de guerriers
                ninja dirigée par Ra's al Ghul, se chargera de son entraînement.
                De retour chez lui à Gotham, avec l'aide de son majordome Alfred
                Pennyworth, Bruce Wayne se lance alors dans la lutte contre le
                crime sous le nom de Batman.
              </p>
            </div>
          </div>
          <img src={polygon} alt="fleche_droite" />
        </div>
        <div className="container mt-4 text-center">
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/yP7J0rlFkrg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <img src={img15} alt="bande_annonce" /> */}
        </div>
      </section>

      {/* <!-- CONTACT --> */}
      <section id="contact">
        <div className="container">
          <h2>PRENONS CONTACT</h2>
          <form action="" method="post">
            <p>
              <label>ADRESSE EMAIL</label>
            </p>
            <p>
              <input
                type="mail"
                name="email"
                placeholder="Adresse email"
                required
                className="saisi"
              />
            </p>
            <p>
              <label>NEWSLETTER</label>
            </p>
            <p>
              <label for="newsletter">
                En cochant cette case vous accepter de recevoir l'actualite
                concernant les avantures de Batman :{" "}
              </label>
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                required
              />
            </p>
            <p>
              <select className="saisi" required>
                <option>
                  Choisissez la frequence à laquelle vous souhaitez recevoir
                  votre newsletter
                </option>
                <option>Une fois par semaine</option>
                <option>
                  Une fois toutes les deux semaines (2 fois par semaine)
                </option>
                <option>Une fois par mois</option>
                <option>Une fois tous les trois mois</option>
                <option>Une fois tous les six mois</option>
              </select>
            </p>
            {/* tyle="border-bottom: 2px solid #BCBBBD;" */}
            <p>
              <label>souhaitez vous recevoir des news</label>
            </p>
            <p className="cent">
              <input type="radio" name="new" id="film" />
              <label for="film">Des films</label>
              <input type="radio" name="new" id="comic" />
              <label for="comic">Des comics</label>
              <input type="radio" name="new" id="tout" />
              <label for="tout">De tout</label>
            </p>
            <p>
              <label>MESSAGE</label>
            </p>
            <p>
              <textarea
                placeholder="Laisser un commentaire pour la communaute"
                className="saisi"
              ></textarea>
            </p>
            <p className="cent">
              <input type="submit" name="valid" value="CONFIRMER" />
            </p>
          </form>
        </div>
      </section>

      {/* <!-- CITATION --> */}
      <section id="citation">
        <div className="container">
          <img src={guillemet_1} alt="guillement-gauche" />
          <div>
            <p>
              La seule façon raisonnable de vivre en ce bas monde, c'est en
              dehors des règles.
            </p>
            <p className="auteur">
              The Dark Knight : Le Chevalier Noir - Le Joker à Batman (2008)
            </p>
          </div>
          <img src={guillemet_2} alt="guillement-droite" />
        </div>
      </section>
    </main>
  );
}

export default Home;
